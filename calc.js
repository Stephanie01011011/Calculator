//variables
var one = document.getElementById("one");
var numbersText = document.getElementById("numbersText");
var num = [];


//operator functions
function add(num1, num2){
    return addition = num1 + num2;
}
function subtract(num1, num2){
    return subtraction = num1 - num2;
}
function multiply(num1, num2){
    return multiplication = num1 * num2;
}
function divide(num1, num2){
    return dividing = num1 / num2;
}

//Takes an operator and two numbers, like add, 5, 2, and will return that function (7)
function operate(operator, num1, num2){
    console.log(operator(num1, num2));

}
//function to display number on the screen, used in events

function displayNumber(number){
    num.push(number);
    console.log(num);
    numbersText.innerHTML += number;
    return num;
    
}

//function to clear calculator screen
function clearScreen(){
    numbersText.innerHTML = "";
}



