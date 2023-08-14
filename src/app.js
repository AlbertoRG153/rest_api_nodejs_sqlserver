import express from 'express'
import config from './config'
import clientesRoutes from './routes/clientes.routes'
import empresasRoutes from './routes/empresas.routes'
import agentesRoutes from './routes/agentes.routes'
import empleadosRoutes from './routes/empleados.routes'

const app = express();

//Settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(clientesRoutes, empresasRoutes, agentesRoutes, empleadosRoutes);

export default app