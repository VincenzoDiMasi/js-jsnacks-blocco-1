/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
l’utente inserisce il suo nome tramite un input.
Comunicagli se può partecipare o no alla festa. */

//Prendo gli elementi dal DOM
const nameElement = document.getElementById('name');
const buttonElement = document.getElementById('verify');
const resultElement = document.getElementById('result');

//Creo un array con i nomi degli invitati
const guests = ['Nerone', 'Giulio Cesare', 'Caligola', 'Ottaviano'];



//Creo un event listener
buttonElement.addEventListener('click', function(){
    //Creo una variabile con il value dell'input
    const nameValue = nameElement.value;

    //Validazione
    if(!nameValue){
        alert('Inserisci un nome!')
    }

    let isAllowed = false;
    //Controllo se il nome inserito è tra quelli presenti nell'array
    for (let i = 0 ; i < guests.length ; i++) {
        const currentGuest = guests[i];

        if(currentGuest === nameValue){
            isAllowed = true;
        }
    }
    //Stampo in pagina
    if (isAllowed) {
        resultElement.innerHTML = `<h2>Sei uno dei fortunati!</h2>`;
    } else {
        resultElement.innerHTML = `<h2>Tornatene a casa!</h2>`;
    }
}) 