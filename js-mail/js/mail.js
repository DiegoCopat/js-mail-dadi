/*Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.*/ 

// 1. Crea la lista degli invitati

var aceptedMail = ["diegocopat@gmail.com", "google@gmail.com", "boolean@gmail.com", "piero@gmail.com", "giada@gmail.com"];
console.log(aceptedMail);

// 2. chiedi all'utente la sua mail
var userMail = prompt("Scrivi qui la tua mail per verificare se sei inserito nella lista degli invitati");
console.log(userMail);

// 3. controlla che sia nella lista degli invitati
var verificaMail = false; 

for (var i = 0; i < aceptedMail.length; i++) {
    if (userMail == aceptedMail[i]) {
        verificaMail = true;
    }
}

if (verificaMail == false) {
    document.getElementById("color").innerHTML = "<div class=\"red\"></div> <br>" + "<h1>Mi dispiace, ma la tua Email non è presente tra quella degli invitati, ti invitiamo a contattare l'organizzatore al numero <br>XXX-XXXXXXX";
}else if (verificaMail == true) {
    document.getElementById("color").innerHTML = "<div class=\"green\"></div> <br>" + "<h1>Il tuo indirizzo Email è presente tra quello degli invitati. A breve riceverai l'indirizzo dell'evento";
}