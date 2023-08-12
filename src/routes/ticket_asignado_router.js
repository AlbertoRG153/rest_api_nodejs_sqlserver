import { Router } from 'express';
import { getTicketsAsignados, getTicketAsignadoById, createTicketAsignado, deleteTicketAsignadoById} from '../controllers/ticket_asignado_controller'


const router = Router();

// Rutas para Tickets Asignados
router.get('/tickets-asignados', getTicketsAsignados);
router.get('/tickets-asignados/:id', getTicketAsignadoById);
router.post('/tickets-asignados', createTicketAsignado);
router.delete('/tickets-asignados/:id', deleteTicketAsignadoById);


export default router;
