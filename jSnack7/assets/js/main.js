for (var i = 0; i < 10; i++) {
  var x = Math.pow(2, i);
  if (x <= 1000) {
    console.log(x);
  } else {
    i = 10;
  }
}

// oppure
for (var i = 0; Math.pow(2, i) < 1000; i++) {
  console.log(Math.pow(2, i));
}
