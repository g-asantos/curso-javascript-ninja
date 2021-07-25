/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myArray = [1,2, "three", function myFunc(){}, ["5"]]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function returnArr(arr){
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

returnArr(myArray)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function returnArrayIndex(arr, index){
  return arr[index]; 
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var anotherArray = ["one", 1, null, {}, []]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

returnArrayIndex(anotherArray, 0);
returnArrayIndex(anotherArray, 1);
returnArrayIndex(anotherArray, 2);
returnArrayIndex(anotherArray, 3);
returnArrayIndex(anotherArray, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(name){
 var allBooks = {
   "The Bible" : {
     quantidadePaginas: 100,
     autor: "Jesus",
     editora: "Igreja",
   },
   "1984" : {
     quantidadePaginas: 100,
     autor: "George Orwell",
     editora: "Nao sei",
   },
   "Watchmen" : {
     quantidadePaginas: 100,
     autor: "Alan Moore",
     editora: "Nao sei tambem",
   }
 }
 
 if(!name){
  return allBooks; 
 }
  
 return allBooks[name]; 
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log("O livro 1984 tem " + book("1984")["quantidadePaginas"] + " páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("O autor do livro 1984 é " + book("1984")["autor"])

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log("O livro 1984 foi publicado pela editora " + book("1984")["editora"])
