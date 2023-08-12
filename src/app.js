import express from 'express'
import config from './config'
import clientesRoutes from './routes/clientes.routes'
import ticketRoutes from './routes/ticket.router'

const app = express();

//Settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(clientesRoutes);
app.use(ticketRoutes);

export default app