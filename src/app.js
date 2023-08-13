import express from 'express'
import config from './config'
import clientesRoutes from './routes/clientes.routes'
import Ticketroutes from './routes/ticket.routes'

const app = express();

//Settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(clientesRoutes);
app.use(Ticketroutes);

export default app