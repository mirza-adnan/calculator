const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#display");

// making numbers appear on the display
console.log(numbers)
numbers.forEach(number => {
    number.addEventListener("click", function() {
        const numberText = number.textContent;
        display.textContent += numberText;   
    })
})