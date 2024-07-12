function olaMundo() 
{
    console.log('welcome to the world');
}

//podemos declarar uma função de outra forma:

const olaMundo2 = function() 
{
    console.log('welcome to the world');
};

//ou ainda

const olaMundo3 = () => 
{
    console.log('welcome to the world');
};

//se a função possue o corpo de uma linha e apenas um parametro, podemos declarar da seguinte forma

const olaMundo4 = nome => console.log(`welcome to the world ${nome}`);

olaMundo4('nome');
olaMundo3();
olaMundo();
olaMundo2();