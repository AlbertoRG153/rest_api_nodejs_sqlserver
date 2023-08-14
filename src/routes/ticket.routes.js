import { Router } from 'express';
import { authenticateAndAuthorize } from '../middlewares/authMiddleware';
import {
  getTickets,
  post1Ticket,
  post2Ticket,
  post3Ticket,
  getTicketById,
  createTicketall,
  updateTicketById,
  updateTicketSatisfaction,
  updateTicketDates,
  deleteTicketById,
  getTicketsByAgente,
  getTicketsEnCursoEmpleado,
  getTicketsEnCursoAgente,
  getTicketsFinalizadosEmpleado,
  getTicketsFinalizadosAgente,
  getPuntuacionPromedioTickets,
  createTicket2,
  asignarEstadoComienzoTrabajo,
  asignarEstadoFinTrabajo,
  getTicketInfoById,
  getAgenteByNivelEspecialidad,
  deleteTicket,
  getTicketDetails
} from '../controllers/ticket.controller';

const router = Router();

// Define los roles permitidos para cada tipo de operación
const rolesGet = ['Administrador', 'Agente', 'Recursos Humanos'];
const rolesPost = ['Administrador', 'Agente'];
const rolesPut = ['Administrador', 'Agente'];
const rolesDelete = ['Administrador'];

// Aplica el middleware de autenticación y autorización a las rutas
router.get('/tickets/get/all', authenticateAndAuthorize(rolesGet), getTickets);
router.get('/tickets/get/:id', authenticateAndAuthorize(rolesGet), getTicketById);
router.post('/tickets/post/all', authenticateAndAuthorize(rolesPost), createTicketall);
router.put('/tickets/put/:id', authenticateAndAuthorize(rolesPut), updateTicketById);
router.put('/tickets/:id/dates', authenticateAndAuthorize(rolesPut), updateTicketDates);
router.put('/tickets/:id/satisfaction', authenticateAndAuthorize(rolesPut), updateTicketSatisfaction);
router.delete('/tickets/delete/:id', authenticateAndAuthorize(rolesDelete), deleteTicketById);
router.get('/tickets/get/all2', authenticateAndAuthorize(rolesGet), getTicketDetails);

// Rutas para procedimientos almacenados
router.post('/tickets/post1', authenticateAndAuthorize(rolesPost), post1Ticket);
router.post('/tickets/post2', authenticateAndAuthorize(rolesPost), post2Ticket);
router.post('/tickets/post3', authenticateAndAuthorize(rolesPost), post3Ticket);

router.get('/tickets/agente/:id_agente', authenticateAndAuthorize(rolesGet), getTicketsByAgente);
router.get('/tickets/en-curso/empleado/:id_empleado', authenticateAndAuthorize(rolesGet), getTicketsEnCursoEmpleado);
router.get('/tickets/en-curso/agente/:id_agente', authenticateAndAuthorize(rolesGet), getTicketsEnCursoAgente);
router.get('/tickets/finalizados/empleado/:id_empleado', authenticateAndAuthorize(rolesGet), getTicketsFinalizadosEmpleado);
router.get('/tickets/finalizados/agente/:id_agente', authenticateAndAuthorize(rolesGet), getTicketsFinalizadosAgente);
router.get('/tickets/puntuacion-promedio/:id_empleado', authenticateAndAuthorize(rolesGet), getPuntuacionPromedioTickets);

router.get('/tickets/info/:id', authenticateAndAuthorize(rolesGet), getTicketInfoById);
router.get('/tickets/agente/nivel_soporte/:id_especialidad', authenticateAndAuthorize(rolesGet), getAgenteByNivelEspecialidad);
router.put('/tickets/asignar-comienzo-trabajo/:id', authenticateAndAuthorize(rolesPut), asignarEstadoComienzoTrabajo);
router.put('/tickets/asignar-fin-trabajo/:id', authenticateAndAuthorize(rolesPut), asignarEstadoFinTrabajo);
router.post('/tickets/create', authenticateAndAuthorize(rolesPost), createTicket2);
router.delete('/delete-ticket', authenticateAndAuthorize(rolesDelete), deleteTicket);

export default router;