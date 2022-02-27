"use strict";

// const result = [
//   {
//     symptomAnalysis: '첫번째 결과 페이지 입니다. 증상 분석 입니다.',
//     solution: '첫번째 결과 페이지 입니다. 해결 입니다.',
//     precaution: '첫번째 결과 페이지 입니다. 예방책 입니다.',
//     moreInfo: '첫번째 결과 페이지 입니다. 추가 정보 입니다.'
//   },
//   {
//     symptomAnalysis: '두번째 결과 페이지 입니다. 증상 분석 입니다.',
//     solution: '두번째 결과 페이지 입니다. 해결 입니다.',
//     precaution: '두번째 결과 페이지 입니다. 예방책 입니다.',
//     moreInfo: '두번째 결과 페이지 입니다. 추가 정보 입니다.'
//   },
//   {
//     symptomAnalysis: '세번째 결과 페이지 입니다. 증상 분석 입니다.',
//     solution: '세번째 결과 페이지 입니다. 해결 입니다.',
//     precaution: '세번째 결과 페이지 입니다. 예방책 입니다.',
//     moreInfo: '세번째 결과 페이지 입니다. 추가 정보 입니다.'
//   },
// ];

const result = [
  {
    answer0 : '0번째 질문에 사용자가 선택한 답1',
    answer1 : '1번째 질문에 사용자가 선택한 답1',
    answer2 : '2번째 질문에 사용자가 선택한 답1',
    answer3 : '3번째 질문에 사용자가 선택한 답1',
    info_of_answer0 : '0번째 질문에 사용자가 선택한 답에 대한 설명1',
    info_of_answer1 : '1번째 질문에 사용자가 선택한 답에 대한 설명1',
    info_of_answer2 : '2번째 질문에 사용자가 선택한 답에 대한 설명1',
    info_of_answer3 : '3번째 질문에 사용자가 선택한 답에 대한 설명1'
  },
  {
    answer0 : '0번째 질문에 사용자가 선택한 답2',
    answer1 : '1번째 질문에 사용자가 선택한 답2',
    answer2 : '2번째 질문에 사용자가 선택한 답2',
    answer3 : '3번째 질문에 사용자가 선택한 답2',
    info_of_answer0 : '0번째 질문에 사용자가 선택한 답에 대한 설명2',
    info_of_answer1 : '1번째 질문에 사용자가 선택한 답에 대한 설명2',
    info_of_answer2 : '2번째 질문에 사용자가 선택한 답에 대한 설명2',
    info_of_answer3 : '3번째 질문에 사용자가 선택한 답에 대한 설명2'
  },
];

document.addEventListener('DOMContentLoaded', function() {
    printResult('고무나무', '과습', 0);
}, false);

function printResult(plantType, plantSym,resultNum){
  var tags = document.getElementById('hashtags');
  var answer0 = document.getElementById('answer0');
  var answer1 = document.getElementById('answer1');
  var answer2 = document.getElementById('answer2');
  var answer3 = document.getElementById('answer3');
  var info_of_answer0 = document.getElementById('info_of_answer0');
  var info_of_answer1 = document.getElementById('info_of_answer1');
  var info_of_answer2 = document.getElementById('info_of_answer2');
  var info_of_answer3 = document.getElementById('info_of_answer3');
  tags.innerHTML = '#' + plantType + ' #' + plantSym;
  answer0.innerHTML = result[resultNum].answer0;
  answer1.innerHTML = result[resultNum].answer1;
  answer2.innerHTML = result[resultNum].answer2;
  answer3.innerHTML = result[resultNum].answer3;
  info_of_answer0.innerHTML = result[resultNum].info_of_answer0;
  info_of_answer1.innerHTML = result[resultNum].info_of_answer1;
  info_of_answer2.innerHTML = result[resultNum].info_of_answer2;
  info_of_answer3.innerHTML = result[resultNum].info_of_answer3;
}

//체크박스 선택값 불러오기
/*
function stateCheckbox(state) {
  let result = '';
  if(state.target.checked) {
    result = state.target.value;
  }

  document.getElementById('result').innerText
    = result;
}*/

function getValue(){

  console.log( $(":input:checkbox[name=state]:checked").val() );

  $("input[name=state]:checked").each(function() {
      console.log($(this).val() );
  });

}