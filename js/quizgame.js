function puntuacion() {
    // Obtener las respuestas seleccionadas por el usuario
    let respuestaFrase = document.getElementById("f").value.trim();
    let respuestaAño = document.getElementById("a").value;
    let respuestaLenguaje = document.querySelector('input[name="primerLenguaje"]:checked');

    // Verificar si se han respondido todas las preguntas
    if (!respuestaFrase || respuestaAño === "" || !respuestaLenguaje) {
        document.getElementById("res").innerText = "Por favor, responde todas las preguntas.";
        return false;
    }

    // Verificar respuestas correctas
    let puntuacion = 0;

    // Verificar la respuesta de la frase de la carrera
    if (respuestaFrase.toLowerCase() === "frase correcta") {
        puntuacion += 1;
    }

    // Verificar la respuesta del año de fundación de la carrera
    if (respuestaAño === "1973") {
        puntuacion += 1;
    }

    // Verificar la respuesta del primer lenguaje de programación
    if (respuestaLenguaje.value === "Lisp") {
        puntuacion += 1;
    }

    // Mostrar la puntuación
    document.getElementById("res").innerText = "Tu puntuación es: " + puntuacion + " / 3";

    return false;
}
