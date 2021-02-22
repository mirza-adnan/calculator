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

let operator = null;

// making numbers appear on the display
numbers.forEach(number => {
    number.addEventListener("click", function() {
        const numberText = number.textContent;
        mainDisplay.textContent += numberText;   
    })
})

//clearing everything from the display
ac.addEventListener("click", function() {
    mainDisplay.textContent = "";
    secondDisplay.textContent = "";
    operator = null;
})

// mathematical operations
add.addEventListener("click", function() {
    num = mainDisplay.textContent;
    secondDisplay.textContent = num + "(+)";
    num = Number(num);
    mainDisplay.textContent = "";
    operator = "+";
    return num
})

equal.addEventListener("click", function() {
    if (operator = "+" && secondDisplay.textContent) {
        secondNum = Number(mainDisplay.textContent);
        let sum = num + secondNum;
        mainDisplay.textContent = String(sum);
        secondDisplay.textContent = "";
        operator = null;
    };
})
