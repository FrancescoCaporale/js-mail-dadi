/*Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/

// -------------------------------------------------------
// ESERCIZIO 1: CONTROLLO EMAIL
// -------------------------------------------------------

// 1. Creo la lista delle email invitate
const invitedEmails = [
  "marco@gmail.com",
  "anna@yahoo.com",
  "francesco@hotmail.com",
  "luca@gmail.com",
  "roxy@example.com"
];

// 2. Chiedo all'utente la sua email
const userEmail = prompt("Inserisci qui la tua email:");

// 3. Imposto una variabile che mi dirà se la email è stata trovata
let found = false;

// controllo ogni email dentro l'array: se una coincide con quella dell'utente segno che è stata trovata
for (let i = 0; i < invitedEmails.length; i++) {
  if (userEmail === invitedEmails[i]) {
    found = true;
  }
}

// 5. Stampo il risultato in console
if (found) {
  console.log("Accesso consentito, sei nella lista!");
} else {
  console.log("Accesso negato, non risulti tra gli invitati.");
}

// -------------------------------------------------------
// ESERCIZIO 2: GIOCO DEI DADI
// -------------------------------------------------------

// 1. Genero il numero random per il giocatore (1-6)
const playerNumber = Math.floor(Math.random() * 6) + 1;

// 2. Genero il numero random per il computer (1-6)
const computerNumber = Math.floor(Math.random() * 6) + 1;

// 3. Stampo i risultati
console.log("Giocatore ha tirato:", playerNumber);
console.log("Computer ha tirato:", computerNumber);

// 4. Stabilisco il vincitore
if (playerNumber > computerNumber) {
  console.log( "Hai vinto!");
} else if (playerNumber < computerNumber) {
  console.log("Ha vinto il computer!");
} else {
  console.log("Pareggio!");
}