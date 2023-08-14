import { Router } from "express";
import { getEmpleados, getEmpleadoById, saveEmpleado, updateEmpleadoById, deleteEmpleadoById, getEmpleadosByLogin } from '../controllers/empleados.controller'

const router = Router()

router.get('/empleados/get', getEmpleados)

router.get('/empleados/get/:id', getEmpleadoById)

router.get('/empleados/get-by-login', getEmpleadosByLogin)

router.post('/empleados/save', saveEmpleado)

router.put('/empleados/update/:id', updateEmpleadoById)

router.delete('/empleados/delete/:id', deleteEmpleadoById)

export default router