function Cat(name) {
    this.name = name;
    var foodAmmount = 50;

    this.daylyNorm = function (ammount) {
        if (!arguments.length) {
            return foodAmmount;
        } else if (ammount < 50) {
            alert('Маловато');
        } else if (ammount > 500) {
            alert('Многовато');
        }
        foodAmmount = amount;

    };

    function formatFoodAmmount() {
        return foodAmmount + 'gr.';
    }

    this.feed = function () {
        console.log('Насыпаем в миску' + formatFoodAmmount + 'корма.')
    };
}


var barsik = new Cat('Barsik');

barsik;
barsik.name;
barsik = null;



