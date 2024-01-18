let display = document.getElementById('display');
let memory = 0;

document.addEventListener('keydown', function (event) {
    let key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    } else {
        alert("Only numbers are allowed");
    }
});

function appendToDisplay(value) {
    const currentValue = display.value;


    if (currentValue === '0' || ['+', '-', '*', '/'].includes(currentValue)) {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0';
}

function calculateResult() {
    try {
        const result = eval(display.value);
        display.value = Number.isInteger(result) ? result.toString() : result.toFixed(2);
    } catch (error) {
        display.value = 'Error';
    }
}

function memoryOperation(operation) {
    switch (operation) {
        case 'M+':
            memory += parseFloat(display.value) || 0;
            break;
        case 'M-':
            memory -= parseFloat(display.value) || 0;
            break;
        case 'MC':
            memory = 0;
            break;
    }
    clearDisplay();
}
