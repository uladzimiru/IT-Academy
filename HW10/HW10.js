function Animal(name) {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + 'гр.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this.name = name;

    var self = this;
    this.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}


function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;
    this.feed = function() {
        animalFeed();
        console.log('Кот доволен ^_^');
        return this;
    };

    this.stroke = function() {
        console.log('Гладим кота.');
        return this;
    };
}

var barsik = new Cat('Барсик');

console.log(barsik.feed().stroke().stroke().feed());

barsik = null;







function Animal(name) {
    this.name = name;
    this._foodAmount = 50;
}


Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + 'гр.';
}

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};



function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.constuctor = Cat;

Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');
    return this;
}

Cat.prototype.stroke = function () {
    console.log('Гладим кота');
    return this;
}



var barsik = new Cat('Барсик');


console.log(barsik.feed().stroke().stroke().feed());


barsik = null;




