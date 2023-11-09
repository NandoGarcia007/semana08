function calcularModa() {
    var numerosTexto = document.getElementById("numerosInput").value;
    var numeros = numerosTexto.split(',').map(function(item) {
        return parseInt(item, 10);
    });

    var contador = {};
    var moda = null;
    var maxFrecuencia = 0;

    numeros.forEach(function(numero) {
        contador[numero] = (contador[numero] || 0) + 1;

        if (contador[numero] > maxFrecuencia) {
            maxFrecuencia = contador[numero];
            moda = numero;
        }
    });

    var resultadoModa = document.getElementById("resultadoModa");
    resultadoModa.textContent = "La moda del arreglo es: " + moda;
}