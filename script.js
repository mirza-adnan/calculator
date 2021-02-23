const numbers = document.querySelectorAll(".number");
const mainDisplay = document.querySelector("#display-2");
const secondDisplay = document.querySelector("#display-1")
const ac = document.querySelector("#ac");
const backspace = document.querySelector("#backspace");
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equal = document.querySelector("#equal");
const decimal = document.querySelector("#decimal");

let operator = null;
let result = 0;

function operate() {
        let initialNum =  Number(secondDisplay.textContent);
        let secondNum = Number(mainDisplay.textContent);
        if (operator == "+" && secondDisplay.textContent) {
            result = initialNum + secondNum;
            secondDisplay.textContent = String(result);
        }

// making numbers appear on the display
numbers.forEach(number => {
    number.addEventListener("click", function() {
        const numberText = number.textContent;
        mainDisplay.textContent += numberText;   
    })
})

// clearing everything from the display
ac.addEventListener("click", function() {
    mainDisplay.textContent = "";
    secondDisplay.textContent = "";
    operator = null;
})

// mathematical operations
add.addEventListener("click", function() {
    if (secondDisplay.textContent) { // used when you want to add multiple numbers
        let initialNum = Number(secondDisplay.textContent);
        let secondNum = Number(mainDisplay.textContent);
        secondDisplay.textContent = initialNum + secondNum;
        result = initialNum + secondNum;
        mainDisplay.textContent = "";
    } else { // used to add first two numbers
        let initialNum = mainDisplay.textContent;
        mainDisplay.textContent = "";
        secondDisplay.textContent = initialNum;
        result = Number(initialNum);
    }
    operator = "+";
})

minus.addEventListener("click", function() {
    if (secondDisplay.textContent) {
        let initialNum = Number(secondDisplay.textContent);
        let secondNum = Number(mainDisplay.textContent);
        secondDisplay.textContent = initialNum - secondNum;
        result = initialNum - secondNum;
        mainDisplay.textContent = "";
    } else { // used to add first two numbers
        let initialNum = mainDisplay.textContent;
        mainDisplay.textContent = "";
        secondDisplay.textContent = initialNum;
        result = Number(initialNum);
    }
    operator = "-";
})




equal.addEventListener("click", function() {
    if (operator == "+" && secondDisplay.textContent) {
        let num = Number(mainDisplay.textContent);
        result = result + num;
        mainDisplay.textContent = String(result);
        secondDisplay.textContent = "";
        operator = null;
    } else if (operator == "-" && secondDisplay.textContent) {
        let num = Number(mainDisplay.textContent);
        result = result - num;
        mainDisplay.textContent = String(result);
        secondDisplay.textContent = "";
        operator = null;
    }
    
})


// decimal function
decimal.addEventListener("click", function() {
    mainDisplay.textContent += ".";
})