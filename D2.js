/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const numb1 = 20;
const numb2 = 30;

if (numb1 > numb2) {
  console.log(numb1);
} else if (numb2 > numb1) {
  console.log(numb2);
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
if (numb1 === 5) {
  console.log("il numero è corretto");
} else {
  console.log("not equal");
}
if (numb1 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let risultato = numb1 % 5;
if (risultato === 0) {
  console.log("è divisibile per 5 perché ha come resto:", risultato);
} else {
  console.log("non è divisibile per 5 dato che resta:", risultato);
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
const numb3 = 2;
const numb4 = 6;

if (numb3 === 8) {
  console.log("uno dei due numeri è 8");
} else if (numb4 === 8) {
  console.log("uno dei due numeri è 8");
} else if (numb3 + numb4 === 8) {
  console.log("la loro somma è 8");
} else {
  console.log("sia i numeri che la loro somma non da come risultato 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 49;
if (totalShoppingCart < 50) {
  console.log(
    "Ti manca poco alla spedizione gratuita, aggiungi qualcos'altro al carrello oppure procedi con l'ordine (+10€ di spedizione):",
    totalShoppingCart + 10 + "€"
  );
} else if (totalShoppingCart >= 50) {
  console.log(
    "Hai diritto alla spedizione gratuita, il saldo è:",
    totalShoppingCart + "€"
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
if (totalShoppingCart < 50) {
  console.log(
    "Ti manca poco alla spedizione gratuita, aggiungi qualcos'altro al carrello oppure procedi con l'ordine (+10€ di spedizione) inoltre solo per oggi hai un ulteriore sconto del 20% grazie al BlackFriday:",
    totalShoppingCart - totalShoppingCart * 0.2 + 10 + "€"
  );
} else if (totalShoppingCart >= 50) {
  console.log(
    "Hai diritto alla spedizione gratuita, il saldo è:",
    totalShoppingCart - totalShoppingCart * 0.2 + "€"
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const numb5 = 8;
const numb6 = 3;
const numb7 = 5;

varNumerici = [numb1, numb2, numb3, numb4, numb5, numb6, numb7];
console.log(varNumerici.sort()); //WTF??

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
const stringa = "hello there";
const booleano = true;
console.log("il valore è di tipo:", typeof numb1);
console.log("il valore è di tipo:", typeof booleano);
console.log("il valore è di tipo:", typeof stringa);
console.log("il valore è di tipo:", typeof varNumerici);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const ctrlnumb1 = numb1 % 2;
if (ctrlnumb1 === 0) {
  console.log(
    "Il numero è pari in quanto il resto della divisione per 2 è uguale a:",
    ctrlnumb1
  );
} else {
  console.log(
    "Il numero è dispari in quanto il resto della divione per 2 è uguale a:",
    ctrlnumb1
  );
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

let val = 4;
if (val < 10 && val > 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
