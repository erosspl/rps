function init() {
	var a = prompt("Podaj długość podstawy trójkąta");
	var h = prompt("Podaj wysokość trójkąta");
 	return getTriangleArea( a , h );
}

function getTriangleArea( a , h ) {
	if ( a <= 0 || h <= 0 ) {
    	console.log("Nieprawidłowe dane");
    	return alert("Nieprawidłowe dane");
    }
	return a * h / 2;
}

console.log(init());