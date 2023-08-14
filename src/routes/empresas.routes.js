import { Router } from "express";
import { getEmpresas, getSucursalesEmpresa, getTelefonosEmpresa, saveEmpresa, getEmpresasById, updateEmpresaById, saveSucrusalEmpresa, deleteEmpresaById } from '../controllers/empresas.controller'

const router = Router()

router.get('/empresas/get', getEmpresas)

router.get('/empresas/get/:id', getEmpresasById)

router.get('/empresas/sucursales/get/:id', getSucursalesEmpresa)

router.get('/empresas/telefonos/get/:id', getTelefonosEmpresa)

router.post('/empresas/save', saveEmpresa)

router.post('/empresas/sucursal/save', saveSucrusalEmpresa)

router.put('/empresas/update/:id', updateEmpresaById)

router.delete('/empresas/delete/:id', deleteEmpresaById)

export default router