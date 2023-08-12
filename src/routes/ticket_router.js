import { Router } from 'express';
import { getTickets, createTicket, getTicketById, updateTicketById, updateTicketDates, updateTicketSatisfaction,deleteTicketById,post1Ticket,post2Ticket,post3Ticket } from '../controllers/ticket_controller'


const router = Router();

// Rutas para Tickets
router.get('/tickets/get', getTickets);
router.get('/tickets/get/:id', getTicketById);
router.post('/tickets/post', createTicket);
router.put('/tickets/put/:id', updateTicketById);
router.put('/tickets/:id/dates', updateTicketDates);
router.put('/tickets/:id/satisfaction', updateTicketSatisfaction);
router.delete('/tickets/:id', deleteTicketById);

// Rutas para procedimientos almacenados
router.post('/tickets/post1', post1Ticket);
router.post('/tickets/post2', post2Ticket);
router.post('/tickets/post3', post3Ticket);

export default router;
