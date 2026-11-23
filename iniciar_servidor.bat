@echo off
title Servidor de Autenticacion y Sesiones - CETI
color 0b
echo ===================================================
echo     INICIANDO PROYECTO API PRACTICA 2 (SESIONES)
echo ===================================================
echo.
cd /d "%~dp0"
cd Backend
if not exist "node_modules\" (
    echo Instalando modulos necesarios...
    call npm install
)
echo.
echo Iniciando servidor en puerto 3006...
echo Abre en tu navegador: http://localhost:3006/login.html
echo.
node app.js
pause
