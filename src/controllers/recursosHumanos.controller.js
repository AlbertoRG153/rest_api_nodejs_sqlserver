import { getConnection, sql, queries } from '../database';

export const createPuntuacionTicket = async (req, res) => {
    const { id_ticket, puntuacion } = req.body;

    try {
        const pool = await getConnection();
        await pool.request()
            .input('id_ticket', sql.Int, id_ticket)
            .input('puntuacion', sql.Decimal(3, 2), puntuacion)
            .query(queries.createPuntuacionTicket);

        res.json({ msg: 'Puntuación de ticket creada exitosamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getAgentesWithLowPuntuations = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAgentesWithLowPuntuations);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const createReduccionSueldo = async (req, res) => {
    const { id_agente, cantidad_tickets, porcentaje_reduccion } = req.body;

    try {
        const pool = await getConnection();
        await pool.request()
            .input('id_agente', sql.Int, id_agente)
            .input('cantidad_tickets', sql.Int, cantidad_tickets)
            .input('porcentaje_reduccion', sql.Decimal(3, 2), porcentaje_reduccion)
            .query(queries.createReduccionSueldo);

        res.json({ msg: 'Reducción de sueldo registrada exitosamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const createRecursoHumano = async (req, res) => {
    const { nombre, apellido } = req.body;

    try {
        const pool = await getConnection();
        await pool.request()
            .input('nombre', sql.VarChar, nombre)
            .input('apellido', sql.VarChar, apellido)
            .query(queries.createRecursoHumano);

        res.json({ msg: 'Recurso humano creado exitosamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const updateRecursoHumano = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido } = req.body;

    try {
        const pool = await getConnection();
        await pool.request()
            .input('id', sql.Int, id)
            .input('nombre', sql.VarChar, nombre)
            .input('apellido', sql.VarChar, apellido)
            .query(queries.updateRecursoHumano);

        res.json({ msg: 'Recurso humano actualizado exitosamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const deleteRecursoHumano = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        await pool.request()
            .input('id', sql.Int, id)
            .query(queries.deleteRecursoHumano);

        res.json({ msg: 'Recurso humano eliminado exitosamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getAllRecursosHumanos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllRecursosHumanos);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getRecursoHumanoById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(queries.getRecursoHumanoById);

        if (result.recordset.length === 0) {
            return res.status(404).json({ msg: 'Recurso humano no encontrado' });
        }

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

