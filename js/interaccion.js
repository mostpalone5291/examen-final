//Creamos las preguntas junto con sus respectivas respuestas correctas
const triviaData = [
    {
      question: "¿Cuál es el dios principal de la mitología nórdica?",
      options: ["Odin", "Thor", "Loki", "Frigg"],
      answer: 0
    },
    {
      question: "¿Cuál es el martillo mágico de Thor?",
      options: ["Mjolnir", "Gungnir", "Fenrisulfr", "Yggdrasil"],
      answer: 0
    },
    {
      question: "¿Cómo se llama la serpiente gigante que rodea el mundo en la mitología nórdica?",
      options: ["Fenrir", "Jormungandr", "Sleipnir", "Nidhogg"],
      answer: 1
    },
    {
      question: "¿Cuál es el nombre de la diosa del amor y la belleza en la mitología nórdica?",
      options: ["Freya", "Baldur", "Tyr", "Balder"],
      answer: 0
    },
    {
        question: "¿Cuál es el nombre de la diosa del amor y la belleza en la mitología nórdica?",
        options: ["Freya", "Baldur", "Tyr", "Balder"],
        answer: 0
      },
      {
        question: "¿Cuál es el lobo gigante hijo de Loki en la mitología nórdica?",
        options: ["Fenrir", "Jormungandr", "Sleipnir", "Nidhogg"],
        answer: 0
      },
      {
        question: "¿Cuál es el nombre de la espada mágica de Odin en la mitología nórdica?",
        options: ["Mjolnir", "Gungnir", "Fenrisulfr", "Yggdrasil"],
        answer: 1
      },
      {
        question: "¿Cómo se llama el caballo de ocho patas de Odin en la mitología nórdica?",
        options: ["Fenrir", "Jormungandr", "Sleipnir", "Nidhogg"],
        answer: 2
      },
      {
        question: "¿Quién es el gigante primordial del hielo en la mitología nórdica?",
        options: ["Fenrir", "Jormungandr", "Sleipnir", "Ymir"],
        answer: 3
      },
      {
        question: "¿Cuál es el nombre del gigante de fuego que desatará el Ragnarok en la mitología nórdica?",
        options: ["Fenrir", "Jormungandr", "Surtur", "Nidhogg"],
        answer: 2
      }
];
  
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart");
  
let currentQuestionIndex = 0;
let score = 0;

//Función para mostrar la pregunta y opciones correspondientes
function displayQuestion() {
    const currentQuestion = triviaData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(index));
      optionsElement.appendChild(button);
    });
}

//Función para verificar la respuesta seleccionada por el usuario
function checkAnswer(selectedIndex) {
    const currentQuestion = triviaData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
      score++;
      resultElement.textContent = "¡Respuesta correcta!";
    } else {
      resultElement.textContent = "Respuesta incorrecta.";
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < triviaData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
}

//Función para mostrar el resultado final de la trivia
function displayResult() {
    questionElement.textContent = `Tu puntuación final es: ${score}/${triviaData.length}`;
    optionsElement.innerHTML = "";
    resultElement.textContent = "";
    submitButton.style.display = "none";
    restartButton.style.display = "block";
}

//Función para reiniciar la trivia una vez que se haya completado
function restartTrivia() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
    restartButton.style.display = "none";
    submitButton.style.display = "block";
}
//Agregar evento de clic al botón de reinicio
restartButton.addEventListener("click", restartTrivia);

//Mostrar la primera pregunta al cargar la página
displayQuestion();