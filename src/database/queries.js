export const queries = {
    // Consultas y Procedimientos para Clientes (sin cambios)
    getAllClientes: 'SELECT * FROM Clientes',
    saveCliente: 'INSERT INTO Clientes (nombre, telefono, correo, contrasena) VALUES (@nombre, @telefono, @correo, @contrasena)',
    getClienteById: 'SELECT * FROM Clientes WHERE Id = @Id',
    deleteClienteById: 'DELETE FROM Clientes WHERE Id = @Id',
    getTotalClientes: 'SELECT COUNT(*) FROM Clientes',
    updateClienteById: 'UPDATE Clientes SET nombre=@nombre, telefono=@telefono, correo=@correo, contrasena=@contrasena WHERE Id = @Id',

    // Consultas y Procedimientos para Tickets
    getAllTickets: 'SELECT * FROM Tickets',
    createTicket: 'INSERT INTO Tickets (empleado_emisor, id_agente_helpdesk_asignado, fecha_emision, descripcion, id_tipo_ticket, id_estado_ticket, id_bandera_ticket) VALUES (@empleado_emisor, @id_agente_helpdesk_asignado, @fecha_emision, @descripcion, @id_tipo_ticket, @id_estado_ticket, @id_bandera_ticket)',
    getTicketById: 'SELECT * FROM Tickets WHERE id = @Id',
    deleteTicketById: 'DELETE FROM Tickets WHERE id = @Id',
    getTotalTickets: 'SELECT COUNT(*) FROM Tickets',
    updateTicketById: 'UPDATE Tickets SET empleado_emisor=@empleado_emisor, id_agente_helpdesk_asignado=@id_agente_helpdesk_asignado, fecha_emision=@fecha_emision, descripcion=@descripcion, id_tipo_ticket=@id_tipo_ticket, id_estado_ticket=@id_estado_ticket, id_bandera_ticket=@id_bandera_ticket WHERE id = @Id',
    updateTicketDates: 'UPDATE Tickets SET fecha_comienzo_trabajo=@fecha_comienzo_trabajo, fecha_fin_trabajo=@fecha_fin_trabajo, id_estado_ticket=@id_estado_ticket, id_bandera_ticket=@id_bandera_ticket WHERE id = @Id',
    updateTicketSatisfaction: 'UPDATE Tickets SET puntuacion_satisfaccion=@puntuacion_satisfaccion, id_estado_ticket=@id_estado_ticket, id_bandera_ticket=@id_bandera_ticket WHERE id = @Id',

    // Consultas para Tickets Asignados
    getAllTicketsAsignados: 'SELECT * FROM Tickets_asignados',
    createTicketAsignado: 'INSERT INTO Tickets_asignados (id_agente_helpdesk, id_ticket) VALUES (@id_agente_helpdesk, @id_ticket)',
    getTicketAsignadoById: 'SELECT * FROM Tickets_asignados WHERE id = @Id',
    deleteTicketAsignadoById: 'DELETE FROM Tickets_asignados WHERE id = @Id',

    // Consultas para Banderas de Ticket
    getAllBanderasTicket: 'SELECT * FROM Bandera_Ticket',
    createBanderaTicket: 'INSERT INTO Bandera_Ticket (solucion) VALUES (@solucion)',
    getBanderaTicketById: 'SELECT * FROM Bandera_Ticket WHERE id = @Id',
    deleteBanderaTicketById: 'DELETE FROM Bandera_Ticket WHERE id = @Id',

    // Consultas para Tickets Escalados
    getAllTicketsEscalados: 'SELECT * FROM Tickets_escalados',
    createTicketEscalado: 'INSERT INTO Tickets_escalados (agente_peticion_escalacion, id_nivel_soporte, agente_asignado_escalacion, descripcion) VALUES (@agente_peticion_escalacion, @id_nivel_soporte, @agente_asignado_escalacion, @descripcion)',
    getTicketEscaladoById: 'SELECT * FROM Tickets_escalados WHERE id = @Id',
    deleteTicketEscaladoById: 'DELETE FROM Tickets_escalados WHERE id = @Id',

    // Consultas para Tipos de Tickets
    getAllTiposTickets: 'SELECT * FROM Tipo_tickets',
    createTipoTicket: 'INSERT INTO Tipo_tickets (proridad, id_nivel_soporte, id_especialidad) VALUES (@proridad, @id_nivel_soporte, @id_especialidad)',
    getTipoTicketById: 'SELECT * FROM Tipo_tickets WHERE id = @Id',
    deleteTipoTicketById: 'DELETE FROM Tipo_tickets WHERE id = @Id',
    updateTipoTicketFields: 'UPDATE Tipo_tickets SET proridad = @proridad, id_nivel_soporte = @id_nivel_soporte, id_especialidad = @id_especialidad WHERE id = @id',

    // Consultas para Documentación
    getAllDocumentaciones: 'SELECT * FROM Documentacion',
    createDocumentacion: 'INSERT INTO Documentacion (id_tipo_ticket, titulo, descripcion, fecha_ultima_modificacion) VALUES (@id_tipo_ticket, @titulo, @descripcion, @fecha_ultima_modificacion)',
    getDocumentacionById: 'SELECT * FROM Documentacion WHERE id = @Id',
    deleteDocumentacionById: 'DELETE FROM Documentacion WHERE id = @Id',

    // Consultas para Estados de Ticket
    getAllEstadosTicket: 'SELECT * FROM Estado_Ticket',
    createEstadoTicket: 'INSERT INTO Estado_Ticket (estado_ticket, color) VALUES (@estado_ticket, @color)',
    getEstadoTicketById: 'SELECT * FROM Estado_Ticket WHERE id = @Id',
    deleteEstadoTicketById: 'DELETE FROM Estado_Ticket WHERE id = @Id',

    // Consultas para Entidades
    createEntidad: 'INSERT INTO Entidades (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, contrasenia) VALUES (@primer_nombre, @segundo_nombre, @primer_apellido, @segundo_apellido, @correo, @contrasenia)',
    getAllEntidades: 'SELECT * FROM Entidades',
    getEntidadById: 'SELECT * FROM Entidades WHERE id = @Id',
    updateEntidadById: 'UPDATE Entidades SET primer_nombre = @primer_nombre, segundo_nombre = @segundo_nombre, primer_apellido = @primer_apellido, segundo_apellido = @segundo_apellido, correo = @correo, contrasenia = @contrasenia WHERE id = @id',
    deleteEntidadById: 'DELETE FROM Entidades WHERE id = @Id',

};
