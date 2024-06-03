function calcularEdadMultiplicando() {
    let edadMascota = document.getElementById("eX").value;
    let edadHumana = 0;
    edadHumana= edadMascota*7;
    
    // Mostrar el resultado
    document.getElementById("res1").innerHTML = "La edad humana aproximada de la mascota es: " + edadHumana + " años.";

    return false;
}