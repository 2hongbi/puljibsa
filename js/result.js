"use strict";

const result = [
  {
    symptomAnalysis: '첫번째 결과 페이지 입니다. 증상 분석 입니다.',
    solution: '첫번째 결과 페이지 입니다. 해결 입니다.',
    precaution: '첫번째 결과 페이지 입니다. 예방책 입니다.',
    moreInfo: '첫번째 결과 페이지 입니다. 추가 정보 입니다.'
  },
  {
    symptomAnalysis: '두번째 결과 페이지 입니다. 증상 분석 입니다.',
    solution: '두번째 결과 페이지 입니다. 해결 입니다.',
    precaution: '두번째 결과 페이지 입니다. 예방책 입니다.',
    moreInfo: '두번째 결과 페이지 입니다. 추가 정보 입니다.'
  },
  {
    symptomAnalysis: '세번째 결과 페이지 입니다. 증상 분석 입니다.',
    solution: '세번째 결과 페이지 입니다. 해결 입니다.',
    precaution: '세번째 결과 페이지 입니다. 예방책 입니다.',
    moreInfo: '세번째 결과 페이지 입니다. 추가 정보 입니다.'
  },
];

document.addEventListener('DOMContentLoaded', function() {
    printResult('고무나무', '과습', 0);
}, false);

function printResult(plantType, plantSym,resultNum){
  var tags = document.getElementById('hashtags');
  var sym = document.getElementById('symptomAnalysis');
  var sol = document.getElementById('solution');
  var pre = document.getElementById('precaution');
  var more = document.getElementById('moreInfo');
  tags.innerHTML = '#' + plantType + ' #' + plantSym;
  sym.innerHTML = result[resultNum].symptomAnalysis;
  sol.innerHTML = result[resultNum].solution;
  pre.innerHTML = result[resultNum].precaution;
  more.innerHTML = result[resultNum].moreInfo;
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

function getValue(){
 
  console.log( $(":input:checkbox[name=state]:checked").val() );

  $("input[name=state]:checked").each(function() { 
      console.log($(this).val() );
  });

} }*/