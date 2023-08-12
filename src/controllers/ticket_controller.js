import { getConnection, sql, queries } from '../database';

// Operaciones CRUD para Tickets

export const createTicket = async (req, res) => {
    try {
        const { empleado_emisor, id_agente_helpdesk_asignado, fecha_emision, descripcion, id_tipo_ticket, id_estado_ticket, id_bandera_ticket } = req.body;
        
        const pool = await getConnection();

        await pool.request()
            .input('empleado_emisor', sql.Int, empleado_emisor)
            .input('id_agente_helpdesk_asignado', sql.Int, id_agente_helpdesk_asignado)
            .input('fecha_emision', sql.Date, fecha_emision)
            .input('descripcion', sql.Text, descripcion)
            .input('id_tipo_ticket', sql.Int, id_tipo_ticket)
            .input('id_estado_ticket', sql.Int, id_estado_ticket)
            .input('id_bandera_ticket', sql.Int, id_bandera_ticket)
            .query(queries.createTicket);

        res.json({ message: 'Ticket creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateTicketDates = async (req, res) => {
    try {
        const { id } = req.params;
        const { fecha_comienzo_trabajo, fecha_fin_trabajo, id_estado_ticket, id_bandera_ticket } = req.body;

        const pool = await getConnection();

        await pool.request()
            .input('fecha_comienzo_trabajo', sql.Date, fecha_comienzo_trabajo)
            .input('fecha_fin_trabajo', sql.Date, fecha_fin_trabajo)
            .input('id_estado_ticket', sql.Int, id_estado_ticket)
            .input('id_bandera_ticket', sql.Int, id_bandera_ticket)
            .input('id', sql.Int, id)
            .query(queries.updateTicketDates);

        res.json({ message: 'Fechas de trabajo y estado/bandera actualizados' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateTicketSatisfaction = async (req, res) => {
    try {
        const { id } = req.params;
        const { puntuacion_satisfaccion, id_estado_ticket, id_bandera_ticket } = req.body;

        const pool = await getConnection();

        await pool.request()
            .input('puntuacion_satisfaccion', sql.Int, puntuacion_satisfaccion)
            .input('id_estado_ticket', sql.Int, id_estado_ticket)
            .input('id_bandera_ticket', sql.Int, id_bandera_ticket)
            .input('id', sql.Int, id)
            .query(queries.updateTicketSatisfaction);

        res.json({ message: 'Puntuación de satisfacción y estado/bandera actualizados' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTickets = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllTickets);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTicketById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();

    const result = await pool.request()
        .input('Id', id)
        .query(queries.getTicketById);

    res.json(result.recordset[0]);
};

export const deleteTicketById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();

    await pool.request()
        .input('Id', id)
        .query(queries.deleteTicketById);

    res.json({ message: 'Ticket eliminado' });
};

export const getTotalTickets = async (req, res) => {
    const pool = await getConnection();

    const result = await pool.request()
        .query(queries.getTotalTickets);

    res.json(result.recordset[0]['']);
};

export const updateTicketById = async (req, res) => {
    const { id } = req.params;
    const { empleado_emisor, id_agente_helpdesk_asignado, fecha_emision, descripcion, id_tipo_ticket, id_estado_ticket, id_bandera_ticket } = req.body;

    const pool = await getConnection();

    await pool.request()
        .input('empleado_emisor', sql.Int, empleado_emisor)
        .input('id_agente_helpdesk_asignado', sql.Int, id_agente_helpdesk_asignado)
        .input('fecha_emision', sql.Date, fecha_emision)
        .input('descripcion', sql.Text, descripcion)
        .input('id_tipo_ticket', sql.Int, id_tipo_ticket)
        .input('id_estado_ticket', sql.Int, id_estado_ticket)
        .input('id_bandera_ticket', sql.Int, id_bandera_ticket)
        .input('id', sql.Int, id)
        .query(queries.updateTicketById);

    res.json({ message: 'Ticket actualizado' });
};

// ... Más operaciones CRUD si las necesitas ...

export const post1Ticket = async (req, res) => {
    try {
        const { empleado_emisor, id_agente_helpdesk_asignado, fecha_emision, descripcion, id_tipo_ticket, id_estado_ticket, id_bandera_ticket } = req.body;
        
        const pool = await getConnection();

        await pool.request()
            .input('empleado_emisor', sql.Int, empleado_emisor)
            .input('id_agente_helpdesk_asignado', sql.Int, id_agente_helpdesk_asignado)
            .input('fecha_emision', sql.Date, fecha_emision)
            .input('descripcion', sql.Text, descripcion)
            .input('id_tipo_ticket', sql.Int, id_tipo_ticket)
            .input('id_estado_ticket', sql.Int, id_estado_ticket)
            .input('id_bandera_ticket', sql.Int, id_bandera_ticket)
            .execute('sp_Post1Ticket');

        res.json({ message: 'Ticket creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const post2Ticket = async (req, res) => {
    try {
        const { id, fecha_comienzo_trabajo, fecha_fin_trabajo, id_estado_ticket, id_bandera_ticket } = req.body;

        const pool = await getConnection();

        await pool.request()
            .input('id', sql.Int, id)
            .input('fecha_comienzo_trabajo', sql.Date, fecha_comienzo_trabajo)
            .input('fecha_fin_trabajo', sql.Date, fecha_fin_trabajo)
            .input('id_estado_ticket', sql.Int, id_estado_ticket)
            .input('id_bandera_ticket', sql.Int, id_bandera_ticket)
            .execute('sp_Post2Ticket');

        res.json({ message: 'Fechas de trabajo y estado/bandera actualizados' });
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const post3Ticket = async (req, res) => {
    try {
        const { id, puntuacion_satisfaccion, id_estado_ticket, id_bandera_ticket } = req.body;

        const pool = await getConnection();

        await pool.request()
            .input('id', sql.Int, id)
            .input('puntuacion_satisfaccion', sql.Int, puntuacion_satisfaccion)
            .input('id_estado_ticket', sql.Int, id_estado_ticket)
            .input('id_bandera_ticket', sql.Int, id_bandera_ticket)
            .execute('sp_Post3Ticket');

        res.json({ message: 'Puntuación de satisfacción y estado/bandera actualizados' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
