
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
      question: "Surface roughness of 3D printed specimen ________ with increase in cutting speed.",
      answers: {
        a: "Increases",
        b: "Decreases",
        c: "Stays the same",
        d: "Increases upto a certain value and then decreases"
      },
      correctAnswer: "a"
    },

    {
      question: "Cut surface quality for specimen cut at less assist gas pressure is ________ the quality of specimen cut at more assist gas pressure.",
      answers: {
        a: "More than",
        b: "Less than",
        c: "Same as",
        d: "Cannot be compared"
      },
      correctAnswer: "b"
    },

    {
      question: "The factor which affect the surface roughness the most among the three is",
      answers: {
        a: "Laser power",
        b: "Assist gas pressure",
        c: "Cutting speed",
        d: "All of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "The combination that will give the smoothest cut surface among the following is ______ ",
      answers: {
        a: "More laser power, less assist gas pressure, more cutting speed",
        b: "More laser power, more assist gas pressure, less cutting speed",
        c: "Less laser power, more assist gas pressure, less cutting speed",
        d: "Less laser power, less assist gas pressure, more cutting speed"
      },
      correctAnswer: "b"
    },
    {
      question: "Cut surface quality increases with increase in laser power because?",
      answers: {
        a: "Less heat available for cutting",
        b: "More heat available for cutting",
        c: "Formation of dross",
        d: "None of these"
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
