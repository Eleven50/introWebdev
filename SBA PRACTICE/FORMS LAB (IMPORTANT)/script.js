const answers = {
    Q1: "Paris",
    Q2: "Jupiter",
    Q3: "Option A"
};

document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
    let score = 0;
    for (let question in answers) {
        const userAnswer = document.getElementById(question).value.trim();
        if (userAnswer.toLowerCase() === answers[question].toLowerCase()) {
            score++;
        }
    }
    document.getElementById("results").textContent = `Your score: ${score} out of ${Object.keys(answers).length}`;
});

