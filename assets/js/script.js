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
                runTest("treble");
            }
        })
    }
    runTest("treble");
})

function runTest(testType){
    try {
        displayQuestion(testType);
    }
    catch {
        alert(`Unknown test type: ${testType}`);
        throw `Unknown test type: ${testType}.`
    }
}

function checkAnswer(usersNote, testType){
    let correctAnswer = document.getElementById("question").getAttribute("data-note");
    if(usersNote === correctAnswer){
        incrementScore();
        alert("Good Job!")
    }
    else{
        alert(`Stop this silliness, the answer is ${correctAnswer} and you answered ${usersNote}? `);
        runTest(testType);
    }
}

function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function displayQuestion(testType){
    let question = document.getElementById('question');
    let images = [];

    if (testType === "treble"){

    }
    else if (testType === "bass"){

    }
    else if (testType === "both"){

    }
    else {
        alert(`Unknown test type: ${testType}`);
        throw `Unknown test type: ${testType}.`
    }
}