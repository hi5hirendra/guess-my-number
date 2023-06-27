"use strict";
let secretNumber = Math.floor(Math.random() * 19 + 1);
let score = 20;
let highScore = 0;
let message = function (outputMsg, score, highScore) {
    document.querySelector("#msg").textContent = outputMsg;
    document.querySelector("#score").textContent = `Score: ${score}`;
    document.querySelector("#high-score").textContent = `High Score: ${highScore}`;
};
document.querySelector("#checkNumber").addEventListener("click", function () {
    let guessedNumber = Number(document.querySelector("#guessedNumber").value);
    if (guessedNumber) {
        if (guessedNumber === secretNumber) {
            document.querySelector("#secret-number").textContent = secretNumber;
            highScore = score > highScore ? score : highScore;
            message("You Win!", score, highScore);
            document.body.style.backgroundColor = "green";
            document.querySelector("input").style.backgroundColor = "green";
        } else {
            score--;
            message(
                guessedNumber > secretNumber ? "Too High!" : "Too Low!",
                score,
                highScore
            );
            // console.log(secretNumber, guessedNumber);
        }
    } else message("No Number!");
});

document.querySelector("#reset").addEventListener("click", function () {
    secretNumber = Math.floor(Math.random() * 19 + 1);
    highScore = score > highScore ? score : highScore;
    message("", 20, highScore);
    score = 20;
    document.querySelector("#secret-number").textContent = "?";
    guessedNumber.value = "";
    document.body.style.backgroundColor = "#222";
    document.querySelector("input").style.backgroundColor = "#222";
});
