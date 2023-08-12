
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

export const getClienteById = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()

    const result = await pool.request()
        .input('Id', id)
        .query(queries.getClienteById)

    res.json(result.recordset[0])
};

export const deleteClienteById = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()

    const result = await pool.request()
        .input('Id', id)
        .query(queries.deleteClienteById)

    res.send(result)
};

export const getTotalClientes = async (eq, res) => {
    const pool = await getConnection()

    const result = await pool.request()
        .query(queries.getTotalClientes)

    res.json(result.recordset[0][''])
};


export const updateClienteById = async (req, res) => {

    const { nombre, telefono, correo, contrasena } = req.body

    const { id } = req.params

    if (nombre == null || telefono == null || correo == null || contrasena == null) {
        return res.status(400).json({ msg: 'Bad Request.  Por favor llena todos los campos' })
    }

    const pool = await getConnection();

    await pool.request()
        .input('nombre', sql.VarChar, nombre)
        .input('telefono', sql.VarChar, telefono)
        .input('correo', sql.VarChar, correo)
        .input('contrasena', sql.VarChar, contrasena)
        .input('Id', sql.Int, id)
        .query(queries.updateClienteById);

    res.json({ nombre, telefono, correo, contrasena });
}


