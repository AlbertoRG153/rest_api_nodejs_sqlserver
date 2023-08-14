import { Router } from "express";
import {
    createFactura,
    getFacturaById,
    getFacturasByEmpresa,
    deleteFacturaById 
  } from '../controllers/factura.controller';
  import { authenticateAndAuthorize } from '../middlewares/authMiddleware';
  

// Define los roles permitidos para cada tipo de operación
    const rolesGet = ['Administrador', 'Agente', 'Recursos Humanos'];
    const rolesPost = ['Administrador', 'Agente' ];
    const rolesDelete = ['Administrador'];

  const router = Router();
    
  router.post('/factura/post', authenticateAndAuthorize(rolesPost), createFactura);
  router.get('/factura/get/:id', authenticateAndAuthorize(rolesGet), getFacturaById);
  router.get('/factura/get/empresa/:id_empresa', authenticateAndAuthorize(rolesGet), getFacturasByEmpresa);
  router.delete('/factura/delete/:id', authenticateAndAuthorize(rolesDelete), deleteFacturaById); // Add this route
  

  
  export default router;