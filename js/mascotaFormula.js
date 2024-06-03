function calcularEdad() {

    let edadMascota = document.getElementById("e").value;
    let edadHumana = 0;
    if (edadMascota <= 2) {
        edadHumana = edadMascota * 10.5;
    } else {
        edadHumana = 21 + (edadMascota - 2) * 4;
    }
    document.getElementById('res').innerHTML = "La edad humana aproximada de la mascota es: " + edadHumana + " años.";

    return false;
}