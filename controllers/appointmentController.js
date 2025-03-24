const Appointment = require('../models/appointmentModel.js');

// Get all appointments
const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Book an appointment
const bookAppointment = async (req, res) => {
    try {
        const { timeSlot, firstName, lastName, phoneNumber } = req.body;
        const userId = req.user.id;

        let appointment = await Appointment.findOne({ timeSlot });

        if (!appointment) {
            appointment = new Appointment({ timeSlot, firstName, lastName, phoneNumber, isBooked: true, userId });
        } else {
            appointment.firstName = firstName;
            appointment.lastName = lastName;
            appointment.phoneNumber = phoneNumber;
            appointment.isBooked = true;
            appointment.userId = userId;
        }

        await appointment.save();
        res.json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Edit an appointment (including timeSlot)
const editAppointment = async (req, res) => {
    const { timeSlot } = req.params;
    const { newTimeSlot, firstName, lastName, phoneNumber } = req.body;

    try {
        let appointment = await Appointment.findOne({ timeSlot });
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }
        if (newTimeSlot && newTimeSlot !== timeSlot) {
            const existingAppointment = await Appointment.findOne({ timeSlot: newTimeSlot });
            if (existingAppointment) {
                return res.status(400).json({ message: "New time slot is already booked" });
            }
            appointment.timeSlot = newTimeSlot;
        }

        appointment.firstName = firstName || appointment.firstName;
        appointment.lastName = lastName || appointment.lastName;
        appointment.phoneNumber = phoneNumber || appointment.phoneNumber;

        await appointment.save();
        res.json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Edit an appointment by name
const editAppointmentByName = async (req, res) => {
    const { firstName } = req.params;
    const { newTimeSlot, phoneNumber } = req.body;

    console.log("Editing appointment for:", firstName);

    try {
        let appointment = await Appointment.findOne({ firstName });
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        if (newTimeSlot && newTimeSlot !== appointment.timeSlot) {
            const existingAppointment = await Appointment.findOne({ timeSlot: newTimeSlot });
            if (existingAppointment) {
                return res.status(400).json({ message: "New time slot is already booked" });
            }
            appointment.timeSlot = newTimeSlot;
        }

        appointment.phoneNumber = phoneNumber || appointment.phoneNumber;

        await appointment.save();
        res.json(appointment);
    } catch (error) {
        console.error("Error updating appointment:", error);
        res.status(500).json({ message: error.message });
    }
};

// Delete an appointment
const deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findOneAndDelete({ timeSlot: req.params.timeSlot });
        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json({ message: 'Appointment deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an appointment by name
const deletebynameAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findOneAndDelete({ firstName: req.params.firstName });
        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json({ message: 'Appointment deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getAppointments,
    bookAppointment,
    editAppointment,
    deleteAppointment,
    editAppointmentByName,
    deletebynameAppointment
};
