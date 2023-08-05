
import { getConnection, sql, queries } from '../database'

export const getClientes = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllClientes);
        res.json(result.recordset);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const saveClientes = async (req, res) => {

    try {
        const { nombre, telefono, correo, contrasena } = req.body

        if (nombre == null || telefono == null || correo == null || contrasena == null) {
            return res.status(400).json({ msg: 'Bad Request.  Por favor llena todos los campos' })
        }

        const pool = await getConnection();

        await pool.request()
            .input('nombre', sql.VarChar, nombre)
            .input('telefono', sql.VarChar, telefono)
            .input('correo', sql.VarChar, correo)
            .input('contrasena', sql.VarChar, contrasena)
            .query(queries.saveCliente);

        res.json({ nombre, telefono, correo, contrasena });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};