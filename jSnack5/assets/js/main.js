var dispari = [];

console.log(dispari);

for (var i = 0; i < 6; i++) {
  var nr = parseInt(prompt("dammi un numero"));
  if (!isNaN(nr) && nr%2) {
    dispari.push(nr);
  }
}

console.log(dispari);
