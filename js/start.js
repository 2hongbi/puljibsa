const main = document.querySelector("#main")
const qna = document.querySelector("#qna1")
// const qna = document.querySelector("#qna")

function convertStr(str){
  return str.replace(new RegExp("\\n", "g"), "<br />");
}

function addAnswer(answerText, answerType){
  var a = document.querySelector('.answerBox')
  // var answer = document.createElement('button')
  // a.appendChild(answer);
  // answer.innerHTML = answerText;
  a.innerHTML += ('<input type="checkbox" name="check" value="'+answerType+'">' + answerText + '<br />');
}


function goNext(qIdx) {
  var q = document.querySelector('.qBox');
  if(qnaList[qIdx].qImg) {
    var qImg = document.querySelector('#qImgBox');
    qImg.innerHTML += ('<img src="' + qnaList[qIdx].qImg + '" alt="expert" class="img-fluid"><br/>')
  }
  q.innerHTML = convertStr(qnaList[qIdx].q);
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qnaList[qIdx].a[i].type);
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
    // let qIdx = 0;
    // goNext(qIdx);
  }, 450);
}