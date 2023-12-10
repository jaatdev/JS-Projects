    const display = document.getElementById('display');
    const buttons = ['btn1', 'btn2', 'btn3', 'btnPlus', 'btn4', 'btn5', 'btn6', 'btnMinus', 'btn7', 'btn8', 'btn9', 'btnMultiply', 'btn0', 'btnClear', 'btnEqual', 'btnDivide'];

    buttons.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (buttonId === 'btnClear') {
            button.addEventListener('click', clearDisplay);
        } else if (buttonId === 'btnEqual') {
            button.addEventListener('click', calculateResult);
        } else {
            button.addEventListener('click', () => appendToDisplay(button.innerText));
        }
    });

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() { 
        display.value = '';
    }

    function calculateResult() {
        try {
            const result = eval(display.value); // Using eval for simplicity, be cautious in real-world applications
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    }

