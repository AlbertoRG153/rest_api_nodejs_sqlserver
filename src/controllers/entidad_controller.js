import { getConnection, sql, queries } from '../database';

// Crear una nueva entidad
export const createEntidad = async (req, res) => {
  try {
    const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, contrasenia } = req.body;

    const pool = await getConnection();

    await pool.request()
      .input('primer_nombre', sql.NVarChar, primer_nombre)
      .input('segundo_nombre', sql.NVarChar, segundo_nombre)
      .input('primer_apellido', sql.NVarChar, primer_apellido)
      .input('segundo_apellido', sql.NVarChar, segundo_apellido)
      .input('correo', sql.NVarChar, correo)
      .input('contrasenia', sql.NVarChar, contrasenia)
      .query(queries.createEntidad);

    res.json({ message: 'Entidad creada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las entidades
export const getEntidades = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllEntidades);
    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una entidad por su ID
export const getEntidadById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();

  const result = await pool.request()
    .input('Id', id)
    .query(queries.getEntidadById);

  res.json(result.recordset[0]);
};

// Actualizar una entidad por su ID
export const updateEntidadById = async (req, res) => {
  const { id } = req.params;
  const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, contrasenia } = req.body;

  const pool = await getConnection();

  await pool.request()
    .input('primer_nombre', sql.NVarChar, primer_nombre)
    .input('segundo_nombre', sql.NVarChar, segundo_nombre)
    .input('primer_apellido', sql.NVarChar, primer_apellido)
    .input('segundo_apellido', sql.NVarChar, segundo_apellido)
    .input('correo', sql.NVarChar, correo)
    .input('contrasenia', sql.NVarChar, contrasenia)
    .input('id', sql.Int, id)
    .query(queries.updateEntidadById);

  res.json({ message: 'Entidad actualizada' });
};

// Eliminar una entidad por su ID
export const deleteEntidadById = async (req, res) => {
  const { id } = req.params;

  const pool = await getConnection();

  await pool.request()
    .input('Id', id)
    .query(queries.deleteEntidadById);

  res.json({ message: 'Entidad eliminada' });
};
