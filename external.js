
function add(num1, num2) {
    output = Number(num1) + Number(num2);
    num1 = output;
    return output;
}

function subtract(num1, num2) {
    output = num1 - num2;
    num1 = output;
    return output;
}

function multiply(num1, num2) {
    output = num1 * num2;
    num1 = output;
    return output;
}

function divide(num1, num2) {
    if (num2 == 0) {
        alert("CANNOT DIVIDE By ZERO");
    }
    output = num1 / num2;
    num1 = output;
    return output;
}

function operate(operator, num1, num2) {
    output = window[operator](num1, num2)
    document.querySelector('#display').innerHTML = +output.toFixed(2);
    return output;
}

const btns = document.querySelectorAll('button');
let output;
let num1;
let num2;
let operator;


btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (!isNaN(e.target.value)) {
            document.querySelector('#display').innerHTML = e.target.value;
            if (!num1) {
                num1 = e.target.value;
            }
            else {
                num2 = e.target.value;
            }
        }
        else if (e.target.value == 'operate') {
            num1 = window[e.target.value](operator, num1, num2);

        }
        else if (e.target.value == 'clear') {
            document.querySelector('#display').innerHTML = "";
            num1 = null;
            num2 = null;
            operator = null;
        }
        else {
            operator = e.target.value;
        }
            
    });
});
