
function add(num1, num2) {
    output = Number(num1) + Number(num2);
    num1 = output;
    return output;
}

function subtract(num1, num2) {
    output = Number(num1) - Number(num2);
    num1 = output;
    return output;
}

function multiply(num1, num2) {
    output = Number(num1) * Number(num2);
    num1 = output;
    return output;
}

function divide(num1, num2) {
    if (num2 == 0) {
        alert("CANNOT DIVIDE By ZERO");
    }
    output = Number(num1) / Number(num2);
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
let num1 = '';
let num2 = '';
let operator;
let display;
let firstnum = true;


btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (!isNaN(e.target.value) || e.target.value == 'dot') {
            if (firstnum) {
                if (e.target.value == 'dot') {
                    num1 += '.';
                }
                else {
                    num1 += e.target.value;
                }
                display = num1;
            }
            else {
                if  (e.target.value == 'dot') {
                    num2 += '.';
                }
                else {
                    num2 += e.target.value;
                }
                display = num2;
            }
            document.querySelector('#display').innerHTML = display;
        }
        else if (e.target.value == 'operate') {
            num1 = window[e.target.value](operator, num1, num2);
            firstnum = true;
            num2 = '';
        }
        else if (e.target.value == 'clear') {
            document.querySelector('#display').innerHTML = "";
            num1 = '';
            num2 = '';
            operator = null;
            firstnum = true;
        }
        else {
            operator = e.target.value;
            firstnum = false;
        }
            
    });
});
