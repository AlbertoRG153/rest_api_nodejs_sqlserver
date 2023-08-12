import { getConnection, sql } from '../database';
import { queries } from '../queries'; // Ajusta la importación según tu estructura de archivos

export const createEstadoTicket = async (req, res) => {
    try {
        const { estado_ticket, color } = req.body;
        
        const pool = await getConnection();

        await pool.request()
            .input('estado_ticket', sql.VarChar, estado_ticket)
            .input('color', sql.VarChar, color)
            .query(queries.createEstadoTicket);

        res.json({ message: 'Estado de ticket creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getEstadosTicket = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllEstadosTicket);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getEstadoTicketById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();

    const result = await pool.request()
        .input('Id', id)
        .query(queries.getEstadoTicketById);

    if (result.recordset.length === 0) {
        return res.status(404).json({ error: 'Estado de ticket no encontrado' });
    }

    res.json(result.recordset[0]);
};

export const deleteEstadoTicketById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();

    await pool.request()
        .input('Id', id)
        .query(queries.deleteEstadoTicketById);

    res.json({ message: 'Estado de ticket eliminado' });
};

// ... Otras funciones para CRUD si las necesitas ...
