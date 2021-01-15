import getRandomNumber from '../utils/getRandomNumber.js';
import isEven from '../utils/isEven.js';
import init from '../core/index.js';

const taskText = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const randomNum = getRandomNumber(1, 20);

  return {
    question: randomNum,
    rightAnswer: isEven(randomNum) ? 'yes' : 'no',
  };
};

export default () => init(taskText, getGameData);
