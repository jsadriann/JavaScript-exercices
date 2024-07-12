
const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `Seu nome é: ${nome}<br />`;
let nomeSemEspaco = nome.replace(/\s+/g, '');
let array = nome.split(' ');
document.body.innerHTML += `Seu nome tem ${nomeSemEspaco.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nomeSemEspaco.charAt(1)}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome? ${nomeSemEspaco.search('a')}<br />`;
document.body.innerHTML += `Qual o último índice da letra J no seu nome? ${nomeSemEspaco.lastIndexOf('j')}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nomeSemEspaco.substring(nomeSemEspaco.length - 3,nomeSemEspaco.length)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${array}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;
