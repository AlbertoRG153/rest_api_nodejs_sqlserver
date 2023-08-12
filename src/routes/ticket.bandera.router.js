import express from 'express';
import * as banderaTicketController from './controllers/banderaTicket.controller'; // Ajusta la ruta según tu estructura de archivos

const router = express.Router();

// Rutas para Banderas de Ticket
router.get('/banderas-ticket', banderaTicketController.getBanderasTicket);
router.get('/banderas-ticket/:id', banderaTicketController.getBanderaTicketById);
router.post('/banderas-ticket', banderaTicketController.createBanderaTicket);
router.delete('/banderas-ticket/:id', banderaTicketController.deleteBanderaTicketById);

// ... Otras rutas para CRUD si las necesitas ...

export default router;
