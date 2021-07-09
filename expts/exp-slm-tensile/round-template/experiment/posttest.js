
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
      question: "Ultimate tensile strength of SLM 3D printed specimen ________ with increase in layer height.",
      answers: {
        a: "Decreases",
        b: "Increases",
        c: "Stays the same",
        d: "Increases upto a certain value and then decreases"
      },
      correctAnswer: "a"
    },

    {
      question: "Ultimate tensile strength for specimen built at less scanning speed is ________ the strength of specimen built at more scanning speed.",
      answers: {
        a: "Less than",
        b: "More than",
        c: "Same as",
        d: "Cannot be compared"
      },
      correctAnswer: "b"
    },

    {
      question: "The combination that will give the least value of ultimate tensile strength among the following is ______",
      answers: {
        a: " More layer height, less laser power, more scanning speed, 90° build orientation",
        b: "More layer height, more laser power, less scanning speed, 45° build orientation",
        c: "Less layer height, more laser power, more scanning speed, 0° build orientation"
      },
      correctAnswer: "a"
    },
    {
      question: "The combination that will give the most value of ultimate tensile strength among the following is ______",
      answers: {
        a: "More layer height, less laser power, more scanning speed, 45° build orientation",
        b: "More layer height, more laser power, less scanning speed, 90° build orientation",
        c: "Less layer height, more laser power, less scanning speed, 0° build orientation",
        d: "Less layer height, less laser power, more scanning speed, 0° build orientation"
      },
      correctAnswer: "c"
    },
    {
      question: "UTS is less for specimen built at 90° build orientation becuase ______",
      answers: {
        a: "Load acts in parallel direction to fibers.",
        b: "Load acts in perpendicular direction to fibers.",
        c: "Load acts at an angle of 45° with respect to fibers.",
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
