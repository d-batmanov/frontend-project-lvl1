import getRandomNumber from '../utils/getRandomNumber.js';
import init from '../core/index.js';

const taskText = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = ({ a, b, operator }) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const getGameData = () => {
  const a = getRandomNumber(1, 20);
  const b = getRandomNumber(1, 20);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  return {
    question: `${a} ${operator} ${b}`,
    rightAnswer: `${calculate({ a, b, operator })}`,
  };
};

export default () => init(taskText, getGameData);
