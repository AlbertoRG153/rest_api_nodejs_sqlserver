import { getConnection, sql } from '../database';
import { queries } from '../queries'; // Ajusta la importación según tu estructura de archivos

export const createTicketEscalado = async (req, res) => {
    try {
        const { agente_peticion_escalacion, id_nivel_soporte, agente_asignado_escalacion, descripcion } = req.body;
        
        const pool = await getConnection();

        await pool.request()
            .input('agente_peticion_escalacion', sql.Int, agente_peticion_escalacion)
            .input('id_nivel_soporte', sql.Int, id_nivel_soporte)
            .input('agente_asignado_escalacion', sql.Int, agente_asignado_escalacion)
            .input('descripcion', sql.Text, descripcion)
            .query(queries.createTicketEscalado);

        res.json({ message: 'Ticket escalado creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTicketsEscalados = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllTicketsEscalados);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTicketEscaladoById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();

    const result = await pool.request()
        .input('Id', id)
        .query(queries.getTicketEscaladoById);

    if (result.recordset.length === 0) {
        return res.status(404).json({ error: 'Ticket escalado no encontrado' });
    }

    res.json(result.recordset[0]);
};

export const deleteTicketEscaladoById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();

    await pool.request()
        .input('Id', id)
        .query(queries.deleteTicketEscaladoById);

    res.json({ message: 'Ticket escalado eliminado' });
};

// ... Otras funciones para CRUD si las necesitas ...
