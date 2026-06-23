let alunos = [
{ nome: "Ana", idade: 20 },
{ nome: "Bianca", idade: 18 },
{ nome: "Livia", idade: 18 },
{ nome: "Marcelli", idade: 17 },
{ nome: "maria", idade: 22 },
{ nome: "Maryanne", idade: 22 },
];

for (let i = 0; alunos.length; i++) {
if (alunos[i].idade >= 18) {
    console.log(`${alunos[i].nome} é maior de idade`);
   } else {
    console.log(`${alunos[i].nome} é menor de idade`);
    }
}