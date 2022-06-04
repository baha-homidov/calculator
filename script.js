let currentOperand = "0";
let bufferOperand = "";
let currentOperator = "";
let defaultBackgroundColor = '#22e3c3';
let darkBackgroundColor = '#0ba48b';


const currentOperandText = document.querySelector('.current-operand');
const bufferOperandText = document.querySelector('.buffer-operand');
let errorState = false;

let buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        //if calculator is in NaN state reset everything after a button press
        if (errorState == true) {
            errorState = false;
            currentOperand = "0";
            bufferOperand = "";
            currentOperator = "";
            resetSignButtons();
            updateScreen(currentOperand, bufferOperand);
        }
    })
}


function updateScreen(current, buffer) {
    if ((current.length > 9 && current.includes("."))
    ) {
        let roundDown = (current.length - 2) - current.indexOf(".");
        currentOperand = Number(currentOperand).toFixed(roundDown);
        updateScreen(currentOperand, bufferOperand);
        return;
    }

    else if ((buffer.length > 9 && buffer.includes("."))) {
        let roundDown = (buffer.length - 2) - buffer.indexOf(".");

        buffertOperand = Number(bufferOperand).toFixed(roundDown);
        updateScreen(currentOperand, bufferOperand);
        return;
    }
    if (current.length > 9 || buffer.length > 9) {
        resetSignButtons();
        currentOperand = "0";
        bufferOperand = "";
        currentOperator = "";
        currentOperandText.textContent = "NaN";
        errorState = true;
        bufferOperandText.textContent = "";
    } else {
        currentOperandText.textContent = current;
        bufferOperandText.textContent = buffer;
    }
}
updateScreen(currentOperand, bufferOperand);




function evaluate() { //evalute and update screen;
    switch (true) {
        case (currentOperator == "+"):
            currentOperand = (Number(bufferOperand) + Number(currentOperand)).toString();
            currentOperator = "";
            break;
        case (currentOperator == "-"):
            currentOperand = (Number(bufferOperand) - Number(currentOperand)).toString();
            currentOperator = "";
            break;
        case (currentOperator == "/"):
            currentOperand = (Number(bufferOperand) / Number(currentOperand)).toString();
            currentOperator = "";
            break;
        case (currentOperator == "*"):
            currentOperand = (Number(bufferOperand) * Number(currentOperand)).toString();
            currentOperator = "";
            break;
    }

    currentOperator = "";
    bufferOperand = "";
    resetSignButtons();
}


function resetSignButtons() {
    let buttons = document.querySelectorAll('.operator');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.cssText = `background-color: ${defaultBackgroundColor};`;
    }
}

function updateBuffer(operator, button) { // update buffer on operator button press
    if (bufferOperand.length == 0) {

        bufferOperand = currentOperand;
        currentOperator = operator;
        currentOperand = "0";
        button.style.cssText = `background-color: ${darkBackgroundColor};`;
        updateScreen(currentOperand, bufferOperand);
    }
    else {
        evaluate(currentOperand);
        bufferOperand = currentOperand;
        currentOperand = "0";
        currentOperator = operator;
        button.style.cssText = `background-color: ${darkBackgroundColor};`;
        updateScreen(currentOperand, bufferOperand);
    }
}


function digitButtonPressed(digit) {
    if (currentOperand.length >= 8) {

        return;
    }
    if (currentOperand === "0") {
        currentOperand = "";
    }
    currentOperand = currentOperand.concat(digit);
    updateScreen(currentOperand, bufferOperand);
}


const clearButton = document.querySelector('.clear')
    .addEventListener('click', () => {
        currentOperand = "0";
        bufferOperand = "";
        currentOperator = "";
        resetSignButtons();
        updateScreen(currentOperand, bufferOperand);
    });


const minusSignButton = document.querySelector('.minus-sign')
    .addEventListener('click', () => {
        if (currentOperand == "0") {
            return;
        }
        else if (currentOperand.charAt(0) === "-") {
            currentOperand = currentOperand.slice(1);
            updateScreen(currentOperand, bufferOperand);
        }
        else {
            currentOperand = "-" + currentOperand;
            updateScreen(currentOperand, bufferOperand);
        }
    });


const backspace = document.querySelector('.backspace')
    .addEventListener('click', () => {
        if (currentOperand.length == 0) {
            return;
        }
        else if (currentOperand.length == 1) {
            currentOperand = "0";
            updateScreen(currentOperand, bufferOperand);
        }
        else {
            currentOperand = currentOperand.slice(0, currentOperand.length - 1);
            updateScreen(currentOperand, bufferOperand);
        }
    });


const decimalPointButton = document.querySelector('.decimal-point')
    .addEventListener('click', () => {
        if (currentOperand.includes(".")) {
            return;
        }
        else {
            currentOperand = currentOperand.concat(".");
            updateScreen(currentOperand, bufferOperand);
        }
    });


const evaluateButton = document.querySelector('.evaluate')
    .addEventListener('click', () => {

        if (currentOperator.length === 0) {
            return;
        }
        else if (currentOperand == "0" && currentOperator == "/") {
            currentOperand = "NaN";
            currentOperator = "";
            bufferOperand = "";
            updateScreen(currentOperand, bufferOperand);
        }
        else {
            evaluate();
            updateScreen(currentOperand, bufferOperand);
        }
    });


// operators
const additionButton = document.querySelector('.addition')
    .addEventListener('click', () => {
        updateBuffer("+", document.querySelector('.addition'));

    });

const substractionButton = document.querySelector('.substraction')
    .addEventListener('click', () => {
        updateBuffer("-", document.querySelector('.substraction'))
    });

const divisionButton = document.querySelector('.division')
    .addEventListener('click', () => {
        updateBuffer("/", document.querySelector('.division'));
    });
const multiplyButton = document.querySelector('.multiply')
    .addEventListener('click', () => {
        updateBuffer("*", document.querySelector('.multiply'));
    });



//digits
const digit1Button = document.querySelector('.digit-1')
    .addEventListener('click', () => { digitButtonPressed("1") });
const digit2Button = document.querySelector('.digit-2')
    .addEventListener('click', () => { digitButtonPressed("2") });
const digit3Button = document.querySelector('.digit-3')
    .addEventListener('click', () => { digitButtonPressed("3") });
const digit4Button = document.querySelector('.digit-4')
    .addEventListener('click', () => { digitButtonPressed("4") });
const digit5Button = document.querySelector('.digit-5')
    .addEventListener('click', () => { digitButtonPressed("5") });
const digit6Button = document.querySelector('.digit-6')
    .addEventListener('click', () => { digitButtonPressed("6") });
const digit7Button = document.querySelector('.digit-7')
    .addEventListener('click', () => { digitButtonPressed("7") });
const digit8Button = document.querySelector('.digit-8')
    .addEventListener('click', () => { digitButtonPressed("8") });
const digit9Button = document.querySelector('.digit-9')
    .addEventListener('click', () => { digitButtonPressed("9") });
const digit0Button = document.querySelector('.digit-0')
    .addEventListener('click', () => {
        if (currentOperand.charAt(0) == "0") {
            return;
        }
        digitButtonPressed("0")
    });
