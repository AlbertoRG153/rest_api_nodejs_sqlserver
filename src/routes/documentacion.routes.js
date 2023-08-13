import { Router } from 'express';
import {createDocumentacion,getAllDocumentacion,getDocumentacionById,updateDocumentacion,deleteDocumentacionById,getDocumentacionByTipoTicket} from '../controllers/documentacion.controller';

const router = Router();

router.post('/documentacion/post', createDocumentacion);
router.get('/documentacion/get', getAllDocumentacion);
router.get('/documentacion/get/:id', getDocumentacionById);
router.get('/documentacion/get/tipo-ticket/:id_tipo_ticket', getDocumentacionByTipoTicket);

router.put('/documentacion/put/:id', updateDocumentacion);
router.delete('/documentacion/delete/:id', deleteDocumentacionById);

export default router;
