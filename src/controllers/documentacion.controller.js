import { getConnection, sql, queries } from '../database';

export const createDocumentacion = async (req, res) => {
    const { id_tipo_ticket, titulo, descripcion } = req.body;

    try {
        const pool = await getConnection();
        await pool.request()
            .input('id_tipo_ticket', sql.Int, id_tipo_ticket)
            .input('titulo', sql.VarChar, titulo)
            .input('descripcion', sql.Text, descripcion)
            .query(queries.createDocumentacion);

        res.json({ msg: 'Documentación creada exitosamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getAllDocumentacion = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllDocumentacion);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getDocumentacionById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(queries.getDocumentacionById);

        if (result.recordset.length === 0) {
            return res.status(404).json({ msg: 'Documentación no encontrada' });
        }

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const updateDocumentacion = async (req, res) => {
    const { id } = req.params;
    const { id_tipo_ticket, titulo, descripcion } = req.body;

    try {
        const pool = await getConnection();
        await pool.request()
            .input('id', sql.Int, id)
            .input('id_tipo_ticket', sql.Int, id_tipo_ticket)
            .input('titulo', sql.VarChar, titulo)
            .input('descripcion', sql.Text, descripcion)
            .query(queries.updateDocumentacion);

        res.json({ msg: 'Documentación actualizada exitosamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const deleteDocumentacionById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        await pool.request()
            .input('id', sql.Int, id)
            .query(queries.deleteDocumentacionById);

        res.json({ msg: 'Documentación eliminada exitosamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getDocumentacionByTipoTicket = async (req, res) => {
    const { id_tipo_ticket } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id_tipo_ticket', sql.Int, id_tipo_ticket)
            .query(`SELECT * FROM Documentacion WHERE id_tipo_ticket = @id_tipo_ticket`);

        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
};