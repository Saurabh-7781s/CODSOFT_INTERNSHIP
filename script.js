function gradeQuiz(){
const questions=document.querySelectorAll(".question");
let score=0,answered=0;
questions.forEach(q=>{
const selected=q.querySelector("input:checked");
if(selected){answered++;if(selected.value===q.dataset.answer)score++;}
});
const result=document.getElementById("quizResult");
if(answered<questions.length){result.textContent="Please answer all questions before submitting.";return;}
result.textContent=`Your score: ${score}/${questions.length}. ${
score===questions.length ? "Excellent — you identified the key phishing indicators." : "Review the awareness sections and try again."
}`;
}
