const express = require('express');
const session = require('express-session');
const crypto = require('node:crypto');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3006;

// Middlewares para procesar JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Habilitar CORS con soporte para cookies
app.use(cors({
    origin: true,
    credentials: true
}));

// Configuración de variables de sesión
app.use(session({
    name: "session.sid",
    secret: process.env.SESSION_SECRET || crypto.randomBytes(32).toString("hex"),
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 1000 * 60 * 30
    }
}));

// Servir la carpeta Frontend como estáticos
app.use(express.static(path.join(__dirname, '../Frontend')));

// Rutas de usuario
const usuarioRoutes = require('./Routes/usuarioRoutes');
app.use('/', usuarioRoutes);

// Redirigir la raíz a login.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/login.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`✔ Servidor ejecutandose en el puerto ${PORT}`);
    console.log(`✔ Abre en tu navegador: http://localhost:${PORT}`);
});
