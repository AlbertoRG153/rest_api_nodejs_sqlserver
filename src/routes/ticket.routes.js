import { Router } from 'express';
import { getTicketsByAgente, getTicketsEnCursoEmpleado, getTicketsEnCursoAgente,getTicketsFinalizadosEmpleado,getTicketsFinalizadosAgente,getPuntuacionPromedioTickets,createTicket, asignarEstadoComienzoTrabajo, asignarEstadoFinTrabajo,getTicketInfoById,getAgenteByNivelEspecialidad,escalateTicket  } from '../controllers/ticket.controller';

const router = Router();

router.get('/tickets/agente/:id_agente', getTicketsByAgente);
router.get('/tickets/en-curso/empleado/:id_empleado', getTicketsEnCursoEmpleado);
router.get('/tickets/en-curso/agente/:id_agente', getTicketsEnCursoAgente);
router.get('/tickets/finalizados/empleado/:id_empleado', getTicketsFinalizadosEmpleado);
router.get('/tickets/finalizados/agente/:id_agente', getTicketsFinalizadosAgente);
router.get('/tickets/puntuacion-promedio/:id_empleado', getPuntuacionPromedioTickets);


router.get('/tickets/info/:id', getTicketInfoById);
router.get('/tickets/agente/:nivel_soporte/:id_especialidad', getAgenteByNivelEspecialidad);
router.put('/tickets/asignar-comienzo-trabajo/:id', asignarEstadoComienzoTrabajo);
router.put('/tickets/asignar-fin-trabajo/:id', asignarEstadoFinTrabajo);
router.post('/tickets/create', createTicket);


router.put('/tickets/escalar/:id', escalateTicket);


export default router;
