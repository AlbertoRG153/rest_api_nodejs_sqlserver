import express from 'express'
import config from './config'
import clientesRoutes from './routes/clientes.routes'
import ticketRoutes from './routes/ticket_router'
import ticketAsignado from './routes/ticket_asignado_router'
import ticketEstado from './routes/ticket_escalados_router'
import ticketBandera from './routes/ticket_bandera_router'
import ticketEscalados from './routes/ticket_escalados_router'
import ticketTipo from './routes/ticket_tipo_router'
import Documentos from './routes/documentos_router'


const app = express();

//Settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(clientesRoutes);
app.use(ticketRoutes);
app.use(ticketAsignado);
app.use(ticketEstado);
app.use(ticketBandera);
app.use(ticketEscalados);
app.use(ticketTipo);
app.use(Documentos);


export default app