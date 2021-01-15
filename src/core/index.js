import readlineSync from 'readline-sync';
import print from './helpers/print.js';

const LIMIT_QUESTIONS = 3;

const init = (taskText, getGameData) => {
  print('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  print(`Hello ${userName}`);

  print(taskText);

  for (let i = 1; i <= LIMIT_QUESTIONS; i += 1) {
    const { question, rightAnswer } = getGameData();

    print(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const answerIsCorrect = userAnswer === rightAnswer;

    if (answerIsCorrect) {
      print('Correct!');
    } else {
      print(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". \n Let's try again, ${userName}`);

      return;
    }
  }

  print(`Congratulations, ${userName}!`);
};

export default init;
