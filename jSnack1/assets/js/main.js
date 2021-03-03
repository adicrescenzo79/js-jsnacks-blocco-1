var nr1 = parseInt(prompt("dammi il primo numero"));

var nr2 = parseInt(prompt("dammi il secondo numero"));

var DOM = document.getElementById('nr')

if (nr1 > nr2) {
  var DOM = document.getElementById('nr').innerHTML = nr1;
} else if (nr1 < nr2) {
  var DOM = document.getElementById('nr').innerHTML = nr2;
} else {
  var DOM = document.getElementById('nr').innerHTML = nr1 + " e " + nr2 + " sono uguali";
}
