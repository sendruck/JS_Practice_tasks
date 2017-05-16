var myNodelist = document.getElementsByTagName('li');
var i;
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
var i;
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
      var div= this.parentElement;
      div.style.display = "none";
  }
}

var list = document.querySelector('ul');


list.addEventListener('click', function(ev) {
	if(ev.target.tagName == 'LI') {
		ev.target.classList.toggle('checked');
	}
},false);

function newElement() {
    var li = document.createElement("li");
    var inputvalue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputvalue);
    li.appendChild(t);
    if (inputvalue === '') {
        alert("Поле не может быть пусты!");
    } else {
      document.getElementById('myUl').appendChild(li);
    }
    document.getElementById('myInput').value = "";

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00d7");
      span.className = 'close';
      span.appendChild(txt);
      li.appendChild(span);
      for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none"
        }
      }

}
