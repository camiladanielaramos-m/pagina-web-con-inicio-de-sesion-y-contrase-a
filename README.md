# Práctica 2: Sistema de Autenticación y Variables de Sesión (API)

Sistema web de inicio de sesión con correo y contraseña, validación en base de datos relacional MySQL (XAMPP) y control de acceso mediante variables de sesión del servidor con `express-session` y cookies cifradas (Patrón MVC).

## 🚀 Tecnologías utilizadas
* **Backend:** Node.js, Express, express-session, mysql2/promise, cors
* **Frontend:** HTML5, CSS3 responsivo, JavaScript puro (Fetch API con cookies)
* **Base de Datos:** MySQL (XAMPP)
* **Arquitectura:** Modelo - Vista - Controlador (MVC)

## 📁 Estructura del Proyecto
```text
API_Practica2/
├── Backend/
│   ├── Controllers/
│   │   └── usuarioController.js
│   ├── Models/
│   │   └── usuarioModel.js
│   ├── Routes/
│   │   └── usuarioRoutes.js
│   ├── app.js
│   ├── database.js
│   ├── package-lock.json
│   └── package.json
├── Frontend/
│   ├── estilos.css
│   ├── login.html
│   ├── perfil.html
│   └── script.js
├── practica_login.sql
├── iniciar_servidor.bat
└── Practica2_Reporte_Completo.docx
```

## ⚙️ Instalación y Ejecución
1. Iniciar los módulos **Apache** y **MySQL** en **XAMPP Control Panel**.
2. Importar el script `practica_login.sql` en phpMyAdmin (`http://localhost/phpmyadmin`).
3. Dar doble clic al archivo `iniciar_servidor.bat` (o ingresar a `Backend` y ejecutar `npm install` y `npm start`).
4. Abrir en el navegador: [http://localhost:3006/login.html](http://localhost:3006/login.html)

## 👤 Usuarios registrados de prueba (MySQL)
* **Correo:** `alumno@ceti` | **Contraseña:** `12345`
* **Correo:** `camila@ceti.mx` | **Contraseña:** `12345`

---
**Institución:** Centro de Enseñanza Técnica Industrial (CETI)  
**Materia:** Programación Web  
**Docente:** PAOLA FERNANDA PONCE VILLALVAZO  
**Alumno(a):** Camila Daniela Mariscal Ramos  
**Registro:** 24100172 | **Grupo:** 6F  
