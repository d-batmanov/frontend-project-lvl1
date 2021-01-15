import readlineSync from 'readline-sync';
import isEven from './utils/isEven.js';
import getRandomNumber from './utils/getRandomNumber.js';

const App = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello ${name}`);

  const randomNum = getRandomNumber(1, 1000);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${randomNum}`);

  const answer = readlineSync.prompt({
    limit: ['yes', 'no'],
    limitMessage: '$<lastInput> is not available.',
  });

  console.log(isEven(answer) === isEven(randomNum) ? '"yes" is wrong answer ;(. Correct answer was "no".' : `Let's try again, ${name}!`);
};

export default App;
