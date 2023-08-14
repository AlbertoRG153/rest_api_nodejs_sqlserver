
import { getConnection, sql, queries } from '../database'


export const saveAgente = async (req, res) => {

    try {
        const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, contrasenia,
            id_especialidad, id_nivel_soporte, id_rol, salario, puntuacion_compuesta } = req.body

        if (primer_nombre == null || segundo_nombre == null || primer_apellido == null || segundo_apellido == null
            || correo == null || contrasenia == null || id_especialidad == null || id_nivel_soporte == null || id_rol == null
            || salario == null || puntuacion_compuesta == null) {
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
            .input('id_especialidad', sql.Int, id_especialidad)
            .input('id_nivel_soporte', sql.Int, id_nivel_soporte)
            .input('id_rol', sql.Int, id_rol)
            .input('salario', sql.Decimal(14, 2), salario)
            .input('puntuacion_compuesta', sql.Int, puntuacion_compuesta)
            .query(queries.saveAgente);

        res.json({
            primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, contrasenia, id_especialidad,
            id_nivel_soporte, id_rol, salario, puntuacion_compuesta
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getAgentesById = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()

    const result = await pool.request()
        .input('Id', id)
        .query(queries.getAgenteById)

    res.json(result.recordset[0])
};

export const deleteAgenteById = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()

    const result = await pool.request()
        .input('Id', id)
        .query(queries.deleteAgenteById)

    res.send(result)
};

export const updateAgenteById = async (req, res) => {
    try {
        const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, contrasenia,
            id_especialidad, id_nivel_soporte, id_rol, salario, puntuacion_compuesta } = req.body

        const { id } = req.params

        if (primer_nombre == null || segundo_nombre == null || primer_apellido == null || segundo_apellido == null
            || correo == null || contrasenia == null || id_especialidad == null || id_nivel_soporte == null || id_rol == null
            || salario == null || puntuacion_compuesta == null) {
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
            .input('id_especialidad', sql.Int, id_especialidad)
            .input('id_nivel_soporte', sql.Int, id_nivel_soporte)
            .input('id_rol', sql.Int, id_rol)
            .input('salario', sql.Decimal(14, 2), salario)
            .input('puntuacion_compuesta', sql.Int, puntuacion_compuesta)
            .input('Id', id)
            .query(queries.updateAgenteById);

        res.json({
            primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, contrasenia, id_especialidad,
            id_nivel_soporte, id_rol, salario, puntuacion_compuesta
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
