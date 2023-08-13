
export const queries =
{
    getAllClientes: 'SELECT * FROM Clientes',
    saveCliente: 'INSERT INTO Clientes (nombre, telefono, correo, contrasena) VALUES (@nombre, @telefono, @correo, @contrasena)',
    getClienteById: 'SELECT * FROM Clientes WHERE Id = @Id',
    deleteClienteById: 'DELETE FROM Clientes WHERE Id = @Id',
    getTotalClientes: 'SELECT COUNT(*) FROM Clientes',
    updateClienteById: 'UPDATE Clientes SET nombre=@nombre, telefono=@telefono, correo=@correo, contrasena=@contrasena WHERE Id = @Id',

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
};
