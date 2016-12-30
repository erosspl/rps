function checkOnclickEvent(param) {
  console.log(param);
}
var inputElem = document.getElementById('js-inputValue'),
    imageElem = document.getElementById('js-image'),
    add = document.getElementById('addElem'),
    list = document.getElementById('Lista'),
    next = document.getElementsByTagName('li').length;

imageElem.addEventListener('click', function(e) {
  checkOnclickEvent('image został kliknięty')
});

inputElem.addEventListener('keypress', function(e) {
  e.target.value += ' test ';
});

add.addEventListener('click', function() {
  list.innerHTML += '<li>item '+ next +'</li>';
})