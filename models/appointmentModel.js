const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    timeSlot: { type: String, required: true, unique: true },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    phoneNumber: { type: String, default: '' },
    isBooked: { type: Boolean, default: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
