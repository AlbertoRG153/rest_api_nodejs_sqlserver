import { saveEmpresa } from "../controllers/empresas.controller";

export const queries =
{
    getAllClientes: 'SELECT * FROM Clientes',
    saveCliente: 'INSERT INTO Clientes (nombre, telefono, correo, contrasena) VALUES (@nombre, @telefono, @correo, @contrasena)',
    getClienteById: 'SELECT * FROM Clientes WHERE Id = @Id',
    deleteClienteById: 'DELETE FROM Clientes WHERE Id = @Id',
    getTotalClientes: 'SELECT COUNT(*) FROM Clientes',
    updateClienteById: 'UPDATE Clientes SET nombre=@nombre, telefono=@telefono, correo=@correo, contrasena=@contrasena WHERE Id = @Id',

    //Queries de Empresa
    getAllEmpresas: 'SELECT * FROM Empresas e INNER JOIN Nivel_acuerdo_servicio nas ON e.id_nivel_acuerdo_servicio = nas.id INNER JOIN Niveles_soporte ns ON nas.id_nivel_soporte = ns.id',
    getSucursales: 'SELECT s.id, s.codigo, s.nombre, u.latitud, u.longitud, u.tres_digitos FROM Sucursales s INNER JOIN Empresas e ON s.id_empresa = e.id INNER JOIN Ubicaciones u ON s.id_ubicacion = u.id WHERE e.id=@Id',
    getTelefonosEmpresa: 'SELECT te.telefono FROM Telefonos_empresas te INNER JOIN Empresas e ON te.id_empresa = e.id WHERE e.id = @Id',
    saveEmpresa: 'BEGIN TRANSACTION; DECLARE @id INT; INSERT INTO Nivel_acuerdo_servicio(tiempo_espera, id_nivel_soporte) VALUES (@tiempo_espera, @id_nivel_soporte); SET @id = SCOPE_IDENTITY(); INSERT INTO Empresas (nombre, RTN, CAI, fecha_contrato, id_nivel_acuerdo_servicio) VALUES (@nombre, @RTN, @CAI, GETDATE(), @id); COMMIT TRANSACTION;',
    getEmpresaById: 'SELECT * FROM Empresas e INNER JOIN Nivel_acuerdo_servicio nas ON e.id_nivel_acuerdo_servicio = nas.id INNER JOIN Niveles_soporte ns ON nas.id_nivel_soporte = ns.id WHERE e.id=@Id',
    updateEmpresa: 'UPDATE Empresas SET nombre=@nombre, RTN=@RTN, CAI=@CAI, fecha_contrato=@fecha_contrato WHERE id = @Id;',
    saveScucursalEmpresa: 'BEGIN TRANSACTION; DECLARE @idUbicacion INT; INSERT INTO Ubicaciones(longitud, latitud, tres_digitos) VALUES (@longitud, @latitud, @tres_digitos); SET @idUbicacion = SCOPE_IDENTITY(); INSERT INTO Sucursales(codigo, nombre, id_empresa, id_ubicacion) VALUES (@codigo, @nombre, @id_empresa, @idUbicacion); COMMIT TRANSACTION;',
    deleteEmpresaById: 'DELETE FROM Empresas WHERE id=@Id;',

    //Queries Agentes Helpdesk
    getAgenteById: 'SELECT ah.id, e.primer_nombre, e.segundo_nombre, e.primer_apellido, e.segundo_apellido, e.correo, esp.especialidad, esp.color as colorEspecialidad, ns.nivel_soporte, ns.color as colorSoporte, r.rol FROM Agentes_helpdesk ah INNER JOIN Entidades e ON ah.id = e.id INNER JOIN Especialidades esp ON ah.id_especialidad = esp.id INNER JOIN Niveles_soporte ns ON ah.id_nivel_soporte = ns.nivel_soporte INNER JOIN Roles r ON ah.id_rol = r.id WHERE ah.id = @Id',
    saveAgente: 'BEGIN TRANSACTION; DECLARE @idEntidad INT; INSERT INTO Entidades (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, contrasenia) VALUES (@primer_nombre, @segundo_nombre, @primer_apellido, @segundo_apellido, @correo, @contrasenia); SET @idEntidad = SCOPE_IDENTITY(); INSERT INTO Agentes_helpdesk(id, id_especialidad, id_nivel_soporte, id_rol, salario, puntuacion_compuesta) VALUES (@idEntidad, @id_especialidad, @id_nivel_soporte, @id_rol, @salario, @puntuacion_compuesta); COMMIT TRANSACTION;',
    updateAgenteById: 'BEGIN TRANSACTION; UPDATE Entidades SET primer_nombre=@primer_nombre, segundo_nombre=@segundo_nombre, primer_apellido=@primer_apellido, segundo_apellido=@segundo_apellido, correo=@correo, contrasenia=@contrasenia WHERE id=6; UPDATE Agentes_helpdesk SET id_especialidad=@id_especialidad, id_nivel_soporte=@id_nivel_soporte, id_rol=@id_rol, salario=@salario, puntuacion_compuesta=@puntuacion_compuesta WHERE id=@Id COMMIT TRANSACTION;',
    deleteAgenteById: 'BEGIN TRANSACTION; DELETE FROM Agentes_helpdesk WHERE id = @Id; DELETE FROM Entidades WHERE id=@Id; COMMIT TRANSACTION;',

    //Queries Empleados
    getAllEmpleados: 'SELECT em.id, e.primer_nombre, e.segundo_nombre, e.primer_apellido, e.segundo_apellido, e.correo, e.contrasenia, s.codigo, s.nombre as sucursalNombre, c.nombre as cargoNombre, c.color, r.rol  FROM Empleados em INNER JOIN Entidades e ON em.id = e.id INNER JOIN Cargos c ON em.id_cargo = c.id INNER JOIN Sucursales s ON em.id_sucursal = s.id INNER JOIN Roles r ON em.id_roles = r.id;',
    getEmpleadoById: 'SELECT em.id, e.primer_nombre, e.segundo_nombre, e.primer_apellido, e.segundo_apellido, e.correo, e.contrasenia, s.codigo, s.nombre as sucursalNombre, c.nombre as cargoNombre, c.color, r.rol  FROM Empleados em INNER JOIN Entidades e ON em.id = e.id INNER JOIN Cargos c ON em.id_cargo = c.id INNER JOIN Sucursales s ON em.id_sucursal = s.id INNER JOIN Roles r ON em.id_roles = r.id WHERE em.id=@Id;',
    saveEmpleado: 'BEGIN TRANSACTION; DECLARE @idEmpleado INT; INSERT INTO Entidades (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, contrasenia) VALUES (@primer_nombre, @segundo_nombre, @primer_apellido, @segundo_apellido, @correo, @contrasenia); SET @idEmpleado = SCOPE_IDENTITY(); INSERT INTO  Empleados(id, id_cargo, id_sucursal, id_roles) VALUES (@idEmpleado, @id_cargo, @id_sucursal, @id_roles); COMMIT TRANSACTION;',
    updateEmpleadoById: 'BEGIN TRANSACTION; UPDATE Entidades SET primer_nombre=@primer_nombre, segundo_nombre=@segundo_nombre, primer_apellido=@primer_apellido, segundo_apellido=@segundo_apellido, correo=@correo, contrasenia=@contrasenia WHERE id=@Id; UPDATE Empleados SET id_cargo=@id_cargo, id_roles=@id_roles, id_sucursal=@id_sucursal WHERE id=@Id; COMMIT TRANSACTION;',
    deleteEmpleadoById: 'BEGIN TRANSACTION; DELETE FROM Empleados WHERE id=@Id; DELETE FROM Entidades WHERE id=@Id; COMMIT TRANSACTION;',
    getEmpleadoByLogin: 'SELECT em.id, e.primer_nombre, e.segundo_nombre, e.primer_apellido, e.segundo_apellido, e.correo, e.contrasenia, s.codigo, s.nombre as sucursalNombre, c.nombre as cargoNombre, c.color, r.rol  FROM Empleados em INNER JOIN Entidades e ON em.id = e.id INNER JOIN Cargos c ON em.id_cargo = c.id INNER JOIN Sucursales s ON em.id_sucursal = s.id INNER JOIN Roles r ON em.id_roles = r.id WHERE e.correo=@correo AND e.contrasenia=@contrasenia;'
}