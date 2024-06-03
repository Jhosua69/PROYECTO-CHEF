function calcularMasa() {

    let peso = document.getElementById("p").value;
    let altura = document.getElementById("a").value;
    let masa = peso / (altura * altura);
    masa = masa.toFixed(2);
    if (masa <= 18.4) {
        document.getElementById('res').innerHTML = "Bajo Peso: " + masa;
    } else if (masa <= 24.9) {
        document.getElementById('res').innerHTML = "Normal: " + masa;
    } else if (masa <= 29.9) {
        document.getElementById('res').innerHTML = "Exceso de Peso: " + masa;
    } else {
        document.getElementById('res').innerHTML = "Obeso: " + masa;
    }

    return false;
}