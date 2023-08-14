import express from 'express'
import config from './config'
// import empresasRoutes from './routes/empresas.routes'
// import agentesRoutes from './routes/agentes.routes'
// import empleadosRoutes from './routes/empleados.routes'

const app = express();

//Settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(empresasRoutes, agentesRoutes, empleadosRoutes);

export default app