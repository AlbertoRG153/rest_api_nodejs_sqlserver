import express from 'express'
import config from './config'
import clientesRoutes from './routes/clientes.routes'
import Ticketroutes from './routes/ticket.routes'
import VistasGen from './routes/vistageneral.routes'
import Documentacion from './routes/documentacion.routes'
import REHUM from './routes/recursosHumanos.routes'

const app = express();

//Settings
app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(clientesRoutes);
app.use(Ticketroutes);
app.use(VistasGen);
app.use(Documentacion);
app.use(REHUM);


export default app