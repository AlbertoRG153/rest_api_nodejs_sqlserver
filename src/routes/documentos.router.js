import express from 'express';
import * as documentacionController from './controllers/documentacion.controller'; // Ajusta la ruta según tu estructura de archivos

const router = express.Router();

// Rutas para Documentación
router.get('/documentaciones', documentacionController.getDocumentaciones);
router.get('/documentaciones/:id', documentacionController.getDocumentacionById);
router.post('/documentaciones', documentacionController.createDocumentacion);
router.delete('/documentaciones/:id', documentacionController.deleteDocumentacionById);

// ... Otras rutas para CRUD si las necesitas ...

export default router;
