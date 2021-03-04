var nr = prompt("dammi un numero di 4 cifre");

somma = 0;

for (var i = 0; i < nr.length; i++) {
  somma = somma + parseInt(nr[i]);
}

console.log(somma);

// versione di Raffa

var nr = prompt("dammi un numero di 4 cifre");

var somma = 0;

for (var i = 0; i < nr.length; i++) {
  var nrParsato = parseInt(nr[i]);
  if (!isNaN(nrParsato)) {
    somma += parseInt(nrParsato);
  } else {
    break;
  }
}

console.log(somma);                     
