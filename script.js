const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which language is used to style web pages?",
        options: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],
        answer: 1
    },

    {
        question: "Which language is mainly used to add interactivity to websites?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    },

    {
        question: "Which tag is used to create a paragraph in HTML?",
        options: [
            "<p>",
            "<h1>",
            "<br>",
            "<div>"
        ],
        answer: 0
    },

    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "<!-- -->",
            "//",
            "#",
            "**"
        ],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {

    answered = false;

    const question = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    document.getElementById("question").textContent =
        question.question;

    const optionsContainer = document.getElementById("options");

    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent = option;
        button.className = "option";

        button.onclick = function () {
            selectAnswer(index, button);
        };

        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex, selectedButton) {

    if (answered) return;

    answered = true;

    const correctIndex = questions[currentQuestion].answer;

    const buttons = document.querySelectorAll(".option");

    buttons[correctIndex].classList.add("correct");

    if (selectedIndex === correctIndex) {

        score++;

        document.getElementById("score").textContent = score;

    } else {

        selectedButton.classList.add("wrong");
    }
}

function nextQuestion() {

    if (!answered) {
        alert("Please select an answer first!");
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        document.getElementById("question").style.display = "none";
        document.getElementById("options").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
        document.querySelector(".quiz-info").style.display = "none";

        document.getElementById("result").classList.remove("hidden");

        document.getElementById("final-score").textContent =
            score + " / " + questions.length;
    }
}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("score").textContent = score;

    document.getElementById("question").style.display = "block";
    document.getElementById("options").style.display = "block";
    document.getElementById("next-btn").style.display = "block";
    document.querySelector(".quiz-info").style.display = "flex";

    document.getElementById("result").classList.add("hidden");

    loadQuestion();
}

loadQuestion();