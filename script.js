// Identificar en qué página estamos
const esPaginaLogin = window.location.pathname.endsWith('login.html') || window.location.pathname === '/';
const esPaginaPerfil = window.location.pathname.endsWith('perfil.html');

document.addEventListener('DOMContentLoaded', async () => {
    // Si estamos en login.html, verificar si ya hay sesión para redirigir a perfil
    if (esPaginaLogin) {
        try {
            const respuesta = await fetch('/estado', { credentials: 'include' });
            const datos = await respuesta.json();
            if (datos.autenticado) {
                window.location.href = 'perfil.html';
            }
        } catch (e) {
            console.error(e);
        }
    }

    // Si estamos en perfil.html, obtener datos de la sesión
    if (esPaginaPerfil) {
        try {
            const respuesta = await fetch('/perfil', { credentials: 'include' });
            if (!respuesta.ok) {
                window.location.href = 'login.html';
                return;
            }
            const datos = await respuesta.json();
            const usuario = datos.usuario;
            if (usuario) {
                document.getElementById('perfilId').textContent = usuario.id;
                document.getElementById('perfilNombre').textContent = usuario.nombre;
                document.getElementById('perfilCorreo').textContent = usuario.correo;
            }
        } catch (e) {
            window.location.href = 'login.html';
        }
    }
});

// Manejo del formulario de Login (Solo correo y contraseña)
const formLogin = document.getElementById('formLogin');
if (formLogin) {
    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        const mensajeError = document.getElementById('mensajeError');
        mensajeError.classList.add('oculto');

        const correo = document.getElementById('correo').value.trim();
        const password = document.getElementById('password').value;

        try {
            const respuesta = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ correo, password })
            });

            const datos = await respuesta.json();

            if (respuesta.ok && datos.usuario) {
                window.location.href = 'perfil.html';
            } else {
                mensajeError.textContent = datos.mensaje || 'Credenciales incorrectas';
                mensajeError.classList.remove('oculto');
            }
        } catch (error) {
            mensajeError.textContent = 'Error al conectar con el servidor';
            mensajeError.classList.remove('oculto');
        }
    });
}

// Cerrar sesión
async function cerrarSesion() {
    try {
        await fetch('/logout', {
            method: 'POST',
            credentials: 'include'
        });
        window.location.href = 'login.html';
    } catch (e) {
        console.error(e);
        window.location.href = 'login.html';
    }
}
