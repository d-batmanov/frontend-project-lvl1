import getRandomNumber from '../utils/getRandomNumber.js';
import init from '../core/index.js';

const taskText = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  let x = Math.abs(a);
  let y = Math.abs(b);

  while (y) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

const getGameData = () => {
  const a = getRandomNumber(1, 20);
  const b = getRandomNumber(1, 20);

  return {
    question: `${a} ${b}`,
    rightAnswer: `${getGCD(a, b)}`,
  };
};

export default () => init(taskText, getGameData);
