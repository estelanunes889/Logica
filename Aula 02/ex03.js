let valorHoraAula = 450.00;
let horasTrabalhadas = 40;
let salBruto = valorHoraAula * horasTrabalhadas;

let descontoINSS = 0.1;
let salLiquido = salBruto - (salBruto * descontoINSS);

console.log(`Salário Líquido: R$ ${salLiquido}`)