function register() {
    let usuario = document.getElementById("u").value;
    let gmail = document.getElementById("g").value;
    let password = document.getElementById("p").value;
    let mensajeDiv = document.getElementById("mensaje");
    
    if (usuario && gmail && password) {
        mensajeDiv.innerText = "¡CUENTA REGISTRADA!";
        mensajeDiv.style.color = "green";
    } else {
        mensajeDiv.innerText = "Error: Todos los campos deben ser completados";
        mensajeDiv.style.color = "red";
    }
    
    mensajeDiv.style.display = "block";
    
    // Limpiar los campos de usuario y contraseña
    document.getElementById("u").value = "";
    document.getElementById("p").value = "";
    document.getElementById("g").value = "";
    return false;
}
