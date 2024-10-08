const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '0';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('clear')) {
            currentInput = '0';
            previousInput = '';
            operator = '';
            updateDisplay();
            return;
        }

        if (button.classList.contains('operator')) {
            if (previousInput && currentInput) {
                calculate();
            }
            operator = value;
            previousInput = currentInput;
            currentInput = '';
            return;
        }

        if (button.classList.contains('equal')) {
            calculate();
            operator = '';
            return;
        }

        if (currentInput === '0') {
            currentInput = value;
        } else {
            currentInput += value;
        }
        updateDisplay();
    });
});

function updateDisplay() {
    display.textContent = currentInput;
}

function calculate() {
    let result;
    const previous = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(previous) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            result = previous / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    updateDisplay();
}
