// task 1

// function filterArr(arr) {
//     var newArr = [];

//     for (var i = 0; i < arr.length; i++) {
//         var el = arr[i];

//         if (el > 0) {
//             newArr[newArr.length] = el;
//         }
//     }

//     return newArr;
// }

// filterArr([-1, 0, 2, 34, -2]);




// с использованием перебирающего метода:

function filterArr(arr) {

    var newArr = arr.filter(function (item) {
        return item > 0;
    });
    alert(newArr);
}

filterArr([-1, 0, 2, 34, -2]);


// task 2


function findPositive(arr) {
    var newArr = arr.find(function (item) {
        return item > 0;
    });

    console.log(newArr);
}

findPositive([-1, 0, 2, 34, -2])



// task 3

function checkIfPali(palindrom) {

    var paliArr = palindrom.split('');

    for (var i = 0; i < paliArr.length; i++) {
        var temp = paliArr[i];
        paliArr.reverse();
        if (temp === paliArr[i]) {
            var result = true;
        } else {
            var result = false;
            break;
        }
    }
    alert(result);
}

checkIfPali('шалаш')
checkIfPali('привет')

// task 4

function checkIfAnagram(word1, word2) {

    var word1Arr = word1.split('');
    var word2Arr = word2.split('');

    if (word1Arr.length == word2Arr.length) {

        for (i = 0; i < word1Arr.length; i++) {

            var result = word1Arr.some(function (item) {
                return item == word2Arr[i];
            });

            if (result == true) {
                continue;
            } else {
                break;
            }
        }
        alert(result);

    } else {

        alert(false);

    }

}

checkIfAnagram('кот', 'ток')
checkIfAnagram('кот', 'кто')
checkIfAnagram('кот', 'так')
checkIfAnagram('кот', 'токо')


// task 5


function divideArr(someArr, n) {

    var newArr = [];

    for (i = 0; someArr.length > 0; i++) {
        newArr[i] = someArr.splice(0, n);
    }
    console.log(newArr);

}

divideArr([1, 2, 3, 4], 2)
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3)







