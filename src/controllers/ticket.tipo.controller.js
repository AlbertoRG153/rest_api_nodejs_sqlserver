import { getConnection, sql } from '../database';
import { queries } from '../queries'; // Ajusta la importación según tu estructura de archivos

export const createTipoTicket = async (req, res) => {
    try {
        const { proridad, id_nivel_soporte, id_especialidad } = req.body;
        
        const pool = await getConnection();

        await pool.request()
            .input('proridad', sql.Int, proridad)
            .input('id_nivel_soporte', sql.Int, id_nivel_soporte)
            .input('id_especialidad', sql.Int, id_especialidad)
            .query(queries.createTipoTicket);

        res.json({ message: 'Tipo de ticket creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTiposTickets = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllTiposTickets);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTipoTicketById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();

    const result = await pool.request()
        .input('Id', id)
        .query(queries.getTipoTicketById);

    if (result.recordset.length === 0) {
        return res.status(404).json({ error: 'Tipo de ticket no encontrado' });
    }

    res.json(result.recordset[0]);
};

export const deleteTipoTicketById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();

    await pool.request()
        .input('Id', id)
        .query(queries.deleteTipoTicketById);

    res.json({ message: 'Tipo de ticket eliminado' });
};


export const updateTipoTicketFields = async (req, res) => {
    try {
        const { id } = req.params;
        const { proridad, id_nivel_soporte, id_especialidad } = req.body;

        const pool = await getConnection();

        await pool.request()
            .input('id', sql.Int, id)
            .input('proridad', sql.Int, proridad)
            .input('id_nivel_soporte', sql.Int, id_nivel_soporte)
            .input('id_especialidad', sql.Int, id_especialidad)
            .query(queries.updateTipoTicketFields);

        res.json({ message: 'Tipo de ticket actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 