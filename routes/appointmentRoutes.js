const express = require('express');
const { getAppointments, bookAppointment, editAppointment, deleteAppointment, getUserAppointments, getAppointmentsByFirstName } = require('../controllers/appointmentController.js');
const authMiddleware = require('../middlewares/authMiddleware.js'); // Import middleware

const router = express.Router();

router.get('/', getAppointments);
router.post('/', authMiddleware, bookAppointment); 
router.put('/:timeSlot', authMiddleware, editAppointment); 
router.delete('/:timeSlot', authMiddleware, deleteAppointment); 
router.get('/user/:userId', authMiddleware, getUserAppointments); 
router.get('/name/:firstName', authMiddleware, getAppointmentsByFirstName); 

module.exports = router;
