import express from 'express';
import * as tipoTicketController from './controllers/tipoTicket.controller'; // Ajusta la ruta según tu estructura de archivos

const router = express.Router();

// Rutas para Tipos de Tickets
router.get('/tipos-tickets', tipoTicketController.getTiposTickets);
router.get('/tipos-tickets/:id', tipoTicketController.getTipoTicketById);
router.post('/tipos-tickets', tipoTicketController.createTipoTicket);
router.delete('/tipos-tickets/:id', tipoTicketController.deleteTipoTicketById);
router.put('/tipos-tickets/:id', tipoTicketController.updateTipoTicketFields);

// ... Otras rutas para CRUD si las necesitas ...

export default router;
