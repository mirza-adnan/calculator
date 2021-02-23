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
const instructions = document.querySelector("#instructions")

let operator = null;
let result = "";
let equalPressed = false;

//removing the keyboard instructions
window.addEventListener("load", function() {
    instructions.style.cssText = "opacity: 0;";
})

instructions.addEventListener("transitionend", function() {
    instructions.style.cssText = "display: none;";
})

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
    equalPressed = false;
}
        

// making numbers appear on the display
numbers.forEach(number => {
    number.addEventListener("click", function() {
        if (equalPressed) {
            ac.click()
        }
        const numberText = number.textContent;
        mainDisplay.textContent += numberText;
    })
})

// resetting everything
ac.addEventListener("click", function() {
    mainDisplay.textContent = "";
    secondDisplay.textContent = "";
    operator = null;
    result = "";
    equalPressed = false;
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
        equalPressed = true;
    } else {
        mainDisplay.textContent = secondDisplay.textContent;
        secondDisplay.textContent = "";
    }
    
})

// decimal function
decimal.addEventListener("click", function() {
    if (!(mainDisplay.textContent.includes("."))) {
        mainDisplay.textContent += ".";
    }
    
})

//backspace function
backspace.addEventListener("click", function() {
    mainDisplay.textContent = mainDisplay.textContent.slice(0, -1);
})

// keyboard support
window.addEventListener("keydown", function(e) {
    const key = document.querySelector(`div[data-key="${e.key}"]`);
    if(key) key.click();
    
})

