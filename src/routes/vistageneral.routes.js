import { Router } from 'express';
import { getAgentesWithEspecialidades, getEmpleadosDetails,getAgentesWithEspecialidadesById,getEmpleadosDetailsById } from '../controllers/vistageneral.controller';

const router = Router();

router.get('/agentes-especialidades', getAgentesWithEspecialidades);
router.get('/empleados-details', getEmpleadosDetails);

router.get('/agentes-especialidades/:id', getAgentesWithEspecialidadesById);
router.get('/empleados-details/:id', getEmpleadosDetailsById);

export default router;
