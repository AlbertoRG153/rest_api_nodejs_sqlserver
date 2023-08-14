import { Router } from 'express';
import { getTiposTickets, createTipoTicket, deleteTipoTicketById, updateTipoTicketFields,getTipoTicketById} from '../controllers/ticket_tipo_controller'


const router = Router();


// Rutas para Tipos de Tickets
router.get('/tipos-tickets', getTiposTickets);
router.get('/tipos-tickets/:id', getTipoTicketById);
router.post('/tipos-tickets', createTipoTicket);
router.delete('/tipos-tickets/:id', deleteTipoTicketById);
router.put('/tipos-tickets/:id', updateTipoTicketFields);

// ... Otras rutas para CRUD si las necesitas ...

export default router;
