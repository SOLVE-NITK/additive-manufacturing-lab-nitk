
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "The purpose of using lesser layer height values is to ",
      answers: {
        a: "Decrease print time",
        b: "Increase surface roughness",
        c: "Increase adhesion",
        d: "None of the above"
      },
      correctAnswer: "c"
    },

    {
      question: "What kind of specific mirrors are used to point the laser with high accuracy accross the surface of the specimen?",
      answers: {
        a: "Galvanometric mirrors",
        b: "Convex mirrors",
        c: "Concave mirrors"
      },
      correctAnswer: "a"
    },

    {
      question: "Ultimate tensile strength is the ratio of ultimate load at failure to ",
      answers: {
        a: "Deformed cross-section area",
        b: "Original cross-section area"
      },
      correctAnswer: "b"
    },
    {
        question: "The temperature caused by laser power for SLM process of stainless steel should be approximately ____ ",
        answers: {
          a: "More than 1500°C",
          b: "Less than 1500°C",
          c: "No specific limits"
        },
        correctAnswer: "b"
      },
    {
        question: "Ultimate tensile strength is always greater than yield strength.",
    answers: {
          a: "No",
          b: "Yes"
        },
        correctAnswer: "b"
      }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
