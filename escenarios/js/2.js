function mostrarValoresUnicos() {
    var numerosInput = document.getElementById("numerosInput").value;
    var numeros = numerosInput.split(",").map(Number);

    if (numeros.length > 0) {
        var valoresUnicosSet = new Set(numeros);
        var valoresUnicosArray = Array.from(valoresUnicosSet);

        document.getElementById("valoresUnicos").textContent = valoresUnicosArray.join(", ");
    } else {
        alert("Por favor, ingrese al menos un número.");
    }
}