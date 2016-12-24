function getTriangleArea(a, h) {
  var a = prompt("Podaj długość podstawy trójkąta")
  var h = prompt("Podaj wysokość trójkąta")
  if ( a<=0 || h<=0 ) {
    alert("Nieprawidłowe dane");
	}
  else {
    return a * h / 2;
  }
};
console.log( getTriangleArea() );