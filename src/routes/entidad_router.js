import { Router } from 'express';
import { getEntidades, getEntidadById, createEntidad, updateEntidadById,deleteEntidadById } from './controllers/entidad_controller';



const router = Router();
// Rutas para Entidades
router.get('/entidades/Get', getEntidades);
router.get('/entidades/Get/:id',getEntidadById);
router.post('/entidades', createEntidad);
router.put('/entidades/put/:id', updateEntidadById);
router.delete('/entidades/delete/:id', deleteEntidadById);

export default router;
