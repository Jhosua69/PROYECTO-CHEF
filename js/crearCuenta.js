// Función principal que maneja el registro y generación del correo
function registerGmail() {
    // Obtener los valores de nombre, apellidos, fecha de nacimiento y contraseña
    const nombre = document.getElementById("n").value.trim();
    const apellidoPaterno = document.getElementById("ap").value.trim();
    const apellidoMaterno = document.getElementById("am").value.trim();
    const fechaNacimiento = document.getElementById("f").value.trim();
    const contraseña = document.getElementById("pass").value.trim();

    // Verificar que se han ingresado todos los campos obligatorios
    if (!nombre || !apellidoPaterno || !fechaNacimiento || !contraseña) {
        mostrarMensaje("Error: Por favor completa todos los campos.", "red");
        return false; // Evitar el envío del formulario
    }

    // Crear el correo electrónico a partir de los datos
    const correo = generarCorreo(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento);

    // Mostrar el correo generado en una alerta y redirigir a index.html
    alert("Correo generado: " + correo);
    window.location.href = "paginas/index.html";

    return false; // Evitar el envío del formulario
}

// Función para generar el correo electrónico
function generarCorreo(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento) {
    // Obtener las iniciales del nombre
    const inicialesNombre = obtenerIniciales(nombre);
    // Obtener los caracteres específicos de los apellidos
    const caracteresApellidos = obtenerCaracteresApellidos(apellidoPaterno, apellidoMaterno);
    // Obtener el año de nacimiento en el formato correcto
    const añoNacimiento = obtenerAñoNacimiento(fechaNacimiento);

    // Combinar todas las partes para formar el correo
    return `${inicialesNombre}${caracteresApellidos}${añoNacimiento}@gmail.com`.toLowerCase();
}

// Función para obtener las iniciales del nombre
function obtenerIniciales(nombre) {
    // Separar el nombre en palabras y obtener la primera letra de cada una
    return nombre.split(" ").map(palabra => palabra.charAt(0)).join("");
}

// Función para obtener los caracteres específicos de los apellidos
function obtenerCaracteresApellidos(apellidoPaterno, apellidoMaterno) {
    // Obtener los primeros dos caracteres del apellido materno y los últimos tres del apellido paterno
    const caracteresApellidoMaterno = apellidoMaterno ? apellidoMaterno.slice(1, 3) : '';
    const caracteresApellidoPaterno = apellidoPaterno.slice(-3);
    return `${caracteresApellidoMaterno}${caracteresApellidoPaterno}`;
}

// Función para obtener el año de nacimiento en el formato correcto
function obtenerAñoNacimiento(fecha) {
    // Separar la fecha en componentes (año, mes, día)
    const [año, mes, dia] = fecha.split("-");
    // Formatear la fecha como año (últimos dos dígitos) + día + mes
    return `${año.slice(-2)}${dia}${mes}`;
}

// Función para mostrar un mensaje en la interfaz
function mostrarMensaje(mensaje, color) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.innerText = mensaje; // Establecer el texto del mensaje
    mensajeDiv.style.color = color; // Establecer el color del mensaje
    mensajeDiv.style.display = "block"; // Mostrar el mensaje
}





