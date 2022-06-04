let currentOperand = "";
let bufferOperand = "";
let currentOperator = "";

function updateScreen(current, buffer) {
    currentOperandText.textContent = current;
    bufferOperandText.textContent = buffer;
}



const currentOperandText = document.querySelector('.current-operand');
const bufferOperandText = document.querySelector('.buffer-operand');

const clearButton = document.querySelector('.clear')
.addEventListener('click', () => {
    currentOperand = "";
    bufferOperand = "";
    currentOperator = "";
    updateScreen(currentOperand, bufferOperand);
});

const minusSignButton = document.querySelector('.minus-sign');
const percentSignButton = document.querySelector('.percent-sign');
const decimalPointButton = document.querySelector('.decimal-button');
const evaluateButton = document.querySelector('.evaluate');

const additionButton = document.querySelector('.addition');
const substractionButton = document.querySelector('.substraction');
const divisionButton = document.querySelector('.division');
const multiplyButton = document.querySelector('.multiply');




function digitButtonPressed(digit) {
    currentOperand = currentOperand.concat(digit);
    updateScreen(currentOperand, bufferOperand);
}
//buttons
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
    .addEventListener('click', () => { digitButtonPressed("0") });


