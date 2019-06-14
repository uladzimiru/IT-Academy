// --------------- LESSON 4 --------------------------------------

// TASK 1

function task4_1() {

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

    pow();

}

// TASK 2

function task4_2() {

    alert('see code in JS file');

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

}


// TASK 3

// case 1 - loop:

alert('see code in JS file');



function sumTo1(n) {
    alert('case1 - loop');

    var sum = 0;

    if (n == 0) {
        return alert('Bye-bye :)')
    } else for (i = n; i >= 1; i--) {
        var sum = sum + i
    }
    alert(sum);
}

sumTo1();


// case 2 - recursion:

alert('case2 - recursion');

function sumTo2(n) {
    var n = +prompt('Enter n: ', '100');

    var sum = 0;

    if (n >= 1) {
        sum = n + sumTo2(n - 1);
    }
    return sum;
}
sumTo2();


//case 3 - formula

function sumTo(n) {
    var sum = 0;
    sum = n * (n + 1) / 2;
    return sum;
  }


// ----------- LESSON 3 --------------------------------------

// TASK 1

function task3_1() {

    var styles = [' Jazz', ' Blues'];
    alert(styles); // delete
    styles.push(' Rock-n-Roll');
    alert(styles); // delete
    styles[styles.length - 2] = ' Classic';
    alert(styles); // delete
    alert(styles.shift() + ' - deleted!');
    styles.unshift(' Rap', ' Reggae');
    alert(styles); // delete

}


// TASK 2

function task3_2() {

    alert('case 1:');

    for (var i = 1; i <= 10; i++) {
        if (i % 2) {
            continue;
        }
        alert(i);
    }

    alert('case 2:');

    for (var i = 1; i < 10;) {
        if (i % 2 !== 0) {
            i++;
            alert(i);
        } else {
            i += 2;
            alert(i);
        }
    }


    alert('case 3 (self destructive reverse order :)');

    var i = 1;
    var allArr = [];
    // first we create an array:

    while (i <= 10) {
        allArr.unshift(i);
        i++;
    }
    alert(allArr);

    // then we alert even numbers deleting the array:

    for (var i = 1; i <= 10; i++) {
        allArr[0] % 2 === 0 ? alert(allArr.shift()) : allArr.shift();
    }

    alert('case 4 (self destructive direct order :)');

    var i = 1;
    var allArr = [];
    // create an array

    while (i <= 10) {
        allArr.push(i);
        i++;
    }
    alert(allArr);

    for (var i = 1; i <= 10; i++) {
        allArr[0] % 2 === 0 ? alert(allArr.shift()) : allArr.shift();
    }


}



// TASK 3 

function task3_3() {

    function isEmpty(obj) {

        var counter = 0;

        for (var key in obj) {
            counter++;
        }
        if (!counter) {
            alert(true + ' - object is empty');
        } else {
            alert(false + ' - object is not empty');
        }
    }
    // obj is empty:

    var obj = {};

    isEmpty(obj);

    // obj is not empty:

    var obj = {
        pet: 'cat',
        name: 'Alex',
        weightInKilos: 3
    };

    isEmpty(obj);

}

// TASK 4

function task3_4() {

    var myArr = [];

    while (true) {
        var newElement = prompt('Enter values to create an Array:', '');
        if ((newElement == null) || (newElement === '')) {
            break;
        } else {
            newElement = +newElement;
            if (isNaN(newElement)) {
                break;
            } else {
                myArr.push(newElement);
            }
        }
    }
    alert('We have an array: ' + myArr);


    var i;
    var sum = 0;

    for (i = 0; i < myArr.length; i++) {
        sum = sum + myArr[i];
    }
    alert('The sum of all elements is: ' + sum);
}


// TASK 5

function task3_5() {

    var simpleArr = [];

    cycle: for (var i = 2; i <= 10; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                continue cycle;
            }
        }
        simpleArr.push(i);
    }
    alert(simpleArr);
}





// ---------------- LESSON 2 --------------------------------------

// TASK 1

