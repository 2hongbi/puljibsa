const main = document.querySelector("#main")
const qna = document.querySelector("#qna")

function addAnswer(answerText){
  var a = document.querySelector('.answerBox')
  var answer = document.createElement('button')
  a.appendChild(answer);
  answer.innerHTML = answerText;
}

function goNext(qIdx){
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer);
  }
}

function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
