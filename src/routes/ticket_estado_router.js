import { Router } from 'express';
import { getEstadosTicket, getEstadoTicketById, createEstadoTicket, deleteEstadoTicketById } from '../controllers/ticket_estado_controller'


const router = Router();


// Rutas para Estados de Ticket
router.get('/estados-ticket', getEstadosTicket);
router.get('/estados-ticket/:id', getEstadoTicketById);
router.post('/estados-ticket', createEstadoTicket);
router.delete('/estados-ticket/:id', deleteEstadoTicketById);

// ... Otras rutas para CRUD si las necesitas ...

export default router;
