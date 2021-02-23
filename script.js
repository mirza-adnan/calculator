const numbers = document.querySelectorAll(".number");
const mainDisplay = document.querySelector("#display-2");
const secondDisplay = document.querySelector("#display-1")
const ac = document.querySelector("#ac");
const backspace = document.querySelector("#backspace");
const addButton = document.querySelector("#add");
const minusButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equal = document.querySelector("#equal");
const decimal = document.querySelector("#decimal");

let operator = null;
let result = "";
let reset = false;

// functions for all the operators
function add(a, b) {
    result = a + b;
}

function subtract(a, b) {
    result = a - b;
}

function multiply(a, b) {
    result = a * b;
}

function divide(a, b) {
    result = a / b;
}

// calling the appropriate function based on the operator that is clicked
function operate() {
    let initialNum =  Number(secondDisplay.textContent);
    let secondNum = Number(mainDisplay.textContent);
    if (operator == "+") {
        add(initialNum, secondNum);
    }
    if (operator == "-") {
        subtract(initialNum, secondNum);
    }
    if (operator == "*") {
        multiply(initialNum, secondNum);
    }
    if (operator == "/") {
        if (secondNum == 0) {
            alert("Oops. You cannot divide by zero!")
            ac.click()
            result = "";
        } else {
            divide(initialNum, secondNum);
        }
        
    }
}

// displaying numbers on screen based on whether it is the first input or not
function display(sign) {
    if (secondDisplay.textContent) {
        operate()
    } else {
        result = mainDisplay.textContent
        secondDisplay.textContent = result;
    }
    mainDisplay.textContent = "";
    secondDisplay.textContent = result;
    operator = sign;
    reset = false;
}
        

// making numbers appear on the display
numbers.forEach(number => {
    if (reset) {
        ac.click()
    }
    number.addEventListener("click", function() {
        const numberText = number.textContent;
        mainDisplay.textContent += numberText;
    })
})

// resetting everything
ac.addEventListener("click", function() {
    mainDisplay.textContent = "";
    secondDisplay.textContent = "";
    operator = null;
    result = 0;
})

// event listeners for operators
addButton.addEventListener("click", function() {
    display("+");
})

minusButton.addEventListener("click", function() {
    display("-")
})

multiplyButton.addEventListener("click", function() {
    display("*");
})

divideButton.addEventListener("click", function() {
    display("/")
})

equal.addEventListener("click", function() {
    if (secondDisplay.textContent) {
        operate()
        secondDisplay.textContent = "";
        mainDisplay.textContent = result;
    } else {
        mainDisplay.textContent = secondDisplay.textContent;
        secondDisplay.textContent = "";
    }
    reset = true;
})

// decimal function
decimal.addEventListener("click", function() {
    mainDisplay.textContent += ".";
})

//backspace function
backspace.addEventListener("click", function() {
    mainDisplay.textContent = mainDisplay.textContent.slice(0, -1);
})