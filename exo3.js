document.getElementById("start").addEventListener("click", lancerQuiz);

let questions =[
    {
        question:"c'est quoi le resultet de 5 * 21 ?",
        Options:["105","115","125","135"],
        answer:"105"
    },
    {
        question:"c'est quoi le resultet de 45 / 9 ?",
        Options:["6","11","5","7"],
        answer:"5"
    },
    {        question:"c'est quoi le resultet de 115 + 2201 ?",
        Options:["2316","2300","1225","1352"],
        answer:"2316"
    }

];
function lancerQuiz() {
let score = 0;
for(let i=0;i<questions.length;i++){
    let reponse = prompt(questions[i].question+"\n"+questions[i].Options.join("\n"));
    if(parseInt(reponse)==questions[i].answer){
        score++;
        alert("correct");
    }
    else{
        alert("incorrect");
    }
    
 
}
alert("Vous avez repondu correctement a "+score+" questions sur "+questions.length);
}
