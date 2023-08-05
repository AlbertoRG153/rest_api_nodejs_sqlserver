
export const queries =
{
    getAllClientes: 'SELECT * FROM Clientes',
    saveCliente: 'INSERT INTO Clientes (nombre, telefono, correo, contrasena) VALUES (@nombre, @telefono, @correo, @contrasena)'
}