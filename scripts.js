function checkOnclickEvent(param) {
  console.log(param);
}
var inputElem = document.getElementById('js-inputValue'),
var   imageElem = document.getElementById('js-image'),
var   add = document.getElementById('addElem'),
var   list = document.getElementById('Lista'),
var   next = document.getElementsByTagName('li').length;

imageElem.addEventListener('click', function(e) {
  checkOnclickEvent('image został kliknięty')
});

inputElem.addEventListener('keypress', function(e) {
  e.target.value += ' test ';
});

add.addEventListener('click', function() {
  list.innerHTML += '<li>item '+ next +'</li>';
})
