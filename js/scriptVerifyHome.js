// Script para que no se puedan dirigir a home los usuarios no registrados

document.addEventListener('DOMContentLoaded', function () {
    let usuarioActual;
    
    try { //Control para evitar que rompa en caso de no poder parsear los datos
        usuarioActual = JSON.parse(sessionStorage.getItem('usuarioActual'));
    } catch (error) {
        console.error('Error al parsear datos de usuario:', error);
        usuarioActual = null;
    }
   //Verifica si hay un usuario actual almacenado
    if (!usuarioActual || !usuarioActual.usuario) {
        alert('Debes iniciar sesión para acceder a esta página.');
        window.location.href = 'index.html'; //redirige a la página de inicio de sesión.
    }
});