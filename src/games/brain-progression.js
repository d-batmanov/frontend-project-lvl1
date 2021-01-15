import getRandomNumber from '../utils/getRandomNumber.js';
import init from '../core/index.js';

const taskText = 'What number is missing in the progression?';

const getProgression = (startNum, step, length) => {
  const iter = (num, progression, idx) => {
    if (length === idx) {
      return progression;
    }

    return iter(num + step, [...progression, num], idx + 1);
  };

  return iter(startNum, [], 0);
};

const replaceItem = (arr, idx = 0, replacer = '') => {
  const newArr = [...arr];

  newArr[idx] = replacer;

  return newArr;
};

const getGameData = () => {
  const startNum = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 20);

  const progression = getProgression(startNum, step, 10);
  const idxHiddenNum = getRandomNumber(0, progression[progression.length - 1]);
  const progressionWithHiddenNum = replaceItem(progression, idxHiddenNum, '..').join(' ');

  return {
    question: progressionWithHiddenNum,
    rightAnswer: `${progression[idxHiddenNum]}`,
  };
};

export default () => init(taskText, getGameData);
