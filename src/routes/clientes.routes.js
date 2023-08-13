import { Router } from "express";
import { getClientes, saveClientes, getClienteById, deleteClienteById, getTotalClientes, updateClienteById } from '../controllers/clientes_controller'

const router = Router()

router.get('/clientes/get', getClientes)

router.get('/clientes/get/:id', getClienteById)

router.get('/clientes/count', getTotalClientes)

router.post('/clientes/save', saveClientes)

router.put('/clientes/update/:id', updateClienteById)

router.delete('/clientes/delete/:id', deleteClienteById)

export default router