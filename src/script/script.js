const numerosCalculadora = document.querySelectorAll('[data-js="numero"]');
let inputCalculadora = document.querySelector('[data-js="input"]');
const sinalMatematico = document.querySelectorAll('[data-js="sinal"]');
let previaCalculadora = document.querySelector('[data-js="historico"]');
let resultOperation = document.querySelector('[data-js="result"]');
let limparTudo = document.querySelector('[data-js="clear"]');

let primeiroValor = 0;
let segundoValor = '';
let sinal = '';
let resultado = 0;

numerosCalculadora.forEach(item => {
  item.addEventListener('click', e => {
    inputCalculadora.innerHTML += e.target.textContent;
    if (sinal) {
      segundoValor += e.target.textContent;
      console.log(primeiroValor);
      console.log(segundoValor);
    }
  });
});

console.log(primeiroValor);
sinalMatematico.forEach(item => {
  item.addEventListener('click', e => {
    if (sinal && segundoValor && primeiroValor) {
      sinal = e.target.textContent;
      previaCalculadora.textContent = `${primeiroValor} ${sinal}`;
      console.log(sinal);
      return;
    }
    if (sinal !== '' || segundoValor) {
      sinal = e.target.textContent;
      previaCalculadora.textContent = `${primeiroValor} ${sinal}`;

      console.log(sinal);
      inputCalculadora.textContent = '';
      return;
    }

    if (!sinal) {
      primeiroValor = Number(inputCalculadora.textContent);
    }
    previaValor = `${inputCalculadora.textContent} ${e.target.textContent}`;
    previaCalculadora.textContent = previaValor;
    sinal = e.target.textContent;
    inputCalculadora.textContent = '';
  });
});

const operação = sinal => {
  segundoValor = Number(segundoValor);
  switch (sinal) {
    case '+':
      resultado = primeiroValor + segundoValor;
      break;
    case '*':
      resultado = primeiroValor * segundoValor;
      break;
    case '/':
      resultado = primeiroValor / segundoValor;
      break;
    case '-':
      resultado = primeiroValor - segundoValor;
      break;
    default:
      alert('Insira um simbolo válido');
  }
  inputCalculadora.textContent = resultado;
};

resultOperation.addEventListener('click', () => {
  previaCalculadora.textContent = `${primeiroValor} ${sinal} ${segundoValor} =`;
  operação(sinal);
});

limparTudo.addEventListener('click', e => {
  primeiroValor = 0;
  segundoValor = '';
  sinal = '';
  resultado = 0;
  previaCalculadora.textContent = ':)';
  inputCalculadora.textContent = '';
});
