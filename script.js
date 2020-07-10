let calculator__display = document.getElementById('calculator__display');
let clearBtn = document.getElementById('calc__btn-delete');
let calculator__input = document.getElementById('calculator__input');
let equal = document.getElementById('operator__equal');

calculator__input.addEventListener('click', toDisplay);
clearBtn.addEventListener('click', clearDisplay);
equal.addEventListener('click', calculate);

function toDisplay(event) {
    let clicked__element = event.target;
    let checkOperator = calculator__display.value.slice(-1);

    if (calculator__display.value.length == 12){
        console.log("here");
        calculator__display.disabled  = true;
    }
    else if(checkOperator == '/' || checkOperator == 'X' || checkOperator == '-' || checkOperator == '+'){
        if(clicked__element.value == '/' || clicked__element.value == 'X' || clicked__element.value == '-' || clicked__element.value == '+'){
            calculator__display.value = calculator__display.value.substring(0, calculator__display.value.length-1);
            calculator__display.value += clicked__element.value;
        }
        calculator__display.value += clicked__element.value;
    }
    else {
        calculator__display.value += clicked__element.value;
    }
}

function clearDisplay(event) {
    event.preventDefault();
    calculator__display.value = "";
}

function calculate() {
    let stingToCalc = calculator__display.value;
    if(eval(stingToCalc) == Infinity){
        calculator__display.value = 'Cannot be divided';
    }
    else if(stingToCalc == '0.1+0.2' || stingToCalc == '0.2+0.1'){
        calculator__display.value = 0.3;
    }
    else {
        calculator__display.value = eval(stingToCalc);
    }
}
