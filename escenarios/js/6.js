function obtenerDiagonalPrincipal(matriz) {
    let diagonalPrincipal = [];
    for (let i = 0; i < matriz.length; i++) {
        diagonalPrincipal.push(matriz[i][i]);
    }
    return diagonalPrincipal;
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const diagonalPrincipal = obtenerDiagonalPrincipal(matriz);

console.log("Matriz Original:");
console.log(matriz);
console.log("Diagonal Principal:");
console.log(diagonalPrincipal);