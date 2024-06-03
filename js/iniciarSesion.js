function login() {
    const maxAttempts = 5;
    let attempts = parseInt(localStorage.getItem('attempts')) || 0;
    let locked = localStorage.getItem('locked') === 'true';
    let mensajeDiv = document.getElementById("mensaje");
    let mensajeTexto = document.getElementById("mensaje-texto");

    if (locked) {
        showErrorMessage("Demasiados intentos fallidos. Intente más tarde.");
        return false;
    }

    let usuario = document.getElementById("u").value;
    let password = document.getElementById("p").value;
    let usr = "Admin";
    let pass = "1234";

    if (usuario === usr && password === pass) {
        showSuccessMessage("¡BIENVENIDO!");

        // Redirigir a la página chef.html después de 2 segundos
        setTimeout(function() {
            window.location.href = "paginas/chef.html";
        }, 2000);

        // Resetear el contador de intentos
        attempts = 0;
        localStorage.setItem('attempts', attempts);
        localStorage.setItem('locked', false);
    } else {
        attempts++;
        localStorage.setItem('attempts', attempts);

        if (attempts >= maxAttempts) {
            locked = true;
            localStorage.setItem('locked', locked);
            showErrorMessage("Demasiados intentos fallidos. Intente más tarde.");
        } else {
            showErrorMessage("Contraseña y Usuario Incorrecto. Intentos restantes: " + (maxAttempts - attempts));
        }

        // Limpiar los campos de usuario y contraseña
        document.getElementById("u").value = "";
        document.getElementById("p").value = "";
    }

    return false; // Para evitar que el formulario se envíe

    function showSuccessMessage(message) {
        mensajeTexto.innerText = message;
        mensajeDiv.classList.remove("alert-danger");
        mensajeDiv.classList.add("alert-success");
        mensajeDiv.style.display = "block";
    }

    function showErrorMessage(message) {
        mensajeTexto.innerText = message;
        mensajeDiv.classList.remove("alert-success");
        mensajeDiv.classList.add("alert-danger");
        mensajeDiv.style.display = "block";
    }
}

// Cargar el contador de intentos y el estado de bloqueo desde localStorage al cargar la página
window.onload = function() {
    let attempts = parseInt(localStorage.getItem('attempts')) || 0;
    let locked = localStorage.getItem('locked') === 'true';

    if (locked) {
        let mensajeDiv = document.getElementById("mensaje");
        let mensajeTexto = document.getElementById("mensaje-texto");
        mensajeTexto.innerText = "Demasiados intentos fallidos. Intente más tarde.";
        mensajeDiv.classList.remove("alert-success");
        mensajeDiv.classList.add("alert-danger");
        mensajeDiv.style.display = "block";
    }
};




