const numberButtons = document.querySelectorAll('.num');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
let result = document.querySelector('#result');
let firstNumber = '';
let secondNumber = 0;

result.innerText = '0';
let displayValue = '';
let storedNumbers = [0, 0];
let chosenOperation = '';

numberButtons.forEach(number =>
  number.addEventListener('click', () => {
    result.innerText === '';
    displayValue += number.innerText;
    result.innerText = displayValue;
  })
);

operationButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (displayValue !== '') {
      storedNumbers[0] = displayValue;
    }
    if (btn.innerHTML === '-' && result.innerHTML === '0') {
      displayValue = '-';
      result.innerHTML = '-';
    } else {
      result.innerHTML = '-';
      displayValue = '';
    }
    if (btn.innerHTML === '+') {
      firstNumber = storedNumbers[0];
      chosenOperation = '+';
      console.log(firstNumber);
      displayValue = '';
      result.innerHTML = '+';
    }
  });
});

equalsButton.addEventListener('click', () => {
  storedNumbers[1] = displayValue;
  secondNumber = storedNumbers[1];
  if (storedNumbers[1] !== '' && !isNaN(storedNumbers[0])) {
    operate(chosenOperation, firstNumber, secondNumber);
    storedNumbers = [];
    console.log(storedNumbers);
  } else return;
});

const add = (num1, num2) => {
  console.log('hello');
  let finalResult = parseInt(num1) + parseInt(num2);
  result.innerHTML = finalResult;
  displayValue = '';
};

const subtract = (num1, num2) => {};

const multiply = (num1, num2) => {};

const divide = (num1, num2) => {};

const operate = (operator, num1, num2) => {
  if (operator === '+') {
    add(num1, num2);
  }
};
