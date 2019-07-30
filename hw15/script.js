var table = document.getElementById('table')
table.addEventListener('click', doOnClick);

function doOnClick() {
    if (event.target.id == 'addRow') {
        var newRow = document.getElementsByTagName('tr')[0].cloneNode(true);
        var cleanCells = newRow.getElementsByTagName('td');
        for (i = 0; i < cleanCells.length; i++) {
            cleanCells[i].innerHTML = '';
        }
        var firstRow = document.getElementsByTagName('tr')[0];
        document.getElementsByTagName('tbody')[0].insertBefore(newRow, firstRow);
    } else if (event.target.tagName = 'td' && event.target.id != 'addRow' && event.target.innerHTML == '') {
        event.target.innerHTML = '<input type="text" value=""></input>';
        event.target.firstChild.style.backgroundColor = 'lightyellow';
        event.target.firstChild.focus();
        event.target.firstChild.addEventListener('keyup', doOnEnter);
        event.target.firstChild.addEventListener('blur', writeToTd);
    } else if (event.target.tagName = 'td' && event.target.id != 'addRow' && event.target.innerHTML != '') {
        var tempInnerHTML = event.target.innerHTML;
        event.target.innerHTML = '<input type="text" value=""></input>';
        event.target.firstChild.style.backgroundColor = 'lightyellow';
        event.target.firstChild.value = tempInnerHTML;
        event.target.firstChild.focus();
        event.target.firstChild.addEventListener('keyup', doOnEnter);
        event.target.firstChild.addEventListener('blur', writeToTd);
    }
}

function doOnEnter() {
    if (event.keyCode == 13) {
        event.target.blur();
    }
}

function writeToTd() {
    if (this.value) {
        this.parentElement.innerHTML = this.value;
        this.remove();
    } else {
        this.remove();
    }
}