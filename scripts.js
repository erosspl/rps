var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var newText = "Zielone słonie";
var animal = newText.toUpperCase();
var textReplace = text.replace(text.split(" ", 1), animal);
function halfText() {
    return textReplace.length/2;
}
var textReplacePart = textReplace.slice(0, halfText());

console.log(textReplacePart);