var word1 = prompt("dammi la prima parola");

var word2 = prompt("dammi la seconda parola");

var DOM = document.getElementById('word')

if (parseInt(word1.length) > parseInt(word2.length)) {
  DOM.innerHTML = word2 + " " + word1
} else if (parseInt(word1.length) < parseInt(word2.length)) {
  DOM.innerHTML = word1 + " " + word2
} else {
  DOM.innerHTML = "Le due parole sono lunghe uguali";
}
