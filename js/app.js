const buttons = document.querySelectorAll(".btn");
const screenNumber = document.querySelector(".screen-container span");
var equation = [];


// function

function calculate(equation) {

    return new Function('return ' + equation)();
}

function updateScreen(op = "") {
    number = equation.map(string => string).join("");

    if (op != "") {
        number = calculate(number);
        // calculate
        number = number;
        equation = [number];
    }

    screenNumber.innerText = (number);
}

function operation(op) {
    var lastChar = equation[equation.length - 1];

    if (lastChar === undefined) {
        console.log('null')
    }

    else {
        switch (op) {
            case "+":
            case "-":
            case "*":
            case "/":
                if (equation.length > 0) {
                    // check if the equation contains + - * /
                    if (equation.includes(op)) {

                    } else {
                        equation.push(op);
                        updateScreen();
                    }
                }
                break;

            case ".":
                if (!equation.includes(".")) {
                    equation.push(".");
                }
                updateScreen();
                break;
            case "del":
                if (equation.length > 0) {
                    equation = equation.slice(0, equation.length - 1);
                }
                updateScreen();
                break;

            case "reset":
                console.log("reset");
                equation = [];
                updateScreen();
                break;

            case "=":
                if (equation.includes("+") || equation.includes("-") || equation.includes("*") || equation.includes("/")) {
                    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
                        // show error
                        console.log("last char is an operator")
                    } else {
                        // get result;
                        updateScreen("=");
                    }
                }

                break;
        }
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const button = e.target.dataset.name;
        if (!isNaN(button)) {
            equation.push(button)
            updateScreen();
        }
        else {
            switch (button) {
                case ".":
                    operation(".")
                    break;
                case "del":
                    operation("del")
                    break;
                case "reset":
                    operation("reset")
                    break;
                case "+":
                    operation("+")
                    break;
                case "-":
                    operation("-")
                    break;
                case "x":
                    operation("*")
                    break;
                case "/":
                    operation("/")
                    break;
                case "=":
                    operation("=")
            }
        }
    })
})


var themeToggle = document.querySelector(".theme-toggle");
var toggleBall = document.querySelector(".toggle-ball")
var themes = ["1", "2", "3"];
var currentIndex = 1;

themeToggle.addEventListener("click", function () {

    const currentTheme = themes[currentIndex++];
    const parent = toggleBall.parentElement;

    console.log(parent.offsetWidth)

    if (currentIndex > themes.length) {
        currentIndex = 1;
    }

    toggleBall.style.left = `${currentIndex * (parent.offsetWidth / 3)}% `;



})

