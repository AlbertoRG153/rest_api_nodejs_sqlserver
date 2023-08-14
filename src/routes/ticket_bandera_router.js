import { Router } from 'express';
import { getBanderasTicket, getBanderaTicketById, createBanderaTicket, deleteBanderaTicketById } from '../controllers/ticket_bandera_controller'

const router = Router();

// Rutas para Banderas de Ticket
router.get('/banderas-ticket', getBanderasTicket);
router.get('/banderas-ticket/:id', getBanderaTicketById);
router.post('/banderas-ticket', createBanderaTicket);
router.delete('/banderas-ticket/:id', deleteBanderaTicketById);

// ... Otras rutas para CRUD si las necesitas ...

export default router;
