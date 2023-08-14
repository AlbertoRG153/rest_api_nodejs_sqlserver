
import { getConnection, sql, queries } from '../database'

export const getEmpresas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllEmpresas);
        res.json(result.recordset);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getSucursalesEmpresa = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()

    const result = await pool.request()
        .input('Id', id)
        .query(queries.getSucursales)

    res.json(result.recordset)
};

export const getTelefonosEmpresa = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()

    const result = await pool.request()
        .input('Id', id)
        .query(queries.getTelefonosEmpresa)

    res.json(result.recordset)
};

export const saveEmpresa = async (req, res) => {

    try {
        const { nombre, RTN, CAI, tiempo_espera, id_nivel_soporte } = req.body

        if (nombre == null || RTN == null || CAI == null || tiempo_espera == null || id_nivel_soporte == null) {
            return res.status(400).json({ msg: 'Bad Request.  Por favor llena todos los campos' })
        }

        const pool = await getConnection();

        await pool.request()
            .input('nombre', sql.VarChar, nombre)
            .input('RTN', sql.VarChar, RTN)
            .input('CAI', sql.VarChar, CAI)
            .input('tiempo_espera', sql.Time, tiempo_espera)
            .input('id_nivel_soporte', sql.Int, id_nivel_soporte)
            .query(queries.saveEmpresa);

        res.json({ nombre, RTN, CAI, tiempo_espera, id_nivel_soporte });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getEmpresasById = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()

    const result = await pool.request()
        .input('Id', id)
        .query(queries.getEmpresaById)

    res.json(result.recordset[0])
};

export const deleteEmpresaById = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()

    const result = await pool.request()
        .input('Id', id)
        .query(queries.deleteEmpresaById)

    res.send(result)
};

export const updateEmpresaById = async (req, res) => {

    try {

        const { nombre, RTN, CAI, fecha_contrato } = req.body

        const { id } = req.params

        if (nombre == null || RTN == null || CAI == null || fecha_contrato == null) {
            return res.status(400).json({ msg: 'Bad Request.  Por favor llena todos los campos' })
        }

        const pool = await getConnection();

        await pool.request()
            .input('nombre', sql.VarChar, nombre)
            .input('RTN', sql.VarChar, RTN)
            .input('CAI', sql.VarChar, CAI)
            .input('fecha_contrato', sql.Date, fecha_contrato)
            .input('Id', id)
            .query(queries.updateEmpresa);

        res.json({ nombre, RTN, CAI, fecha_contrato });

    } catch (error) {
        res.send(error)
    }
}

export const saveSucrusalEmpresa = async (req, res) => {

    try {
        const { longitud, latitud, tres_digitos, codigo, nombre, id_empresa } = req.body

        if (longitud == null || latitud == null || tres_digitos == null || codigo == null || nombre == null || id_empresa == null) {
            return res.status(400).json({ msg: 'Bad Request.  Por favor llena todos los campos' })
        }

        const pool = await getConnection();

        await pool.request()
            .input('longitud', sql.Decimal(9, 6), longitud)
            .input('latitud', sql.Decimal(9, 6), latitud)
            .input('tres_digitos', sql.Int, tres_digitos)
            .input('codigo', sql.VarChar, codigo)
            .input('nombre', sql.VarChar, nombre)
            .input('id_empresa', sql.Int, id_empresa)
            .query(queries.saveScucursalEmpresa);

        res.json({ longitud, latitud, tres_digitos, codigo, nombre, id_empresa });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



