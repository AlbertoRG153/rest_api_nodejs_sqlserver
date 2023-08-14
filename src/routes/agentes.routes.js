import { Router } from "express";
import { getAgentesById, saveAgente, updateAgenteById, deleteAgenteById, getLogin } from '../controllers/agentes.controller'

const router = Router()

router.get('/agentes/get',)

router.get('/agentes/get/:id', getAgentesById)

router.post('/agentes/save', saveAgente)

router.put('/agentes/update/:id', updateAgenteById)

router.delete('/agentes/delete/:id', deleteAgenteById)

router.get('agentes/get/login', getLogin)

export default router