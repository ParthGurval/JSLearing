function calculate(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = 0;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
    }

    document.getElementById("result").textContent = "Result: " + result;
}

document.getElementById("addBtn").addEventListener("click", function () {
    calculate('add');
});

document.getElementById("subtractBtn").addEventListener("click", function () {
    calculate('subtract');
});

document.getElementById("multiplyBtn").addEventListener("click", function () {
    calculate('multiply');
});

document.getElementById("divideBtn").addEventListener("click", function () {
    calculate('divide');
});

document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "";
});