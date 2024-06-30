document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentOperand = '';
    let previousOperand = '';
    let operator = null;

    // Add event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const { innerText: buttonText } = button;
            if (button.classList.contains('number')) {
                appendNumber(buttonText);
            } else if (button.classList.contains('operator')) {
                chooseOperator(buttonText);
            } else if (button.id === 'clear') {
                clear();
            } else if (buttonText === '.') {
                appendDecimal();
            } else if (buttonText === '=') {
                calculate();
            }
        });
    });

    // Append number to the current operand
    function appendNumber(number) {
        if (number === '0' && currentOperand === '0') return; // Prevent multiple leading zeros
        if (currentOperand === '0') {
            currentOperand = number; // Replace initial zero
        } else {
            currentOperand += number; // Append number to operand
        }
        updateDisplay();
    }

    // Choose the operator for calculation
    function chooseOperator(op) {
        if (currentOperand === '') return; // Ignore if no current operand
        if (previousOperand !== '') {
            calculate(); // Compute previous operation before setting new operator
        }
        operator = op;
        previousOperand = currentOperand;
        currentOperand = '';
    }

    // Calculate the result based on the operator
    function calculate() {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return; // Ignore if operands are not numbers
        switch (operator) {
            case '+':
                computation = prev + current;
                break;
            case '−':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        currentOperand = computation;
        operator = null;
        previousOperand = '';
        updateDisplay();
    }

    // Clear the display and reset all operands and operator
    function clear() {
        currentOperand = '';
        previousOperand = '';
        operator = null;
        updateDisplay();
    }

    // Append decimal point to the current operand
    function appendDecimal() {
        if (currentOperand.includes('.')) return; // Ignore if already contains decimal
        currentOperand += '.';
        updateDisplay();
    }

    // Update the display with the current operand
    function updateDisplay() {
        display.innerText = currentOperand || '0'; // Show zero if operand is empty
    }

    // Initialize the calculator by clearing it
    clear();
});

