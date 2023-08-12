import express from 'express';
import * as ticketEscaladoController from './controllers/ticketEscalado.controller'; // Ajusta la ruta según tu estructura de archivos

const router = express.Router();

// Rutas para Tickets Escalados
router.get('/tickets-escalados', ticketEscaladoController.getTicketsEscalados);
router.get('/tickets-escalados/:id', ticketEscaladoController.getTicketEscaladoById);
router.post('/tickets-escalados', ticketEscaladoController.createTicketEscalado);
router.delete('/tickets-escalados/:id', ticketEscaladoController.deleteTicketEscaladoById);

// ... Otras rutas para CRUD si las necesitas ...

export default router;
