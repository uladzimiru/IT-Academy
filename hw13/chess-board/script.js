var inputs = document.getElementsByTagName('input');
var butt = document.getElementById('butt');

alert(inputs[0]);
alert(butt);

if (inputs[0].value) {
    butt.setAttribute("disabled", false);
} else {
    butt.setAttribute("disabled", true);
} 



