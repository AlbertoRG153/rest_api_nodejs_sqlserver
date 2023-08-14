import { getConnection, sql, queries } from '../database';

export const createFactura = async (req, res) => {
  const { id_ticket, id_empresa, subtotal_pagar, id_isv, total_pagar, numero_factura } = req.body;

  try {
    const pool = await getConnection();
    await pool.request()
      .input('id_ticket', sql.Int, id_ticket)
      .input('id_empresa', sql.Int, id_empresa)
      .input('subtotal_pagar', sql.Decimal(14, 3), subtotal_pagar)
      .input('id_isv', sql.Int, id_isv)
      .input('total_pagar', sql.Decimal(14, 3), total_pagar)
      .input('numero_factura', sql.Int, numero_factura)
      .query(queries.createFactura);

    res.json({ msg: 'Factura creada exitosamente' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getFacturaById = async (req, res) => {
  const { id } = req.params;

  try {
    const pool = await getConnection();
    const result = await pool.request()
      .input('id', sql.Int, id)
      .query(queries.getFacturaById);

    if (result.recordset.length === 0) {
      return res.status(404).json({ msg: 'Factura no encontrada' });
    }

    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getFacturasByEmpresa = async (req, res) => {
  const { id_empresa } = req.params;

  try {
    const pool = await getConnection();
    const result = await pool.request()
      .input('id_empresa', sql.Int, id_empresa)
      .query(queries.getFacturasByEmpresa);

    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }

  



};

export const deleteFacturaById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const pool = await getConnection();
      await pool.request()
        .input('id', sql.Int, id)
        .query(queries.deleteFacturaById);
  
      res.json({ msg: 'Factura eliminada exitosamente' });
    } catch (error) {
      res.status(500).send(error.message);
    }
};