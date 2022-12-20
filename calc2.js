let currentVal = "";
let operator = "";
let prevVal = "";

document.addEventListener("DOMContentLoaded", function() {
    //Store HTML we want to access here
    let clear = document.querySelector("#clearbtn");
    let equal = document.querySelector("#equalSign");
    let numbers = document.querySelectorAll(".number")
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentVal;
    }))
    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent);
        previousScreen.textContent = prevVal + " " + operator;
        currentScreen.textContent = currentVal;
    }))

    clear.addEventListener("click", function(){
        prevVal = "";
        currentVal = "";
        operator = "";
        previousScreen.textContent = currentVal;
        currentScreen.textContent = currentVal;
    })
    equal.addEventListener("click", function(){
        calculate();
        previousScreen.textContent = "";
        currentScreen.textContent = prevVal;
    })
})



function handleNumber(num){
    
    if(currentVal.length <= 5){
        currentVal += num;
    }
}

function handleOperator(op){
    operator = op;
    prevVal = currentVal;
    currentVal = "";
}

function calculate(){
    prevVal = Number(prevVal);
    currentVal = Number(currentVal);

    if(operator == "+"){
        prevVal += currentVal;
    } else if(operator == "-"){
        prevVal -= currentVal;
    } else if(operator == "x"){
        prevVal *= currentVal;
    } else {
        prevVal /= currentVal;
    } 
    prevVal = roundNum(prevVal)
    prevVal = prevVal.toString();
    currentVal = prevVal.toString();
    
}
function roundNum(num){
    return Math.round(num * 1000) / 1000;
}

