let numero = 482;

if (numero > 99 && numero < 1000) {
let centenas = (numero -(numero % 100)) /100;
console.log(`Algarisimo da centena ${centenas}`);
} else {
    console.log("Número fora do intervalo");
}