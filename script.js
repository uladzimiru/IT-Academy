var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

var clonedObj = {};

function deepClone(initialObj) {

for (var key in initialObj) {
    if (typeof initialObj[key] == 'function') {
        clonedObj[key] = initialObj[key].toString();
        alert(initialObj[key]);
    } else if (typeof initialObj[key] == 'undefined') {
        clonedObj[key] = initialObj[key];
        alert('undefined done');
    } else if ((initialObj[key] == null) && (typeof initialObj[key] != 'undefined')) {
        clonedObj[key] = initialObj[key];
        alert('null done');
    } else if ((typeof initialObj[key] == 'object') && (initialObj[key] != null)) {
        if (Array.isArray(initialObj[key])) {
            var array = new Array;
            for (var i = 0; i < initialObj[key].length; i++) {
                array[i] = initialObj[key][i];
            }
            clonedObj[key] = array;
            alert(clonedObj[key]);

        } else {
            var obj = {};
            for (var k in initialObj[key]) {
                obj[k] = initialObj[key][k];
            }
            clonedObj[key] = obj;
            alert(clonedObj[key]);
            deepClone(initialObj[key]);
        }
    } else if ((typeof initialObj[key] != 'function') && (typeof initialObj[key] != 'undefined') && (initialObj[key] != null)) {
        clonedObj[key] = initialObj[key];
    }
}
}
