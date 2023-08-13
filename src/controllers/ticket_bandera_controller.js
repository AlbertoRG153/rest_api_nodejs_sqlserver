import { getConnection, sql, queries } from '../database';
// Ajusta la importación según tu estructura de archivos

export const createBanderaTicket = async (req, res) => {
    try {
        const { solucion } = req.body;

        const pool = await getConnection();

        await pool.request()
            .input('solucion', sql.VarChar, solucion)
            .query(queries.createBanderaTicket);

        res.json({ message: 'Bandera de ticket creada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getBanderasTicket = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllBanderasTicket);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getBanderaTicketById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();

    const result = await pool.request()
        .input('Id', id)
        .query(queries.getBanderaTicketById);

    if (result.recordset.length === 0) {
        return res.status(404).json({ error: 'Bandera de ticket no encontrada' });
    }

    res.json(result.recordset[0]);
};

export const deleteBanderaTicketById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();

    await pool.request()
        .input('Id', id)
        .query(queries.deleteBanderaTicketById);

    res.json({ message: 'Bandera de ticket eliminada' });
};

// ... Otras funciones para CRUD si las necesitas ...
