const form = document.querySelector('#formulario');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputPeso = form.querySelector('#peso');
  const inputAltura = form.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
   return setResultado('Peso inválido', false);
  };
  if (!altura) {
    return setResultado('Altura inválida', false);
  };

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];

  if (imc >= 34.9) return nivel[5];

  if (imc >= 29.9) return nivel[5];
  
  if (imc >= 24.9) return nivel[5];

  if (imc >= 18.5) return nivel[5];
  
  if (imc < 18.5) return nivel[5];

}

function getImc (peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function criarParagrafo () {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criarParagrafo(); // Criar o parágrafo

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg; // Definir o texto do parágrafo
  resultado.appendChild(p); // Adicionar o parágrafo ao resultado
}