function task2_1() {
    var a = prompt('Please, enter an integer:', '-2');
    if (a != null) {
        a = +a;
        var b = prompt('Now let\'s add another integer:', '-1');
    } else {
        return;
    }

    if (b != null) {
        b = +b;
        var c = prompt('Then let\'s substract an integer:', '0');
    } else {
        return;
    }

    if (c != null) {
        c = +c;
        var e = prompt('Now let\'s multiply what we\'ve got by:', '1');
    } else {
        return;
    }

    if (e != null) {
        e = +e;
        var f = prompt('OK, how about we divide everything into:', '2');
    } else {
        return;
    }

    if (f != null) {
        f = +f;
        var g = ((a + b - c) * e / f);
        alert('Now we have a formula: ((' + a + ' + ' + b + ' - ' + c + ')' + ' * ' + e + ' / ' + f + '); \nAnd the result is: ' + g + '\n :)');
    } else {
        alert('Start all over :(');
    }
}

//   TASK 2

function task2_2() {
    var PASSWORD = 'black lord';
    var LOGIN = 'Admin';

    var login = prompt('Enter login:', 'Admin');
    if (login === LOGIN) {
        var pass = prompt('Enter password');
        if (pass === PASSWORD) {
            alert('Welcome to the pinguins party!');
            return;
        } else if (pass == null) {
            alert('Login cancelled');
            return;
        } else if (pass !== PASSWORD) {
            alert('Wrong password');
        }
        return;

    } else if (login == null) {
        alert('Login cancelled');
        return;
    } else if (login !== LOGIN) {
        alert('You are not from our Galaxy!');
        return;
    }
}


//  TASK 3

function task2_3() {

    alert('see code inside JS file');

    // original:

    // var message;

    // if (login === 'Вася') {
    //   message = 'Привет';
    // } else if (login === 'Директор') {
    //   message = 'Здравствуйте';
    // } else if (login === '') {
    //   message = 'Нет логина';
    // } else {
    //   message = '';
    // }

    // modified:

    var message;

    login === 'Vasya' ? message = 'Hi' :
        login === 'Director' ? message = 'Hello' :
            login === '' ? message = 'No Login' :
                message = '';

}



// TASK 4

function task2_4() {

    do {
        var firstName = prompt('Enter your first name:');
        if ((firstName == null) || (firstName.length < 1)) {
            alert('Enter your first name.' +
                '\nFirst name must contain at least one charachter');
        }
    } while ((firstName == null) || (firstName.length < 1));


    do {
        var middleName = prompt('Enter your middle name:');
        if ((middleName == null) || (middleName.length < 1)) {
            alert('Enter your middle name.' +
                '\nMiddle name must contain at least one charachter');
        }
    } while ((middleName == null) || (middleName.length < 1));

    do {
        var familyName = prompt('Enter your family name:');
        if ((familyName == null) || (familyName.length < 1)) {
            alert('Enter your family name.' +
                '\nFamily name must contain at least one charachter');
        }
    } while ((familyName == null) || (familyName.length < 1));

    do {
        var age = prompt('Enter your age (full years):');
        if ((age == null) || (age < 1)) {
            alert('Enter your age using numbers from 1 to 100');
        } else if (age > 100) {
            alert('OMG! :)');
        }
    } while ((age == null) || (age < 1));

    var ageInDays = age * 365;
    var ageIn5Years = (+age + 5);
    var retired;

    age >= 65 ?
        retired = 'Yes' :
        retired = 'No';

    var gender = confirm('Press OK if your gender is MALE \npress CANCEL if you gender is FEMALE');

    gender == true ?
        gender = 'Male' :
        gender = 'Female';

    alert('\nYour full name:' + ' ' + firstName + ' ' + middleName + ' ' + familyName +
        '\nYour age in years:' + ' ' + age +
        '\nYour age in days:' + ' ' + ageInDays +
        '\nIn 5 years your age will be' + ' ' + ageIn5Years +
        '\nYour gender:' + ' ' + gender +
        '\nYou are retired:' + ' ' + retired);
}

// GAMES

function game() {
    var answer = confirm('\nReally want to play???');
    if (answer === true) {
        alert('\nSorry, no games today... :) \nGo back to work!!!');
    } else {
        alert('\nGood choice!');
    }
}





