import { getConnection, sql, queries } from '../database';
// Ajusta la importación según tu estructura de archivos

export const createDocumentacion = async (req, res) => {
    try {
        const { id_tipo_ticket, titulo, descripcion, fecha_ultima_modificacion } = req.body;

        const pool = await getConnection();

        await pool.request()
            .input('id_tipo_ticket', sql.Int, id_tipo_ticket)
            .input('titulo', sql.VarChar, titulo)
            .input('descripcion', sql.Text, descripcion)
            .input('fecha_ultima_modificacion', sql.Date, fecha_ultima_modificacion)
            .query(queries.createDocumentacion);

        res.json({ message: 'Documentación creada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getDocumentaciones = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllDocumentaciones);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getDocumentacionById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();

    const result = await pool.request()
        .input('Id', id)
        .query(queries.getDocumentacionById);

    if (result.recordset.length === 0) {
        return res.status(404).json({ error: 'Documentación no encontrada' });
    }

    res.json(result.recordset[0]);
};

export const deleteDocumentacionById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();

    await pool.request()
        .input('Id', id)
        .query(queries.deleteDocumentacionById);

    res.json({ message: 'Documentación eliminada' });
};

// ... Otras funciones para CRUD si las necesitas ...
