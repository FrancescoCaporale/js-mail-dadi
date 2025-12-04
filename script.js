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

