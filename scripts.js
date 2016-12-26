var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach."
var newText = "Zielone słonie"
var animal = newText.toUpperCase()
var textReplace = text.replace('Papugi', animal)
var textReplacePart = textReplace.slice(0, 45)
console.log(textReplacePart);