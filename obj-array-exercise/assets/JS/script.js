
function escopo(){
    const form = document.querySelector('.form');
    const result = form.querySelector('.result');

    const people = [];

    function receiveEventForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        people.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: Number(peso.value),
            altura:Number(altura.value)
        });

        document.querySelector('.result').innerHTML += `nome: ${nome.value} sobrenome: ${sobrenome.value} 
        peso: ${peso.value} kg altura: ${altura.value} <br>  `;

        console.log(people);
    }

    form.addEventListener('submit',receiveEventForm);
}

escopo();