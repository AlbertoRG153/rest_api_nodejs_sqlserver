import express from 'express';
import * as ticketAsignadoController from './controllers/ticketAsignado.controller'; // Ajusta la ruta según tu estructura de archivos

const router = express.Router();

// Rutas para Tickets Asignados
router.get('/tickets-asignados', ticketAsignadoController.getTicketsAsignados);
router.get('/tickets-asignados/:id', ticketAsignadoController.getTicketAsignadoById);
router.post('/tickets-asignados', ticketAsignadoController.createTicketAsignado);
router.delete('/tickets-asignados/:id', ticketAsignadoController.deleteTicketAsignadoById);


export default router;
