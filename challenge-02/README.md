# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(first, second){
  return first + second;
};

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var resultado = soma(3,4) + 5;

// Qual o valor atualizado dessa variável?

12

// Declare uma nova variável, sem valor.

var newVariable;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function addToResultAndReturnString(value){
  newVariable = 0;
  newVariable += value;
  return `O valor da variavel agora é ${newVariable}`
}


// Invoque a função criada acima.

addToResultAndReturnString(5);

// Qual o retorno da função? (Use comentários de bloco).

"O valor da variavel agora é 5"

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function tripleMultiplication(first,second,third){
  if(first === undefined || second === undefined || third === undefined){
    return "Preencha todos os valores corretamente!";
  }
  
  return (first * second * third) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.

tripleMultiplication(2,1)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// "Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

tripleMultiplication(1,1,1)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// 3

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function diffResultDependingOnArg(first, second, third){
  
  if(first === undefined && second === undefined && third === undefined){
    return false;
  }
  
  if(first !== undefined && second === undefined && third === undefined){
    return first;
  }
  
  if(first !== undefined && second !== undefined && third === undefined){
    return first + second;
  } else if (second !== undefined && third !== undefined && first === undefined){
    return second + third;
  } else if (third !== undefined && first !== undefined && second === undefined){
    return third + first;
  }
  
  if(first !== undefined && second !== undefined && third !== undefined){
    return (first + second ) / 3 ;
  }
  
  return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

diffResultDependingOnArg() // false
diffResultDependingOnArg(1) // 1
diffResultDependingOnArg(2,2) // 4
diffResultDependingOnArg(2,3,4) // 1.6666666666666667

```
