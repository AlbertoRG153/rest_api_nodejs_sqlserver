// authMiddleware.js
import { getConnection, queries, sql } from '../database';

export const authenticateAndAuthorize = (allowedRoles) => {
  return async (req, res, next) => {
    try {
      const { correo, contrasenia } = req.headers; // Obtener correo y contraseña de los headers

      console.log('Correo:', correo);
      console.log('Contraseña:', contrasenia);

      if (!correo || !contrasenia) {
        return res.status(401).json({ message: 'Credenciales no proporcionadas' });
      }

      const pool = await getConnection();

      // Verificar las credenciales en la tabla de Agentes de Helpdesk y Empleados
      const userResult = await pool.request()
        .input('correo', sql.VarChar, correo)
        .input('contrasenia', sql.VarChar, contrasenia)
        .query(queries.getambos);

      console.log('User Result:', userResult.recordset);

      const userRole = userResult.recordset[0]?.rol;

      console.log('UserRole:', userRole);

      if (!userRole) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      // Verificar si el rol del usuario está permitido para esta ruta
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Acceso no autorizado' });
      }

      // Si todo está bien, permite el acceso a la ruta
      next();
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: error.message });
    }
  };
};
