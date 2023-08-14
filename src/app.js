import express from 'express'
import config from './config'
import clientesRoutes from './routes/clientes.routes'
import Ticketroutes from './routes/ticket.routes'
import VistasGen from './routes/vistageneral.routes'
import Documentacion from './routes/documentacion.routes'
import REHUM from './routes/recursosHumanos.routes'
import empresasRoutes from './routes/empresas.routes'
import agentesRoutes from './routes/agentes.routes'
import empleadosRoutes from './routes/empleados.routes'

const app = express();

//Settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(empresasRoutes, agentesRoutes, empleadosRoutes, clientesRoutes, Ticketroutes, VistasGen, Documentacion, REHUM);


export default app