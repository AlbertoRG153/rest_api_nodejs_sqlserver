import { getConnection, sql, queries } from '../database';

export const getTicketsByAgente = async (req, res) => {
    try {
        const { id_agente } = req.params;

        if (!id_agente) {
            return res.status(400).json({ msg: 'Bad Request. Por favor proporciona el ID del agente' });
        }

        const pool = await getConnection();
        const result = await pool.request()
            .input('id_agente', sql.Int, id_agente)
            .query(queries.getTicketsByAgentes);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const getTicketsEnCursoEmpleado = async (req, res) => {
    const { id_empleado } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id_empleado', sql.Int, id_empleado)
            .query(queries.getTicketsEnCursoEmpleado);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getTicketsEnCursoAgente = async (req, res) => {
    const { id_agente } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id_agente', sql.Int, id_agente)
            .query(queries.getTicketsEnCursoAgente);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getTicketsFinalizadosEmpleado = async (req, res) => {
    const { id_empleado } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id_empleado', sql.Int, id_empleado)
            .query(queries.getTicketsFinalizadosEmpleado);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getTicketsFinalizadosAgente = async (req, res) => {
    const { id_agente } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id_agente', sql.Int, id_agente)
            .query(queries.getTicketsFinalizadosAgente);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getPuntuacionPromedioTickets = async (req, res) => {
    const { id_empleado } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id_empleado', sql.Int, id_empleado)
            .query(queries.getPuntuacionPromedioTickets);

        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createTicket = async (req, res) => {
    const { empleado_emisor, descripcion, tipo_ticket } = req.body;

    try {
        const pool = await getConnection();

        // Obtener información del tipo de ticket
        const tipoTicketResult = await pool.request()
            .input('tipo_ticket', sql.Int, tipo_ticket)
            .query(queries.getTipoTicketById);

        if (tipoTicketResult.recordset.length === 0) {
            return res.status(400).json({ msg: 'Tipo de ticket no válido' });
        }

        const tipoTicketInfo = tipoTicketResult.recordset[0];
        const nivelSoporte = tipoTicketInfo.id_nivel_soporte;
        const especialidad = tipoTicketInfo.id_especialidad;

        // Buscar un agente disponible
        const agenteResult = await pool.request()
            .input('nivel_soporte', sql.Int, nivelSoporte)
            .input('especialidad', sql.Int, especialidad)
            .query(queries.getAgenteDisponible);

        if (agenteResult.recordset.length === 0) {
            return res.status(400).json({ msg: 'No hay agente disponible para este tipo de ticket en este momento' });
        }

        const agenteAsignado = agenteResult.recordset[0].id;

        // Crear el ticket
        const fechaActual = new Date();

        await pool.request()
            .input('empleado_emisor', sql.Int, empleado_emisor)
            .input('id_agente_helpdesk_asignado', sql.Int, agenteAsignado)
            .input('fecha_emision', sql.Date, fechaActual)
            .input('descripcion', sql.NVarChar, descripcion)
            .input('id_tipo_ticket', sql.Int, tipo_ticket)
            .input('id_estado_ticket', sql.Int, 2) // 2 representa "Asignado"
            .query(queries.createTicket);

        res.json({ msg: 'Ticket creado exitosamente' });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getTicketInfoById = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(queries.getTicketInfoById);

        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getAgenteByNivelEspecialidad = async (req, res) => {
    const { nivel_soporte, id_especialidad } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('nivel_soporte', sql.Int, nivel_soporte)
            .input('id_especialidad', sql.Int, id_especialidad)
            .query(queries.getAgenteByNivelEspecialidad);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const asignarEstadoComienzoTrabajo = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const fechaComienzoTrabajo = new Date();

        await pool.request()
            .input('id', sql.Int, id)
            .input('fecha_comienzo_trabajo', sql.Date, fechaComienzoTrabajo)
            .input('id_estado_ticket', sql.Int, 3) // 3 representa "En Progreso"
            .query(queries.asignarEstadoComienzoTrabajo);

        res.json({ msg: 'Estado "Comienzo Trabajo" asignado exitosamente' });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const asignarEstadoFinTrabajo = async (req, res) => {
    const { id } = req.params;
    const { se_soluciono, solucion, especialidad } = req.body;

    try {
        const pool = await getConnection();
        const fechaFinTrabajo = new Date();

        if (se_soluciono) {
            // Actualizar el ticket como "Solucionado" y establecer la fecha de fin de trabajo y solución
            await pool.request()
                .input('id', sql.Int, id)
                .input('fecha_fin_trabajo', sql.Date, fechaFinTrabajo)
                .input('solucion', sql.NVarChar, solucion)
                .input('id_estado_ticket', sql.Int, 4) // 4 representa "Solucionado"
                .query(queries.asignarEstadoFinTrabajo);

            res.json({ msg: 'Estado "Fin Trabajo" asignado exitosamente' });
        } else {
            // Ejecutar la rutina de Escalar Ticket
            const ticketInfoResult = await pool.request()
                .input('id', sql.Int, id)
                .query(queries.getTicketInfoById);

            if (ticketInfoResult.recordset.length === 0) {
                return res.status(400).json({ msg: 'Ticket no encontrado' });
            }

            const ticketInfo = ticketInfoResult.recordset[0];
            const nivelSoporteActual = ticketInfo.nivel_soporte;
            const nuevaEspecialidad = especialidad || ticketInfo.id_especialidad;
            const nuevoNivelSoporte = nivelSoporteActual + 1;

            const agenteResult = await pool.request()
                .input('nivel_soporte', sql.Int, nuevoNivelSoporte)
                .input('id_especialidad', sql.Int, nuevaEspecialidad)
                .query(queries.getAgenteDisponible);

            if (agenteResult.recordset.length === 0) {
                // Marcar el ticket como "Insolucionable" si no se puede asignar un nuevo agente
                await pool.request()
                    .input('id', sql.Int, id)
                    .input('id_estado_ticket', sql.Int, 5) // 5 representa "Insolucionable"
                    .query(queries.updateTicketEstadoInsolucionable);

                return res.status(400).json({ msg: 'Ticket escalado como "Insolucionable"' });
            }

            const nuevoAgenteAsignado = agenteResult.recordset[0].id;

            await pool.request()
                .input('id', sql.Int, id)
                .input('id_agente_helpdesk_asignado', sql.Int, nuevoAgenteAsignado)
                .input('id_estado_ticket', sql.Int, 2) // 2 representa "Asignado"
                .query(queries.updateTicketAgenteEstado);

            res.json({ msg: 'Ticket escalado y asignado a nuevo agente' });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const escalateTicket = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();

        // Obtener información del ticket
        const ticketInfoResult = await pool.request()
            .input('id', sql.Int, id)
            .query(queries.getTicketInfoById);

        if (ticketInfoResult.recordset.length === 0) {
            return res.status(404).json({ msg: 'Ticket no encontrado' });
        }

        const ticketInfo = ticketInfoResult.recordset[0];

        // Obtener información del tipo de ticket
        const tipoTicketResult = await pool.request()
            .input('tipo_ticket', sql.Int, ticketInfo.id_tipo_ticket)
            .query(queries.getTipoTicketById);

        if (tipoTicketResult.recordset.length === 0) {
            return res.status(400).json({ msg: 'Tipo de ticket no válido' });
        }

        const tipoTicketInfo = tipoTicketResult.recordset[0];
        const nuevoNivelSoporte = tipoTicketInfo.id_nivel_soporte;
        const nuevaEspecialidad = tipoTicketInfo.id_especialidad;

        // Buscar un agente disponible con nivel de soporte más alto
        const agenteResult = await pool.request()
            .input('nivel_soporte', sql.Int, nuevoNivelSoporte)
            .input('especialidad', sql.Int, nuevaEspecialidad)
            .query(queries.getAgenteDisponible);

        if (agenteResult.recordset.length === 0) {
            // Si no se encuentra un agente disponible, marcar el ticket como "Insolucionable"
            await pool.request()
                .input('id_estado_ticket', sql.Int, 3) // Estado "Insolucionable"
                .input('id', sql.Int, id)
                .query(queries.updateTicketEstadoInsolucionable);

            return res.json({ msg: 'Ticket escalado como insolucionable' });
        }

        const nuevoAgenteAsignado = agenteResult.recordset[0].id;

        // Actualizar el ticket con el nuevo agente asignado y el nuevo nivel de soporte
        await pool.request()
            .input('id_agente_helpdesk_asignado', sql.Int, nuevoAgenteAsignado)
            .input('id_nivel_soporte', sql.Int, nuevoNivelSoporte)
            .input('id', sql.Int, id)
            .query(queries.updateTicketEscala);

        res.json({ msg: 'Ticket escalado exitosamente' });

    } catch (error) {
        res.status(500).send(error.message);
    }
};

