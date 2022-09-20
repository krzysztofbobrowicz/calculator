const calculator = {
  displayValue: '0',
  firstNumber: null,
  waitingForNextNumber: false,
  operator: null,
};

const updateScreen = () => {
  const { displayValue } = calculator;
  document.querySelector('#result').value = displayValue;
};

const insertNum = digit => {
  const { displayValue, waitingForNextNumber } = calculator;
  if (waitingForNextNumber) {
    calculator.displayValue = digit;
    calculator.waitingForNextNumber = false;
  } else {
    calculator.displayValue =
      displayValue === '0' && !isNaN(displayValue)
        ? digit
        : displayValue + digit;
  }
};

const handleOperator = nextOperator => {
  const { waitingForNextNumber, displayValue, firstNumber, operator } =
    calculator;
  if (operator && waitingForNextNumber) {
    return (calculator.operator = nextOperator);
  }
  calculator.waitingForNextNumber = true;
  calculator.firstNumber = displayValue;
  calculator.operator = nextOperator;
  if (operator) {
    const result = calculate(
      parseFloat(firstNumber),
      parseFloat(displayValue),
      operator
    );
    calculator.displayValue = result;
    calculator.firstNumber = result;
  }
};

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '/':
      return firstNumber / secondNumber;
    case '*':
      return firstNumber * secondNumber;
  }
  return firstNumber;
};

const insertDecimal = decimal => {
  !calculator.displayValue.includes(decimal)
    ? (calculator.displayValue += decimal)
    : null;
};

const clearScreen = () => {
  calculator.displayValue = '0';
  calculator.firstNumber = null;
  calculator.waitingForNextNumber = false;
  calculator.operator = null;
};

updateScreen();
document.querySelector('#buttons').addEventListener('click', e => {
  const { target } = e;
  if (target.classList.contains('num')) {
    insertNum(target.value);
    updateScreen();
  }
  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateScreen();
  }
  if (target.classList.contains('dot')) {
    insertDecimal(target.value);
    updateScreen();
  }
  if (target.classList.contains('clear')) {
    clearScreen();
    updateScreen();
  }
  return;
});
