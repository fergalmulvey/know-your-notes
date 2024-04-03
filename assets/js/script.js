document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click",function(){
            if (this.getAttribute("data-type") === "submit"){
                let note = this.getAttribute("id");
                checkAnswer(note);
            }
            else if(this.getAttribute("data-type") === "selector"){
                let testType = this.getAttribute("id");
                displayQuestion(testType);
            }
            else{
                location.reload();
            }
        })
    }
    displayQuestion("treble");
})



function checkAnswer(usersNote){
    let correctAnswer = document.getElementById("question").getAttribute("src")[14];
    let answerBtn = document.getElementById(usersNote);
    let correctBtn = document.getElementById(correctAnswer);
    
    if(usersNote === correctAnswer){
        incrementCorrect();
        answerBtn.style.backgroundColor = "lime"
    }
    else{
        incrementIncorrect();
        answerBtn.style.backgroundColor = "red";
        correctBtn.style.backgroundColor = "lime";
    };
    let testType = document.getElementById("question").getAttribute("data-clef");
    displayQuestion(testType);
}

function incrementCorrect(){
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
}

function incrementIncorrect(){
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayQuestion(testType){
    let selectors = [document.getElementById("treble"), document.getElementById("bass"), document.getElementById("both")];
    let answerBtns = document.getElementsByClassName("answer-btn");

    setTimeout(function() {
        for(let btn of answerBtns){
            btn.style.backgroundColor = null;
        }},750);
    

    for(let selector of selectors){
        selector.style.backgroundColor = null;
    }

    let question = document.getElementById('question');

    let images = ["e1.png", "f1.png", "g1.png", "a1.png", "b1.png", "c1.png", "d1.png", "e2.png", "f2.png", "g2.png", "a2.png", "b2.png", "c2.png",
                 "c3.png", "d2.png", "e3.png", "f3.png", "g3.png", "a3.png", "b3.png", "c4.png", "d3.png", "e4.png", "f4.png", "g4.png", "a4.png", ];

    if (testType === "treble"){
        let i = Math.floor(Math.random() * 13 + 13);
        question.setAttribute("src", "assets/images/" + images[i]);
        question.setAttribute("data-clef", "treble");
        selectors[0].style.backgroundColor = "rgb(0,213,209)";

    }
    else if (testType === "bass"){
        let i = Math.floor(Math.random() * 13);
        question.setAttribute("src", "assets/images/" + images[i]);
        question.setAttribute("data-clef", "bass");
        selectors[1].style.backgroundColor = "rgb(0,213,209)";
    }
    else if (testType === "both"){
        let i = Math.floor(Math.random() * 26);
        question.setAttribute("src", "assets/images/" + images[i]);
        question.setAttribute("data-clef", "both");
        selectors[2].style.backgroundColor = "rgb(0,213,209)";
    }
    else {
        alert(`Unknown test type: ${testType}`);
        throw `Unknown test type: ${testType}.`
    }
}