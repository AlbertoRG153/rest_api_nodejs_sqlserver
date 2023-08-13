import { Router } from 'express';
import { authenticateAndAuthorize } from '../middlewares/authMiddleware';
import { createPuntuacionTicket, getAgentesWithLowPuntuations, createReduccionSueldo } from '../controllers/recursosHumanos.controller';

const router = Router();

// Define los roles permitidos para cada tipo de operación
const rolesPost = ['Admin'];
const rolesGet = ['Admin', 'Recursos Humanos'];


// Aplica el middleware de autenticación y autorización a las rutas
router.post('/RH/Post/puntuaciones-ticket', authenticateAndAuthorize(rolesPost), createPuntuacionTicket);
router.get('/RH/get/agentes-tickets-bajos', authenticateAndAuthorize(rolesGet), getAgentesWithLowPuntuations);
router.post('/RH/Post/reducciones-sueldo', authenticateAndAuthorize(rolesPost), createReduccionSueldo);

export default router;
