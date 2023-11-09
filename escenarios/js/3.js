        function ordenarArreglos() {

            var arreglo1Texto = document.getElementById("arreglo1Input").value;
            var arreglo1 = arreglo1Texto.split(',').map(function(item) {
                return parseInt(item, 10);
            });

            var arreglo2Texto = document.getElementById("arreglo2Input").value;
            var arreglo2 = arreglo2Texto.split(',').map(function(item) {
                return parseInt(item, 10);
            });
            
            var arregloCombinado = arreglo1.concat(arreglo2);
            arregloCombinado.sort(function(a, b) {
                return a - b;
            });

            
            var resultadoOrdenado = document.getElementById("resultadoOrdenado");
            resultadoOrdenado.textContent = "Arreglo Ordenado: " + arregloCombinado.join(', ');
        }