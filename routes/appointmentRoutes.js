const express = require('express');
const { getAppointments, bookAppointment, editAppointment, deleteAppointment, editAppointmentByName, deletebynameAppointment} = require('../controllers/appointmentController.js');
const authMiddleware = require('../middlewares/authMiddleware.js'); // Import middleware

const router = express.Router();

router.get('/', getAppointments);
router.post('/', authMiddleware, bookAppointment); 
router.put('/:timeSlot', authMiddleware, editAppointment); 
router.put('/name/:firstName', authMiddleware, editAppointmentByName); 
router.delete('/name/:firstName', authMiddleware, deletebynameAppointment); 
router.delete('/:timeSlot', authMiddleware, deleteAppointment); 


module.exports = router;