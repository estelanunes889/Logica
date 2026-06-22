let matriz = [
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
];

 // Acesso direto
console.log([0][0]); //1
console.log([0][1]); //2
console.log([0][2]); //3
console.log([1][0]); //4
console.log([1][1]); //5
console.log([1][2]); //6
console.log([2][0]); //7
console.log([2][1]); //8
console.log([2][2]); //9

// Percorrendo a matriz com loops aninhados
for (let i = 0; i < matriz.length; i++) {
for (let j = 0; j < matriz[i].length; j++) {
console.log(`[${i}][${j}] = ${matriz[i][j]}`);
}
}