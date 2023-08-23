const button = document.querySelector("#myBtn");

let a = document.querySelector('#quadraticTermA');
let b = document.querySelector('#quadraticTermB');
let c = document.querySelector('#quadraticTermC');
let formula = document.querySelector('#formula');
let result = document.querySelector('#response');

function myEquation() { 

    let coefficientA = parseInt(a.value);
    let coefficientB = parseInt(b.value);
    let coefficientC = parseInt(c.value);

    let delta = coefficientB ** 2 - 4 * coefficientA * coefficientC;

    if (delta < 0) {

        result.innerHTML = `A equação não possui raízes reais,<br> apenas raízes complexas.`;

    } else if (delta === 0) {

        let root = -coefficientB / (2 * coefficientA);
        result.innerHTML = `A equação possui duas raízes<br> reais iguais: <br>{${Math.round(root)}} e {${Math.round(root)}}`;

    } else if (delta > 0){

        let firstRoot = (-coefficientB + Math.sqrt(delta)) / (2 * coefficientA);
        let secondRoot = (-coefficientB - Math.sqrt(delta)) / (2 * coefficientA);
        result.innerHTML = `A equação possui duas raízes<br> reais e distintas: <br>{${Math.round(firstRoot)}} e {${Math.round(secondRoot)}}`;
    } else {

        alert('Digite todos coeficientes da equação!')
    }
}

button.addEventListener("click", myEquation);

// Adicionar evento para acionar a função ao pressionar Enter
a.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        myEquation();
    }
});

b.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        myEquation();
    }
});

c.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        myEquation();
    }
});


function reflect() {



};
  

