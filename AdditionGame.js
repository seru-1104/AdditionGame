let firstInput = document.getElementById("firstNumber");
let secondInput = document.getElementById("secondNumber");
let userInput = document.getElementById("userInput");
let result = document.getElementById("gameResult");

function checking() {
    let outputNumber = parseInt(userInput.value);
    let firstRandom = parseInt(firstInput.textContent);
    let secondRandom = parseInt(secondInput.textContent);
    if ((firstRandom + secondRandom) === outputNumber) {
        result.textContent = "Congratulations! You got it right.";
        result.style.backgroundColor = "#028a0f";
    } else {
        result.textContent = "Please Try Again.";
        result.style.backgroundColor = "#1e217c";
    }
}


function restarting() {

    let randomInput1 = Math.ceil(Math.random() * 100);
    let randomInput2 = Math.ceil(Math.random() * 100);
    firstInput.textContent = randomInput1;
    secondInput.textContent = randomInput2;
    result.textContent = "";
    userInput.value = "";
}

restarting();