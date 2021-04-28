/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

// 1. generare due generatori di numeri random da 1 a 6, uno per il computer e l'altro per il giocatore

var numGiocatore = parseInt(Math.random() * 6 + 1);
console.log(numGiocatore);
document.getElementById("numerogioc").innerHTML = (numGiocatore);
var numComputer = parseInt(Math.random() * 6 + 1);
console.log(numComputer);
document.getElementById("numerocomp").innerHTML = (numComputer);

// 2. stabilire chi è il vincitore, in base a chi fa il punteggio più alto

if (numGiocatore > numComputer) {
    document.getElementById("risultato").innerHTML = "Il giocatore ha vinto la partita!"
} else if (numGiocatore == numComputer) {
    document.getElementById("risultato").innerHTML = "C'è stato un pareggio, nessuno vince."
} else if (numGiocatore < numComputer) {
    document.getElementById("risultato").innerHTML = "Il computer ha vinto la partita!"
}