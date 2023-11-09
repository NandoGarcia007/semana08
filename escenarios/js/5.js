
    const arreglo1 = [5, 8, 2, 10, 3];
    const arreglo2 = [12, 6, 7, 4, 1];

    const arregloMinimos = [];
    for (let i = 0; i < arreglo1.length; i++) {
        arregloMinimos.push(Math.min(arreglo1[i], arreglo2[i]));
    }


    arregloMinimos.sort((a, b) => b - a);


    console.log("Arreglo 1:", arreglo1);
    console.log("Arreglo 2:", arreglo2);
    console.log("Arreglo de Mínimos Descendente:", arregloMinimos);
