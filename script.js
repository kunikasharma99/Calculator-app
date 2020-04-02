let prevNumber = '';
let calcOperator = '';
let currNumber = '0';

//--01----------CALC SCREEN & UPDATE-------------------
const calcScreen = document.querySelector(".calc-screen");

const updateScreen = (number) => {
    calcScreen.value = number;
}


//--02----------OPERATORS EVENTS-------------------
const operators = document.querySelectorAll(".operator");

operators.forEach( (operator) => {
    operator.addEventListener("click", (e) => {
        inputOperator(e.target.value);
    });
    
});

const inputOperator = (operator) => {
    if (calcOperator === '') {
        prevNumber = currNumber;
    };
    
    calcOperator = operator;
    currNumber = '';
}

//--03----------NUMBER EVENTS-------------------
const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        inputNumber(e.target.value); //value is assigned first input first
        updateScreen(currNumber); //push new number to screen
    }); 
});

const inputNumber = (number) => {
    if (currNumber === '0') {
        currNumber = number
    } else {
        currNumber += number //string concentation because 'currNumber' stored as a string
    }
}

//--04----------CALCULATION-------------------
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currNumber);
});

const calculate = () => {
    let result ='';
    switch(calcOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currNumber);
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currNumber);
            break
        case "*":
            result = prevNumber * currNumber;
            break
        case "/":
            result = prevNumber / currNumber;
            break
        default:
            break
    }
    currNumber = result;
    calcOperator = '';

}

//--05----------AC BUTTON-------------------
const ac = document.querySelector(".ac");

const clear = () => {
    prevNumber = '';
    calcOperator = '';
    currNumber = '';
}

ac.addEventListener('click', () => {
    clear();
    updateScreen(currNumber);
});

//--06----------DECIMALS-------------------
const decimal = document.querySelector(".decimal");

decimal.addEventListener('click', (e) => {
    inputDecimal(e.target.value);
});

inputDecimal = (dot) => {
    if(currNumber.includes(".")) {
        return
    } 
    currNumber += dot
}

//--07----------PERCENTAGE-------------------
const percent = document.querySelector(".percentage");

ac.addEventListener('click', () => {
    currNumber = '0';
    updateScreen(currNumber);
});

