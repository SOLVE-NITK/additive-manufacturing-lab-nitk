
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
      question: "Print time for a 3D printed specimen ________ with increase in feed rate. ",
      answers: {
        a: "Decreases",
        b: "Increases",
        c: "Stays the same",
        d: "Increases upto a certain value and then decreases"
      },
      correctAnswer: "a"
    },

    {
      question: "More infill density leads to _________ print time.",
      answers: {
        a: "Less",
        b: "More",
        c: "Doesnot affect"
      },
      correctAnswer: "b"
    },

    {
      question: "The combination that will take the least amount of tim to print among the following is ______",
      answers: {
        a: "More layer height,less infill density, more feed rate",
        b: "More layer height,more infill density, more feed rate",
        c: "Less layer height,more infill density, less feed rate",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "The combination that will take the most amount of tim to print among the following is ______",
      answers: {
        a: "More layer height,less infill density, more feed rate",
        b: "More layer height,more infill density, more feed rate",
        c: "Less layer height,more infill density, less feed rate",
        d: "Less layer height,less infill density, less feed rate "
      },
      correctAnswer: "c"
    },
    {
      question: "Print time decreases with increase in layer height because?",
      answers: {
        a: "More number of layers",
        b: "Less number of layers",
        c: "None of these"
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
