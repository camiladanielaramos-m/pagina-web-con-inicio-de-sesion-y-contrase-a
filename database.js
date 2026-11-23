const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practica_login',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function verificarConexion() {
    try {
        await pool.query('SELECT 1');
        console.log('✔ Conectado a MySQL (XAMPP): Base de datos `practica_login`');
    } catch (error) {
        console.warn('⚠ Advertencia: Asegúrate de que MySQL esté iniciado en XAMPP:', error.message);
    }
}

verificarConexion();

module.exports = pool;
