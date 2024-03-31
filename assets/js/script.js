document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click",function(){
            let testType = this.getAttribute("data-type");
            if (this.getAttribute("data-type") === "submit"){
                let note = this.getAttribute("id");
                checkAnswer(note,testType);
            }
            else {
                displayQuestion(testType);
            }
        })
    }
    displayQuestion("treble");
})



function checkAnswer(usersNote, testType){
    let correctAnswer = document.getElementById("question").getAttribute("data-note");
    if(usersNote === correctAnswer){
        incrementScore();
        alert("Good Job!")
    }
    else{
        alert(`Stop this silliness, the answer is ${correctAnswer} and you answered ${usersNote}? `);
        displayQuestion(testType);
    }
}

function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function displayQuestion(testType){
    let question = document.getElementById('question');

    let images = ["e1.png", "f1.png", "g1.png", "a1.png", "b1.png", "c1.png", "d1.png", "e2.png", "f2.png", "g2.png", "a2.png", "b2.png", "c2.png",
                 "c3.png", "d2.png", "e3.png", "f3.png", "g3.png", "a3.png", "b3.png", "c4.png", "d3.png", "e4.png", "f4.png", "g4.png", "a4.png", ];

    if (testType === "treble"){
        let i = Math.floor(Math.random() * 13 + 13);
        question.setAttribute("src", "assets/images/" + images[i]);
    }
    else if (testType === "bass"){
        let i = Math.floor(Math.random() * 13);
        question.setAttribute("src", "assets/images/" + images[i]);
    }
    else if (testType === "both"){
        let i = Math.floor(Math.random() * 26);
        question.setAttribute("src", "assets/images/" + images[i]);
    }
    else {
        alert(`Unknown test type: ${testType}`);
        throw `Unknown test type: ${testType}.`
    }
}