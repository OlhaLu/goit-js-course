'use strics';
import { quizData } from './quiz-data.js';

// добавляю основной заголовок тестам
const mainTitle = document.querySelector('.mainTitle');
mainTitle.textContent = quizData.title;

// класс для сборки вопросов и вариантов ответа из массива
class QuizMapper {
  constructor(questions = []) {
    this._questions = questions;

    this.renderQuestionsToPage = function() {
      let fullRenderedArray = [];

      for (let i = 0; i < questions.length; i++) {
        fullRenderedArray.push(
          this.createSectionAndSetData(questions[i], i + 1),
        );
      }

      const renderedQuestions = fullRenderedArray.join('');
      document
        .querySelector('form')
        .insertAdjacentHTML('afterbegin', renderedQuestions);
    };

    this.createSectionAndSetData = function({ question, choices }, counter) {
      return `
        <section>
            <h3>${counter}. ${question}</h3>
            <ol>${this.createLiAndSetData(choices, counter)}</ol>
        </section>
        `;
    };

    this.createLiAndSetData = function(choices, mainQuestionCounter) {
      let anwsersList = [];

      for (let i = 0; i < choices.length; i++) {
        const liElement = `
        <li>
            <label>
              <input type="radio" name="${mainQuestionCounter -
                1}" value="${i}" />
              ${choices[i]}
            </label>
        </li>`;

        anwsersList.push(liElement);
      }

      return anwsersList.join('');
    };
  }
}

const newQuizMapper = new QuizMapper(quizData.questions);
newQuizMapper.renderQuestionsToPage();

// обработка данных после отправки ответов
const submitedForm = document.querySelector('.js-submit-form');
submitedForm.addEventListener('submit', submitEvent);
// const button = document.querySelector('.button');
// button.disabled = true;

function renderResultMessage(message) {
  const messText = `<p>${message}</p>`;

  document.querySelector('form').insertAdjacentHTML('afterEnd', messText);
}

function submitEvent(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  let questions = quizData.questions;
  let correctAnswersCounter = 0;

  formData.forEach((value, name) => {
    if (Number(value) === questions[Number(name)].answer) {
      correctAnswersCounter++;
    }
  });

  let percent = Math.floor((correctAnswersCounter / questions.length) * 100);
  if (percent >= 80) {
    renderResultMessage(`Вы прошли тест и набрали ${percent} %. Поздравляем!`);
  } else {
    renderResultMessage(
      `Не достаточно правильных ответов для прохождения теста, вы набрали ${percent} %. Попробуйте еще`,
    );
  }
}
