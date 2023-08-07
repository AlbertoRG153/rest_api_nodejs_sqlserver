
export const queries =
{
    getAllClientes: 'SELECT * FROM Clientes',
    saveCliente: 'INSERT INTO Clientes (nombre, telefono, correo, contrasena) VALUES (@nombre, @telefono, @correo, @contrasena)',
    getClienteById: 'SELECT * FROM Clientes WHERE Id = @Id',
    deleteClienteById: 'DELETE FROM Clientes WHERE Id = @Id',
    getTotalClientes: 'SELECT COUNT(*) FROM Clientes',
    updateClienteById: 'UPDATE Clientes SET nombre=@nombre, telefono=@telefono, correo=@correo, contrasena=@contrasena WHERE Id = @Id'
}