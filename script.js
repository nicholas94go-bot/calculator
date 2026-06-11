let currentInput = '';
let currentOperation = ''
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    document.querySelector('.inputDisplay').value = `${previousInput} ${currentOperation} ${currentInput}`;
    
}
function appendOperator(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.querySelector('.inputDisplay').value = `${previousInput} ${currentOperation}`;
}
function calculate() {
    if (currentInput === '' || previousInput === '' || currentOperation === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current / 100;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    document.querySelector('.inputDisplay').value = currentInput;
}
function clearScreen() {
    currentInput = '';
    currentOperation = '';
    previousInput = '';
    document.querySelector('.inputDisplay').value = '';
}   