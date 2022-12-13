/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
 (qui potete usare un prompt).
Il programma stampa la somma di tutti i numeri inseriti.*/
console.log('JS OK')

//1. Prendo gli elementi dal DOM
const resultElement = document.getElementById('result');

//2. Creo un array
const numbersUser = [];

//3. Creo un prompt per chiedere i numeri all'utente

for(i = 0; numbersUser.length < 10; i++){
    const number = parseInt(prompt('Inserisci un numero').trim());

    if(isNaN(number)){
        alert('Non valido!');
    }
    //4.Li inserisco nell'array
    else {
        numbersUser.push(number);
    }
}

//5. Creo una variabile con il risultato
let result = 0;

for(i=0; i < numbersUser.length; i++){
    result += numbersUser[i];
}

//6. Stampo in pagina
resultElement.innerText = 'Il risultato finale è: ' + result;