
import { getConnection, sql, queries } from '../database'

export const getEmpleados = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllEmpleados);
        res.json(result.recordset);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getEmpleadosByLogin = async (req, res) => {
    try {
        const { correo, contrasenia } = req.body

        if (correo == null || contrasenia == null) {
            return res.status(400).json({ msg: 'Bad Request.  Por favor llena todos los campos' })
        }

        const pool = await getConnection();

        const result = await pool.request()
            .input('correo', sql.VarChar, correo)
            .input('contrasenia', sql.VarChar, contrasenia)
            .query(queries.getEmpleadoByLogin);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const saveEmpleado = async (req, res) => {

    try {
        const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, contrasenia,
            id_cargo, id_sucursal, id_roles } = req.body

        if (primer_nombre == null || segundo_nombre == null || primer_apellido == null || segundo_apellido == null
            || correo == null || contrasenia == null || id_cargo == null || id_sucursal == null || id_roles == null
        ) {
            return res.status(400).json({ msg: 'Bad Request.  Por favor llena todos los campos' })
        }

        const pool = await getConnection();

        await pool.request()
            .input('primer_nombre', sql.VarChar, primer_nombre)
            .input('segundo_nombre', sql.VarChar, segundo_nombre)
            .input('primer_apellido', sql.VarChar, primer_apellido)
            .input('segundo_apellido', sql.VarChar, segundo_apellido)
            .input('correo', sql.VarChar, correo)
            .input('contrasenia', sql.VarChar, contrasenia)
            .input('id_cargo', sql.Int, id_cargo)
            .input('id_sucursal', sql.Int, id_sucursal)
            .input('id_roles', sql.Int, id_roles)
            .query(queries.saveEmpleado);

        res.json({
            primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, contrasenia, id_cargo,
            id_sucursal, id_roles
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getEmpleadoById = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()

    const result = await pool.request()
        .input('Id', id)
        .query(queries.getEmpleadoById)

    res.json(result.recordset[0])
};

export const deleteEmpleadoById = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()

    const result = await pool.request()
        .input('Id', id)
        .query(queries.deleteEmpleadoById)

    res.send(result)
};

export const updateEmpleadoById = async (req, res) => {
    try {
        const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, contrasenia,
            id_cargo, id_sucursal, id_roles } = req.body

        const { id } = req.params

        if (primer_nombre == null || segundo_nombre == null || primer_apellido == null || segundo_apellido == null
            || correo == null || contrasenia == null || id_cargo == null || id_sucursal == null || id_roles == null
        ) {
            return res.status(400).json({ msg: 'Bad Request.  Por favor llena todos los campos' })
        }

        const pool = await getConnection();

        await pool.request()
            .input('primer_nombre', sql.VarChar, primer_nombre)
            .input('segundo_nombre', sql.VarChar, segundo_nombre)
            .input('primer_apellido', sql.VarChar, primer_apellido)
            .input('segundo_apellido', sql.VarChar, segundo_apellido)
            .input('correo', sql.VarChar, correo)
            .input('contrasenia', sql.VarChar, contrasenia)
            .input('id_cargo', sql.Int, id_cargo)
            .input('id_sucursal', sql.Int, id_sucursal)
            .input('id_roles', sql.Int, id_roles)
            .input('Id', id)
            .query(queries.updateEmpleadoById);

        res.json({
            primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, contrasenia, id_cargo,
            id_sucursal, id_roles
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
