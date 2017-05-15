

// function fun1() {
//       var chbox;
//       chbox = document.getElementById('one');
//
//       if (chbox.checked) {
//         alert("Выбран");
//       }
//       else {
//         alert("Не выбран");
//       }
// }


function fun1() {
  var radbutt = document.getElementsByName('r1');
  for (var i = 0; i < radbutt.length; i++) {
    if (radbutt[i].checked) {
      alert('Выбран ' + i + ' элемент');
    }
  }
}
