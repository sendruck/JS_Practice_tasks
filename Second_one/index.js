function fun1() {
  var sel = document.getElementById('mySelect').selectedIndex;
  var options = document.getElementById('mySelect').options;
  alert('Выбрана опция ' + options[sel].text);


}

function fun2() {
  var rng = document.getElementById('range1');
  var p = document.getElementById('first_p');
  p.innerHTML = rng.value;

  var div = document.getElementById('test');
  div.style.width = rng.value + 'px';
}
