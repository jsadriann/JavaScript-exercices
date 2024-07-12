let a='A',b='B',c='C';

//faça com que a variavel a aponte pra b, b aponte pra c e c aponte pra a

//solução usando variavel auxiliar
let temp = a;
a = b;
b = c;
c = temp;
console.log(a,b,c);
//solução sem usar variavel auxiliar
a = 'A',b = 'B',c = 'C';
a = a + b;
b = c;
c = a.substring(0,1);
a = a.charAt(1);
console.log(a,b,c);
//solução sem usar variavel auxiliar
a = 'A',b = 'B',c = 'C';
[a,b,c] = [b,c,a];

console.log(a,b,c);

