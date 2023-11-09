function calcularNumeros() {
    var numerosInput = document.getElementById("numerosInput").value;
    var numeros = numerosInput.split(",").map(Number);

    if (numeros.length > 0) {
        var numeroMayor = Math.max(...numeros);
        var numeroMenor = Math.min(...numeros);
        var suma = numeros.reduce((a, b) => a + b, 0);
        var promedio = suma / numeros.length;

        document.getElementById("numeroMayor").textContent = numeroMayor;
        document.getElementById("numeroMenor").textContent = numeroMenor;
        document.getElementById("promedio").textContent = promedio;
    } else {
        alert("Por favor, ingrese al menos un número.");
    }
}
