// LESSON 4
// TASK 1 --------------

function pow(x, n) {

    while (true) {
        var x = prompt('\nLets solve x⌃n,\nEnter x: ', '');
        if (x == null) {
            alert('Calculation canceled');
            return;
        }

        var n = prompt('\nEnter n: ', '');

        if (n == null) {
            alert('Calculation canceled');
            return;
        } else if ((x % 1) || (isNaN(x)) || (x < 1)) {
            alert('x must be a positive integer');
        } else if ((n % 1) || (isNaN(n)) || (n < 1)) {
            alert('n must be a positive integer');
        } else break;
    }

    var power = 1;

    for (i = 0; i < n; i++) {
        power = power * x;
    }
    alert('x⌃n = ' + power);
}


// TASK 2 --------------

//checked with arrays: 
// [[],[0],NaN,[0],'aa',5,0,7,[4,[2],8,[1,3],2],[9,[]],1,8]
// [5,7,[4,[2],8,[1,3],2],[9,[]],1,8]

function treeSum(someArr) {
    var sum = 0;
    for (var i = 0; i < someArr.length; i++) {
        if ((someArr.length) && (typeof someArr[i] == 'object')) {
            sum = sum + treeSum(someArr[i]);
        } else if (!isNaN(someArr[i]) && (typeof someArr[i] == 'number') && (typeof someArr[i] != 'string')) {
            sum = sum + someArr[i];
        } else continue;
    }
    return sum;
}

// TASK 3 ----------------

// case 1 - loop:

function sumTo1(n) {

    var sum = 0;

    if (n == 0) {
        return alert('Bye-bye :)')
    } else for (i = n; i >= 1; i--) {
        var sum = sum + i
    }
    alert(sum);
}

// case 2 - recursion:

function sumTo2(n) {

    var sum = 0;

    if (n >= 1) {
        sum = n + sumTo2(n - 1);
    }
    return sum;
}

// case 3 - formula:


function sumTo(n) {

    var sum = 0;

    sum = n * (n + 1) / 2;

    return sum;

}


// Самый быстрый способ - считать по формуле, самый медленный - рекурсия,
// т.к. арифметические вычисления выполняются быстрее циклов и тем более рекурсии,
// которая требует повторяемых вызовов функции.
// Посчитать в броузере sumTo(100000) скорее всего не получится, т.к. броузер 
// будет такое большое количество итераций считать ошибкой и прекратит выполнение.