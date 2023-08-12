import express from 'express';
import * as estadoTicketController from './controllers/estadoTicket.controller'; // Ajusta la ruta según tu estructura de archivos

const router = express.Router();

// Rutas para Estados de Ticket
router.get('/estados-ticket', estadoTicketController.getEstadosTicket);
router.get('/estados-ticket/:id', estadoTicketController.getEstadoTicketById);
router.post('/estados-ticket', estadoTicketController.createEstadoTicket);
router.delete('/estados-ticket/:id', estadoTicketController.deleteEstadoTicketById);

// ... Otras rutas para CRUD si las necesitas ...

export default router;
