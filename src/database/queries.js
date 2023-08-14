
export const queries =
{
    getAllClientes: 'SELECT * FROM Clientes',
    saveCliente: 'INSERT INTO Clientes (nombre, telefono, correo, contrasena) VALUES (@nombre, @telefono, @correo, @contrasena)',
    getClienteById: 'SELECT * FROM Clientes WHERE Id = @Id',
    deleteClienteById: 'DELETE FROM Clientes WHERE Id = @Id',
    getTotalClientes: 'SELECT COUNT(*) FROM Clientes',
    updateClienteById: 'UPDATE Clientes SET nombre=@nombre, telefono=@telefono, correo=@correo, contrasena=@contrasena WHERE Id = @Id',

    ////////////////

    getAllTickets: `
        SELECT 
        Tickets.id,
        Tickets.fecha_emision,
        Tickets.fecha_asignacion,
        Tickets.fecha_comienzo_trabajo,
        Tickets.fecha_fin_trabajo,
        Tickets.descripcion,
        Tickets.puntuacion_satisfaccion,
        Emisor.id AS id_empleado,
        Emisor.primer_nombre AS empleado_primer_nombre,
        Emisor.primer_apellido AS empleado_primer_apellido,
        Agente.id AS id_agente,
        Agente.primer_nombre AS agente_primer_nombre,
        Agente.primer_apellido AS agente_primer_apellido,
        Tipo_tickets.nombre,
        Tipo_tickets.proridad,
        Tipo_tickets.tarifa_por_hora,
        Niveles_soporte.nivel_soporte,
        Niveles_soporte.color AS nivel_soporte_color,
        Especialidades.especialidad,
        Especialidades.color AS especialidad_color,
        Estado_Ticket.estado_ticket,
        Estado_Ticket.color AS estado_ticket_color
    FROM Tickets
    INNER JOIN Entidades AS Emisor ON Tickets.empleado_emisor = Emisor.id
    INNER JOIN Entidades AS Agente ON Tickets.id_agente_helpdesk_asignado = Agente.id
    INNER JOIN Tipo_tickets ON Tickets.id_tipo_ticket = Tipo_tickets.id
    INNER JOIN Niveles_soporte ON Tipo_tickets.id_nivel_soporte = Niveles_soporte.id
    INNER JOIN Especialidades ON Tipo_tickets.id_especialidad = Especialidades.id
    INNER JOIN Estado_Ticket ON Tickets.id_estado_ticket = Estado_Ticket.id;
    `,
    createTicketall: 'INSERT INTO Tickets (empleado_emisor, id_agente_helpdesk_asignado, fecha_emision, descripcion, id_tipo_ticket, id_estado_ticket) VALUES (@empleado_emisor, @id_agente_helpdesk_asignado, @fecha_emision, @descripcion, @id_tipo_ticket, @id_estado_ticket)',
    getTicketById: 'SELECT * FROM Tickets WHERE id = @Id',
    deleteTicketById: 'DELETE FROM Tickets WHERE id = @Id',
    getTotalTickets: 'SELECT COUNT(*) FROM Tickets',
    updateTicketById: 'UPDATE Tickets SET empleado_emisor=@empleado_emisor, id_agente_helpdesk_asignado=@id_agente_helpdesk_asignado, fecha_emision=@fecha_emision, descripcion=@descripcion, id_tipo_ticket=@id_tipo_ticket, id_estado_ticket=@id_estado_ticket WHERE id = @Id',
    updateTicketDates: 'UPDATE Tickets SET fecha_comienzo_trabajo=@fecha_comienzo_trabajo, fecha_fin_trabajo=@fecha_fin_trabajo, id_estado_ticket=@id_estado_ticket WHERE id = @Id',
    updateTicketSatisfaction: 'UPDATE Tickets SET puntuacion_satisfaccion=@puntuacion_satisfaccion, id_estado_ticket=@id_estado_ticket WHERE id = @Id',
    // Otros queries que puedas tener...

    // Procedimientos almacenados
    sp_Post1Ticket: 'EXEC sp_Post1Ticket @empleado_emisor, @id_agente_helpdesk_asignado, @fecha_emision, @descripcion, @id_tipo_ticket, @id_estado_ticket',
    sp_Post2Ticket: 'EXEC sp_Post2Ticket @id, @fecha_comienzo_trabajo, @fecha_fin_trabajo, @id_estado_ticket',
    sp_Post3Ticket: 'EXEC sp_Post3Ticket @id, @puntuacion_satisfaccion, @id_estado_ticket',

    ////////////////

    getambos: 'SELECT Entidades.correo, Entidades.contrasenia, Roles.rol AS rol FROM Entidades INNER JOIN Agentes_helpdesk ON Entidades.id = Agentes_helpdesk.id INNER JOIN Roles ON Agentes_helpdesk.id_rol = Roles.id WHERE Entidades.correo = @correo AND Entidades.contrasenia = @contrasenia UNION SELECT Entidades.correo, Entidades.contrasenia, Roles.rol AS rol FROM Entidades INNER JOIN Empleados ON Entidades.id = Empleados.id INNER JOIN Roles ON Empleados.id_roles = Roles.id WHERE Entidades.correo = @correo AND Entidades.contrasenia = @contrasenia;',
    ////////////////

    getAgentesWithEspecialidades: 'SELECT *FROM Entidades INNER JOIN Agentes_helpdesk ON Entidades.id = Agentes_helpdesk.id INNER JOIN Especialidades ON Agentes_helpdesk.id = Especialidades.id',

    getEmpleadosDetails: 'SELECT *FROM Entidades INNER JOIN Empleados ON Entidades.id = Empleados.id INNER JOIN Cargos ON  Empleados.id = Cargos.id INNER JOIN Roles on Empleados.id = Roles.id INNER JOIN Sucursales on Empleados.id = Sucursales.id',

    getAgentesWithEspecialidadesById: 'SELECT *FROM Entidades INNER JOIN Agentes_helpdesk ON Entidades.id = Agentes_helpdesk.id INNER JOIN Especialidades ON Agentes_helpdesk.id_especialidad = Especialidades.id WHERE Entidades.id = @id;',

    getEmpleadosDetailsById: ' SELECT *FROM Entidades INNER JOIN Empleados ON Entidades.id = Empleados.id INNER JOIN Cargos ON Empleados.id_cargo = Cargos.id INNER JOIN Roles ON Empleados.id_roles = Roles.id INNER JOIN Sucursales ON Empleados.id_sucursal = Sucursales.id WHERE Entidades.id = @id;',

    deleteTicket: `DELETE FROM Tickets WHERE id = @id_ticket;`,

    checkUserRoleByEmailAndPassword: `SELECT r.rol FROM Entidades eINNER JOIN Roles r ON e.id = r.idWHERE e.correo = @correo AND e.contrasenia = @contrasena;`,

    //documentacion

    createDocumentacion: `
    INSERT INTO Documentacion (id_tipo_ticket, titulo, descripcion, fecha_ultima_modificacion)
    VALUES (@id_tipo_ticket, @titulo, @descripcion, GETDATE());`,

    getAllDocumentacion: `SELECT * FROM Documentacion;`,

    getDocumentacionById: `SELECT * FROM Documentacion WHERE id = @id;`,

    updateDocumentacion: `UPDATE Documentacion SET id_tipo_ticket = @id_tipo_ticket,titulo = @titulo,descripcion = @descripcion,fecha_ultima_modificacion = GETDATE()WHERE id = @id;`,

    deleteDocumentacionById: `DELETE FROM Documentacion WHERE id = @id;`,

    getDocumentacionByTipoTicket: `SELECT * FROM Documentacion WHERE id_tipo_ticket = @id_tipo_ticket;`,

    //RECURSOS HUMANOS

    createPuntuacionTicket: `
        INSERT INTO PuntuacionesTickets (id_ticket, puntuacion, fecha_registro)
        VALUES (@id_ticket, @puntuacion, GETDATE())
    `,

    getAgentesWithLowPuntuations: `
        SELECT
            A.id AS agente_id,
            CONCAT(R.nombre, ' ', R.apellido) AS agente_nombre,
            R.sueldo AS agente_sueldo,
            COUNT(PT.id) AS cantidad_tickets_bajos
        FROM
            RecursosHumanos R
        INNER JOIN
            Agentes_helpdesk A ON R.id = A.id
        LEFT JOIN
            Tickets T ON A.id = T.id_agente
        LEFT JOIN
            PuntuacionesTickets PT ON T.id = PT.id_ticket AND PT.puntuacion <= 2
        GROUP BY
            A.id, R.nombre, R.apellido, R.sueldo
        HAVING
            COUNT(PT.id) > 0
    `,

    createReduccionSueldo: `
        INSERT INTO ReduccionSueldo (id_agente, cantidad_tickets, porcentaje_reduccion, fecha_registro)
        VALUES (@id_agente, @cantidad_tickets, @porcentaje_reduccion, GETDATE())
    `,

    //traer todos los tickets de agentes
    getTicketsByAgentes: 'EXEC sp_GetTicketsByAgentes @id_agente',

    // Traer tickets en curso de un empleado
    getTicketsEnCursoEmpleado: 'SELECT * FROM Tickets WHERE empleado_emisor = @id_empleado AND fecha_fin_trabajo IS NULL',

    // Traer tickets en curso de un agente
    getTicketsEnCursoAgente: 'SELECT * FROM Tickets WHERE id_agente_helpdesk_asignado = @id_agente AND fecha_fin_trabajo IS NULL',

    // Traer tickets finalizados de un empleado
    getTicketsFinalizadosEmpleado: 'SELECT * FROM Tickets WHERE empleado_emisor = @id_empleado AND fecha_fin_trabajo IS NOT NULL',

    // Traer tickets finalizados de un agente
    getTicketsFinalizadosAgente: 'SELECT * FROM Tickets WHERE id_agente_helpdesk_asignado = @id_agente AND fecha_fin_trabajo IS NOT NULL',

    // Obtener puntuación promedio de tickets de un empleado
    getPuntuacionPromedioTickets: 'SELECT AVG(puntuacion_satisfaccion) FROM Tickets WHERE empleado_emisor = @id_empleado',

    // Obtener información del tipo de ticket por ID
    getTipoTicketById: 'SELECT * FROM Tipo_tickets WHERE id = @tipo_ticket',

    // Buscar agente disponible para el tipo de ticket
    getAgenteDisponible: `
        SELECT TOP 1 ah.id
        FROM Agentes_helpdesk ah
        WHERE ah.id_nivel_soporte = @nivel_soporte
          AND ah.id_especialidad = @especialidad
          AND NOT EXISTS (
              SELECT 1
              FROM Tickets t
              WHERE t.id_agente_helpdesk_asignado = ah.id
                AND t.id_estado_ticket = 1 -- Estado "En Progreso"
          )
    `,

    // Crear un nuevo ticket
    createTicket: `
        INSERT INTO Tickets (empleado_emisor, id_agente_helpdesk_asignado, fecha_emision, fecha_asignacion,
                             descripcion, puntuacion_satisfaccion, id_tipo_ticket, id_estado_ticket)
        VALUES (@empleado_emisor, @id_agente_helpdesk_asignado, @fecha_emision, @fecha_emision,
                @descripcion, 0, @id_tipo_ticket, @id_estado_ticket)
    `,

    // Obtener información de un tipo de ticket por su ID
    getTipoTicketById: `
     SELECT
         id_nivel_soporte,
         id_especialidad
     FROM
         Tipo_tickets
     WHERE
         id = @tipo_ticket
    `,

    // Obtener agente disponible para un nivel de soporte y especialidad
    getAgenteDisponible: `
        SELECT TOP 1
            id
        FROM
            Agentes_helpdesk
        WHERE
            id_nivel_soporte = @nivel_soporte
            AND id_especialidad = @especialidad
        ORDER BY
            NEWID()
    `,

    // Actualizar el estado del ticket a "Insolucionable"
    updateTicketEstadoInsolucionable: `
        UPDATE Tickets
        SET id_estado_ticket = @id_estado_ticket
        WHERE id = @id
    `,

    // Actualizar el estado del ticket a "En Progreso" y establecer la fecha de comienzo de trabajo
    asignarEstadoComienzoTrabajo: `
    UPDATE Tickets
    SET id_estado_ticket = @id_estado_ticket,
        fecha_comienzo_trabajo = @fecha_comienzo_trabajo
    WHERE id = @id
    `,

    // Actualizar el estado del ticket a "Solucionado" y establecer la fecha de fin de trabajo y solución
    asignarEstadoFinTrabajo: `
    UPDATE Tickets
    SET id_estado_ticket = @id_estado_ticket,
        fecha_fin_trabajo = @fecha_fin_trabajo,
        solucion = @solucion
    WHERE id = @id
    `,

    escalateTicket: `
    DECLARE @nivel_actual INT;
    SELECT @nivel_actual = id_nivel_soporte FROM Tickets WHERE id = @id;

    DECLARE @siguiente_nivel INT;
    SET @siguiente_nivel = CASE
        WHEN @nivel_actual < 5 THEN @nivel_actual + 1
        ELSE @nivel_actual
    END;

    DECLARE @nuevo_agente INT;
    SELECT TOP 1 @nuevo_agente = id
    FROM Agentes_helpdesk
    WHERE id_nivel_soporte = @siguiente_nivel
        AND id_especialidad = @especialidad
        AND NOT EXISTS (
            SELECT 1
            FROM Tickets t
            WHERE t.id_agente_helpdesk_asignado = id
                AND t.id_estado_ticket = 1
        );

    UPDATE Tickets
    SET id_agente_helpdesk_asignado = @nuevo_agente,
        id_nivel_soporte = @siguiente_nivel,
        id_estado_ticket = 2
    WHERE id = @id;
    `,

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
    getLoginAgente: "SELECT Entidades.primer_nombre, Entidades.segundo_nombre,Entidades.primer_apellido,Entidades.segundo_apellido, Entidades .correo, Especialidades.especialidad, Especialidades.color, Niveles_soporte.nivel_soporte, Niveles_soporte.color FROM Entidades INNER JOIN Agentes_helpdesk ON Entidades.id = Agentes_helpdesk.id INNER JOIN Especialidades ON Agentes_helpdesk.id_especialidad = Especialidades.id INNER JOIN Niveles_soporte ON Agentes_helpdesk.id_nivel_soporte = Niveles_soporte.id WHERE Entidades.correo = '@correo;' AND Entidades.contrasenia = '@contrasenia;';",

    //Queries Empleados
    getAllEmpleados: 'SELECT em.id, e.primer_nombre, e.segundo_nombre, e.primer_apellido, e.segundo_apellido, e.correo, e.contrasenia, s.codigo, s.nombre as sucursalNombre, c.nombre as cargoNombre, c.color, r.rol  FROM Empleados em INNER JOIN Entidades e ON em.id = e.id INNER JOIN Cargos c ON em.id_cargo = c.id INNER JOIN Sucursales s ON em.id_sucursal = s.id INNER JOIN Roles r ON em.id_roles = r.id;',
    getEmpleadoById: 'SELECT em.id, e.primer_nombre, e.segundo_nombre, e.primer_apellido, e.segundo_apellido, e.correo, e.contrasenia, s.codigo, s.nombre as sucursalNombre, c.nombre as cargoNombre, c.color, r.rol  FROM Empleados em INNER JOIN Entidades e ON em.id = e.id INNER JOIN Cargos c ON em.id_cargo = c.id INNER JOIN Sucursales s ON em.id_sucursal = s.id INNER JOIN Roles r ON em.id_roles = r.id WHERE em.id=@Id;',
    saveEmpleado: 'BEGIN TRANSACTION; DECLARE @idEmpleado INT; INSERT INTO Entidades (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, contrasenia) VALUES (@primer_nombre, @segundo_nombre, @primer_apellido, @segundo_apellido, @correo, @contrasenia); SET @idEmpleado = SCOPE_IDENTITY(); INSERT INTO  Empleados(id, id_cargo, id_sucursal, id_roles) VALUES (@idEmpleado, @id_cargo, @id_sucursal, @id_roles); COMMIT TRANSACTION;',
    updateEmpleadoById: 'BEGIN TRANSACTION; UPDATE Entidades SET primer_nombre=@primer_nombre, segundo_nombre=@segundo_nombre, primer_apellido=@primer_apellido, segundo_apellido=@segundo_apellido, correo=@correo, contrasenia=@contrasenia WHERE id=@Id; UPDATE Empleados SET id_cargo=@id_cargo, id_roles=@id_roles, id_sucursal=@id_sucursal WHERE id=@Id; COMMIT TRANSACTION;',
    deleteEmpleadoById: 'BEGIN TRANSACTION; DELETE FROM Empleados WHERE id=@Id; DELETE FROM Entidades WHERE id=@Id; COMMIT TRANSACTION;',
    getEmpleadoByLogin: 'SELECT em.id, e.primer_nombre, e.segundo_nombre, e.primer_apellido, e.segundo_apellido, e.correo, e.contrasenia, s.codigo, s.nombre as sucursalNombre, c.nombre as cargoNombre, c.color, r.rol  FROM Empleados em INNER JOIN Entidades e ON em.id = e.id INNER JOIN Cargos c ON em.id_cargo = c.id INNER JOIN Sucursales s ON em.id_sucursal = s.id INNER JOIN Roles r ON em.id_roles = r.id WHERE e.correo=@correo AND e.contrasenia=@contrasenia;'

};
