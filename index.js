
// Exercicio 1
// //Crie um programa que possua duas variáveis com os valores 1993 e 120 e realize a soma de ambas.

let valor1 = 1993;
let valor2 = 123;

function soma(soma1,soma2){
  soma = soma1 + soma2
  return soma
};

console.log(soma(valor1,valor2))

// Exercício 2
// Crie um vetor contendo 10 números e faça a média de todos os valores.

let vNumeros = [1,2,3,4,5,6,7,8,9,10];
let valores = 0;
let resultado = 0;

for(let i = 0; i < vNumeros.length;i++){
  valores += vNumeros[i];
};

function media(somaValores,totalValores){
 return somaValores / totalValores
};

resultado = media(valores,vNumeros.length)

console.log(`O Valor da média é: ${resultado}`)

// Exercício 3
// Pegue os mesmos 10 números do exercício anterior e mostre no console apenas os números primos.

let xNumeros = [1,2,3,4,5,6,7,8,9,10];

function verificaPrimo(pNumero){
  if (pNumero <= 1) {
    return false;
  }
  for (let j = 2; j < pNumero; j++){
    if(pNumero % j  === 0 ){
      return false; // não é primo
    }
  }
  return true; // se não encontrar divisores é primo
};

for( let i = 0; i < xNumeros.length;i++){
  let pNumero = xNumeros[i];
  if(verificaPrimo(pNumero)){
    console.log(`${pNumero} é primo`)
  }
};

// Exercício 4
// Crie um jogo de par ou impar.
// Gerar um número aleatório entre 1 e 10

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}

// Função para determinar se a soma é par ou ímpar
function verificarParOuImpar(soma) {
  return soma % 2 === 0 ? 'Par' : 'Ímpar';
}

// Função para jogar o Par ou Ímpar

function jogarParOuImpar() {

  //  escolher 'Par' ou 'Ímpar'

  let escolhaJogador;
  while (true) {
    escolhaJogador = prompt('Escolha: Par ou Ímpar').toLowerCase();
  
    // Validar a entrada do jogador
    if (escolhaJogador === 'par' || escolhaJogador === 'ímpar') {
      break;  // Sai do loop quando a escolha for válida
    } else {
      alert('Ta ratiando hein!! Digita Par ou Ímpar.');
    }
  }

  // escolher um número de 1 a 10
  let numeroJogador;
  while (true) {
    numeroJogador = parseInt(prompt('Escolha um número entre 1 e 10:'));

    // Validar o número
    if (!isNaN(numeroJogador) && numeroJogador >= 1 && numeroJogador <= 10) {
      break;  // Sai do loop quando o número for válido
    } else {
      alert('Ratiando de novo hein!! Wscolha um número tchê, entre 1 e 10.');
    }
  }

  // Gerar o número do computador

  let numeroComputador = gerarNumeroAleatorio();
  console.log(`Número do computador: ${numeroComputador}`);

  // Somar os números

  let soma = numeroJogador + numeroComputador;
  console.log(`Soma dos números: ${soma}`);

  // Determinar se a soma é Par ou Ímpar
  let resultado = verificarParOuImpar(soma);
  console.log(`Resultado: ${resultado}`);

  // jogador ganhou ou perdeu

  if ((escolhaJogador === 'par' && resultado === 'Par') || (escolhaJogador === 'ímpar' && resultado === 'Ímpar')) {
    alert(`Você escolheu ${escolhaJogador} e a soma é ${resultado}. Você GANHOU!`);
  } else {
    alert(`Você escolheu ${escolhaJogador} e a soma é ${resultado}. Você PERDEU!`);
  }
}

// Iniciar o jogo

jogarParOuImpar();

// Exercício 5
// Crie uma função que receba um valor N e descubra qual é o N-ésimo termo da série Fibonacci.

function fibonacci(n){
// Se n for 0, o termo é 0, se for 1, o termo é 1
if(n<=1){
  return n;
}
// variáveis para os dois termos

let a = 0; b = 1;

//Calcular o enésimo termo
for (let l = 2; l <= n; l++){
  let temp = a + b;
  a = b;
  b = temp;
}
return b // enésimo termo
}

// Função para verificar se o número inserido é válido

function verificarNumero() {
  let n;
  // Continuar pedindo o número até que ele seja válido
  while (true) {
    n = parseInt(prompt('Escolha um número:'));
    if (isNaN(n)) {
      alert('É pra inserir um número válido seu jaguara.');
    } else {
      return n;  // Retorna o número válido quando encontrado
    }
  }
}

// chama função

let n = verificarNumero();

// Verifica se o valor de n é válido antes de calcular o Fibonacci

if (n !== null) {
  console.log(`O ${n}, enésimo termo da sequência de Fibonacci é: ${fibonacci(n)}`)}