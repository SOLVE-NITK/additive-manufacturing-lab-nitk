
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
      question: "The purpose of using assist gas is to ",
      answers: {
        a: "Expel molten material without allowing formation of dross",
        b: "Participate in an exothermic reaction with the material",
        c: "Cooling the cut edge",
        d: "All of the above"
      },
      correctAnswer: "d"
    },

    {
      question: "Which among the following is preferred to aid the cutting process by participating in an exothermic reaction? ",
      answers: {
        a: "Oxygen",
        b: "Nitrogen",
        c: "Argon"
      },
      correctAnswer: "a"
    },

    {
      question: "Which surface roughness measure is used in this experiment?",
      answers: {
        a: "R<sub>z</sub>",
        b: "R<sub>a</sub>",
        c: "R<sub>max</sub>"
      },
      correctAnswer: "b"
    },
    {
        question: "Which among the following is a characteristic of laser cutting process?",
        answers: {
          a: "Non-contact process",
          b: "High degree of precision and accuracy",
          c: "Thermal based process",
          d: "All of the above"
        },
        correctAnswer: "c"
      },
    {
        question: "The surface roughness value measured in this experiment is ____",
    answers: {
          a: "Difference between highest peak and lowest valley in measured length.",
          b: "Average difference between peaks and valleys in measured length.",
          c: "Average height of peaks in measured length.",
          d: "Average height of valleys in measured length."
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
