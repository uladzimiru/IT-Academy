// 1

function makeNamesList(names) {

    var namesList = names.map(function (item) {

        var temp = {};
        temp.name = item;
        return temp;

    });

    return namesList;
}

makeNamesList(['John', 'Lena', 'Peter', 'Vasya', 'Kate', undefined, 'Sam'])

// 2

function setTime(time) {

    var timeSet = 'Текущее время : ' + time.join(' : ');

    return timeSet;

}

setTime(['00', '13', '24'])


// 3 

// вариант А) - немного топорный, но рабочий:

function howManyLetters(text) {

    var temp = text.toLowerCase().split('');

    var numberOfLetters = temp.filter(function (item) {

        return (item == 'а' || item == 'о' || item == 'и' || item == 'е' || item == 'ё' || item == 'э' || item == 'ы' || item == 'у' || item == 'ю' || item == 'я');

    });

    console.log(numberOfLetters.length);
}

howManyLetters('Буря мглою небо кроет')


// вариант Б) - пытался сделать поиск и сравнение с гласными в массиве letters через цикл, 
// так и не понял почему в var foundLetters не записываются только те буквы, 
// которые равны гласным из массива...

function findLetters(letters, text) {

    var temp = text.toLowerCase().split('');
    var result = [];

    for (i = 0; i <= letters.length; i++) {

        var foundLetters = temp.filter(function (item) {
            item == letters[i];

            return foundLetters;
        });
        result.push(foundLetters);
    }

    console.log(result);

}

findLetters(['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'], 'Буря мглою')


// 4


function sentenceInfo(text) {
    var sentences = text.replace(/\.\s+/g, '|').replace(/\.$/g, '|').replace(/\?\s/g, '|').replace(/\?$/g, '|')
        .replace(/\!\s/g, '|').replace(/\!$/g, '|').split("|");

    // return sentences;

    for (i = 0; i < sentences.length; i++) {
        console.log(sentences[i]);
        var temp = [];
        temp[i] = sentences[i].replace(/[^a-z]/gi, '');
        console.log(temp[i].length);

    }

}

sentenceInfo('Some text, text 2.0. Some other text! Some more text 3.32?')

