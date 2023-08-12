import { Router } from 'express';
import { getDocumentaciones, getDocumentacionById, createDocumentacion, createDocumentacion } from './controllers/documentos_controller';



const router = Router();

// Rutas para Documentación
router.get('/documentaciones/get', getDocumentaciones);
router.get('/documentaciones/:id', getDocumentacionById);
router.post('/documentaciones/post', createDocumentacion);
router.delete('/documentaciones/:id', createDocumentacion);

// ... Otras rutas para CRUD si las necesitas ...

export default router;
