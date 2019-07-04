function Animal(name) {
    this._name = name;
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
    var self = this;
    console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
};



function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.constuctor = Cat;

Cat.prototype.feed = function () {
    console.log(Animal.prototype.feed.apply(this));
    console.log('Кот доволен ^_^');
}

Cat.prototype.stroke = function () {
    console.log('Гладим кота');
}



var barsik = new Cat('Барсик');


barsik.feed();
barsik.stroke();

barsik = null;




