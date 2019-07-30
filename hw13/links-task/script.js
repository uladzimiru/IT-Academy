var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google1.by">Link 1</a> and <a href="http://google2.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google3.by">Link 3</a> and <a href="http://google4.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var allLinks = document.getElementsByTagName('a');

document.getElementsByTagName('button')[0].onclick = function () {
    var allLinks = document.getElementsByTagName('a');
    allLinks[0].classList.toggle('changedLinks');
    allLinks[1].classList.toggle('changedLinks');
};

allLinks[2].addEventListener('click', function () {
    event.preventDefault();
    alert(allLinks[2].getAttribute('href'));
});

allLinks[3].addEventListener('click', function () {
    event.preventDefault();
    alert(allLinks[3].getAttribute('href'));
});








