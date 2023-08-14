import { Router } from 'express';
import { authenticateAndAuthorize } from '../middlewares/authMiddleware';
import {
  createDocumentacion,
  getAllDocumentacion,
  getDocumentacionById,
  updateDocumentacion,
  deleteDocumentacionById,
  getDocumentacionByTipoTicket
} from '../controllers/documentacion.controller';

const router = Router();

// Define los roles permitidos para cada tipo de operación
const rolesGet = ['Administrador', 'Agente', 'Recursos Humanos'];
const rolesPost = ['Administrador', 'Agente' ];
const rolesPut = ['Administrador', 'Agente'];
const rolesDelete = ['Administrador'];

// Aplica el middleware de autenticación y autorización a las rutas
router.post('/documentacion/post', authenticateAndAuthorize(rolesPost), createDocumentacion);
router.get('/documentacion/get', authenticateAndAuthorize(rolesGet), getAllDocumentacion);
router.get('/documentacion/get/:id', authenticateAndAuthorize(rolesGet), getDocumentacionById);
router.get('/documentacion/get/tipo-ticket/:id_tipo_ticket', authenticateAndAuthorize(rolesGet), getDocumentacionByTipoTicket);
router.put('/documentacion/put/:id', authenticateAndAuthorize(rolesPut), updateDocumentacion);
router.delete('/documentacion/delete/:id', authenticateAndAuthorize(rolesDelete), deleteDocumentacionById);

export default router;