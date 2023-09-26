var num = 5431;

function reduceNum(n) {
    var digits = n.toString().split("").map(Number);

    while (digits.length > 1) {
        var sum = digits.reduce(function (a, b) {
            return a + b;
        }, 0);

        digits = sum.toString().split("").map(Number);
    }

    return digits[0];
}

var singleDigitResult = reduceNum(num);
console.log(singleDigitResult);
