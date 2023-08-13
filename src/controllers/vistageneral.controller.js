import { getConnection, sql, queries } from '../database';

export const getAgentesWithEspecialidades = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAgentesWithEspecialidades);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getEmpleadosDetails = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getEmpleadosDetails);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getAgentesWithEspecialidadesById = async (req, res) => {
    const { id } = req.params;
    
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(queries.getAgentesWithEspecialidadesById);
        
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getEmpleadosDetailsById = async (req, res) => {
    const { id } = req.params;
    
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(queries.getEmpleadosDetailsById);
        
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
