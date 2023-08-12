import { Router } from 'express';
import { getTickets, saveClientes, getClienteById, deleteClienteById, getTotalClientes, updateClienteById } from '../controllers/ticket.controller'


const router = Router();

// Rutas para Tickets
router.get('/tickets/get', getTickets);
// router.get('/tickets/get/:id', ticketController.getTicketById);
// router.post('/tickets', ticketController.createTicket);
// router.put('/tickets/:id', ticketController.updateTicketById);
// router.put('/tickets/:id/dates', ticketController.updateTicketDates);
// router.put('/tickets/:id/satisfaction', ticketController.updateTicketSatisfaction);
// router.delete('/tickets/:id', ticketController.deleteTicketById);

// // Rutas para procedimientos almacenados
// router.post('/tickets/post1', ticketController.post1Ticket);
// router.post('/tickets/post2', ticketController.post2Ticket);
// router.post('/tickets/post3', ticketController.post3Ticket);

export default router;
