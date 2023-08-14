import { getConnection, sql, queries } from '../database';

export const createTicketAsignado = async (req, res) => {
    try {
        const { id_agente_helpdesk, id_ticket } = req.body;

        const pool = await getConnection();

        await pool.request()
            .input('id_agente_helpdesk', sql.Int, id_agente_helpdesk)
            .input('id_ticket', sql.Int, id_ticket)
            .query(queries.createTicketAsignado);

        res.json({ message: 'Asignación de ticket creada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTicketsAsignados = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllTicketsAsignados);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTicketAsignadoById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();

    const result = await pool.request()
        .input('Id', id)
        .query(queries.getTicketAsignadoById);

    res.json(result.recordset[0]);
};

export const deleteTicketAsignadoById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();

    await pool.request()
        .input('Id', id)
        .query(queries.deleteTicketAsignadoById);

    res.json({ message: 'Asignación de ticket eliminada' });
};


