import sql from 'mssql'

const dbsettings = {
    user: 'user',
    password: '1234',
    server: 'localhost',
    database: 'helpdesk',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

async function getConnection() {
    try {
        const pool = await sql.connect(dbsettings);
        return pool;
    } catch (error) {
        console.log(error)
    }

}

getConnection();

