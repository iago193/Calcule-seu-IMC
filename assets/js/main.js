document.addEventListener('form', (event) => {
    event.preventDefault();

    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;

    if (peso > 0 && peso <= 18) {
        document.querySelector('.resultado').innerHTML = 'Abaixo do peso';
    }

});

function calcularIMC() {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const peso = parseFloat(document.querySelector('#peso').value);
        const altura = parseFloat(document.querySelector('#altura').value);

        const imc = peso / (altura * altura);

        if (imc < 18.5) {
            document.querySelector('.resultado').innerHTML = `<h2 style="background-color: red; color: white;">Seu IMC é: ${imc.toFixed(2)} - Abaixo do peso</h2>`;
        } else if (imc >= 18.5 && imc < 24.9) {
            document.querySelector('.resultado').innerHTML = `<h2 style="background-color: green; color: white;">Seu IMC é: ${imc.toFixed(2)} - Peso normal</h2>`;
        } else if (imc >= 25 && imc < 29.9) {
            document.querySelector('.resultado').innerHTML = `<h2 style="background-color: yellow; color: black;">Seu IMC é: ${imc.toFixed(2)} - Sobrepeso</h2>`;
        } else if (imc >= 30 && imc < 34.9) {
            document.querySelector('.resultado').innerHTML = `<h2 style="background-color: orange; color: white;">Seu IMC é: ${imc.toFixed(2)} - Obesidade Grau 1</h2>`;
        } else if (imc >= 35 && imc < 39.9) {
            document.querySelector('.resultado').innerHTML = `<h2 style="background-color: orangered; color: white;">Seu IMC é: ${imc.toFixed(2)} - Obesidade Grau 2</h2>`;
        } else if (imc >= 40) {
            document.querySelector('.resultado').innerHTML = `<h2 style="background-color: darkred; color: white;">Seu IMC é: ${imc.toFixed(2)} - Obesidade Grau 3</h2>`;
        }


        console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    });
}