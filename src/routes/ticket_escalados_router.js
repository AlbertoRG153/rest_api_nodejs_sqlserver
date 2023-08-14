import { Router } from 'express';
import { getTicketsEscalados, getTicketEscaladoById, createTicketEscalado, deleteTicketEscaladoById } from '../controllers/ticket_escaladors_controller'

const router = Router();

// Rutas para Tickets Escalados
router.get('/tickets-escalados', getTicketsEscalados);
router.get('/tickets-escalados/:id', getTicketEscaladoById);
router.post('/tickets-escalados', createTicketEscalado);
router.delete('/tickets-escalados/:id', deleteTicketEscaladoById);

// ... Otras rutas para CRUD si las necesitas ...

export default router;
