var lista = [
  "Vsevolod",
  "Lorenzo",
  "Walter",
  "Andrea",
  "Alessandro",
  "Tommaso",
  "Fabio",
  "Giuseppe",
  "Giorgio",
  "Gabriele",
  "Sonia",
  "Dora",
  "Giuditta"
];

console.log(lista);

var nome = prompt("Scrivi il tuo nome");

console.log(nome);

var controllo = false;

for (var i = 0;  i < lista.length; i++) {
  if (nome == lista[i]) {
    var controllo = true;
    i = lista.length;
  }
};

if (controllo) {
  console.log("Puoi entrare");
} else {
  console.log("Non puoi entrare");
};
