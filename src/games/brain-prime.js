import getRandomNumber from '../utils/getRandomNumber.js';
import init from '../core/index.js';

const taskText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getGameData = () => {
  const randomNum = getRandomNumber(1, 20);

  return {
    question: randomNum,
    rightAnswer: isPrime(randomNum) ? 'yes' : 'no',
  };
};

export default () => init(taskText, getGameData);
