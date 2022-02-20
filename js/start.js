var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

const main = document.querySelector("#main")
const qna1 = document.querySelector("#qna1")
const qna2 = document.querySelector("#qna2")
const insert_pic = document.querySelector("#insert-pic")
const addition_qna = document.querySelector("#addition-qna")
const result = document.querySelector("#plantResult")
const introduction = document.querySelector("#introduction")

//main & qna1
function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna1.style.WebkitAnimation = "fadeIn 1s";
    qna1.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna1.style.display = "block";
    }, 450)
  }, 450);
}

function qna1Main_pre() {
  qna1.style.WebkitAnimation = "fadeOut 1s";
  qna1.style.animation = "fadeOut 1s";
  setTimeout(() => {
    main.style.WebkitAnimation = "fadeIn 1s";
    main.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna1.style.display = "none";
      main.style.display = "block";
    }, 450)
  }, 450);
}


//1. 풀집사 서비스 소개를 선택했을 때
function MainPage_return() {
  window.location.href = './../web/index.html'
}


// 2. 풀집사 서비스 이용을 선택했을 때, qna1 & qna2
function qna1Qna2_next() {
  const introCheck = document.getElementsByName("qna1_check")[1];
  if(introCheck.checked === true) {
    window.location.href = './../web/introduction.html'
  }else{
    qna1.style.WebkitAnimation = "fadeOut 1s";
    qna1.style.animation = "fadeOut 1s";
    setTimeout(() => {
      qna2.style.WebkitAnimation = "fadeIn 1s";
      qna2.style.animation = "fadeIn 1s";
      setTimeout(() => {
        qna1.style.display = "none";
        qna2.style.display = "block";
      }, 450)
    }, 450);
  }
}

function qna2Qna1_pre() {
  qna2.style.WebkitAnimation = "fadeOut 1s";
  qna2.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna1.style.WebkitAnimation = "fadeIn 1s";
    qna1.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna2.style.display = "none";
      qna1.style.display = "block";
    }, 450)
  }, 450);
}


//qna2 & insert_pic
function qna2Insert_next() {
  qna2.style.WebkitAnimation = "fadeOut 1s";
  qna2.style.animation = "fadeOut 1s";
  setTimeout(() => {
    insert_pic.style.WebkitAnimation = "fadeIn 1s";
    insert_pic.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna2.style.display = "none";
      insert_pic.style.display = "block";
    }, 450)
  }, 450);
}

function insertQna2_pre() {
  insert_pic.style.WebkitAnimation = "fadeOut 1s";
  insert_pic.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna2.style.WebkitAnimation = "fadeIn 1s";
    qna2.style.animation = "fadeIn 1s";
    setTimeout(() => {
      insert_pic.style.display = "none";
      qna2.style.display = "block";
    }, 450)
  }, 450);
}


//insert_pic & addition_qna
function insertAddqna_next() {
  insert_pic.style.WebkitAnimation = "fadeOut 1s";
  insert_pic.style.animation = "fadeOut 1s";
  setTimeout(() => {
    addition_qna.style.WebkitAnimation = "fadeIn 1s";
    addition_qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      insert_pic.style.display = "none";
      addition_qna.style.display = "block";
    }, 450)
  }, 450);
}

function addqnaInsert_pre() {
  addition_qna.style.WebkitAnimation = "fadeOut 1s";
  addition_qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    insert_pic.style.WebkitAnimation = "fadeIn 1s";
    insert_pic.style.animation = "fadeIn 1s";
    setTimeout(() => {
      addition_qna.style.display = "none";
      insert_pic.style.display = "block";
    }, 450)
  }, 450);
}


//addition_qna & result
function addqnaResult_next() {
  addition_qna.style.WebkitAnimation = "fadeOut 1s";
  addition_qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      addition_qna.style.display = "none";
      result.style.display = "block";
    }, 450)
  }, 450);
}

function resultAddqna_pre() {
  result.style.WebkitAnimation = "fadeOut 1s";
  result.style.animation = "fadeOut 1s";
  setTimeout(() => {
    addition_qna.style.WebkitAnimation = "fadeIn 1s";
    addition_qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      result.style.display = "none";
      addition_qna.style.display = "block";
    }, 450)
  }, 450);
}

function addqnaResult_Page() {
  window.location.href = './../web/result.html'
}


// result & introduction
function resultIntro_next() {
  result.style.WebkitAnimation = "fadeOut 1s";
  result.style.animation = "fadeOut 1s";
  setTimeout(() => {
    introduction.style.WebkitAnimation = "fadeIn 1s";
    introduction.style.animation = "fadeIn 1s";
    setTimeout(() => {
      result.style.display = "none";
      introduction.style.display = "block";
    }, 450)
  }, 450);
}

function resultIntro_Page() {
  window.location.href = './../web/introduction.html'
}
