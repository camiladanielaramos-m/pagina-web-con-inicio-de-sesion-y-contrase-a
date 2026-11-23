-- Base de datos para la Práctica de Autenticación y Sesiones
-- CETI Colomos - Programación Web

CREATE DATABASE IF NOT EXISTS `practica_login` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `practica_login`;

-- Tabla de Usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `correo_unico` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Usuarios registrados previamente en la base de datos
INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `password`, `fecha_creacion`) VALUES
(1, 'Alumno CETI', 'alumno@ceti', '12345', NOW()),
(2, 'Camila Daniela Mariscal Ramos', 'camila@ceti.mx', '12345', NOW()),
(3, 'Profesor de Web', 'profesor@ceti.mx', 'admin123', NOW());
