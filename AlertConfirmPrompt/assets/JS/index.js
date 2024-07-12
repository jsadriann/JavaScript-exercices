// alert('isso é um alerta');

// //O metodo confirm(); do objeto window retorna true:false de acordo com a opção selecionada
// if (confirm('isso é um confirm') === false) {
//     alert('você clicou em CANCELAR');
// } else {
//     alert('você clicou em OK');
// }

// //o metodo prompt(); do objeto window serve para você digitar uma mensagem em um espaço de texto
// window.prompt('você pode digitar um texto');

let a = window.prompt('digite um numero');
let b = window.prompt('digite outro numero');
a = Number(a);
b = Number(b);
window.alert(`o resultado da soma é: ${a+b}`);
