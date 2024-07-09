const nome = 'Jose adrian nascimento silva';
const idade = 23, pesoEmKg = 100, alturaEmMetros = 1.69;
let indiceDeMassaCorporal;
indiceDeMassaCorporal = pesoEmKg/(alturaEmMetros * alturaEmMetros);

console.log(nome, 'tem',idade, 'anos, pesa',pesoEmKg, 'Kg');
//templates strings
console.log(`tem ${alturaEmMetros}, e seu IMC é de, ${indiceDeMassaCorporal}`);
