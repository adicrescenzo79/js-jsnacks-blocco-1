var nr = prompt("dammi un numero di 4 cifre");

somma = 0;

for (var i = 0; i < nr.length; i++) {
  somma = somma + parseInt(nr[i]);
}

console.log(somma);
