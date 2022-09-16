const add = (num1, num2) => {
  if (num1 !== NaN && num2 !== NaN) {
    return num1 + num2;
  }
  return 'Naaa!';
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const operate = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      console.log(add(num1, num2));
      break;
    case '-':
      console.log(subtract(num1, num2));
      break;
    case '/':
      console.log(divide(num1, num2));
      break;
    case '*':
      console.log(multiply(num1, num2));
      break;
    default:
      console.log('Sorry, there is something wrong with your statement.');
  }
};
