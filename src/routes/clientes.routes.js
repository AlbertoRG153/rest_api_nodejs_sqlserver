import { Router } from "express";
import { getClientes, saveClientes } from '../controllers/clientes.controller'

const router = Router()

router.get('/clientes/get', getClientes)

router.get('/clientes',)

router.post('/clientes/save', saveClientes)

router.put('/clientes',)

router.delete('/clientes',)

export default router