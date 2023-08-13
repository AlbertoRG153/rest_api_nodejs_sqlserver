import { Router } from 'express';
import {createPuntuacionTicket,getAgentesWithLowPuntuations,createReduccionSueldo, createRecursoHumano, updateRecursoHumano,deleteRecursoHumano,getAllRecursosHumanos,getRecursoHumanoById,} from '../controllers/recursosHumanos.controller';

const router = Router();

router.post('/RH/Post/puntuaciones-ticket', createPuntuacionTicket);
router.get('/RH/get/agentes-tickets-bajos', getAgentesWithLowPuntuations);
router.post('/RH/Post/reducciones-sueldo', createReduccionSueldo);
// Agregar rutas para otras funciones CRUD

router.post('/recursos-humanos/post', createRecursoHumano);
router.put('/recursos-humanos/put/:id', updateRecursoHumano);
router.delete('/recursos-humanos/delete/:id', deleteRecursoHumano);
router.get('/recursos-humanos/get', getAllRecursosHumanos);
router.get('/recursos-humanos/get/:id', getRecursoHumanoById);

export default router;
