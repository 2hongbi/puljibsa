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
    answer0 : '"잎이 타서 말랐어요."',
    answer1 : '"흙 상태를 보고 매번 달라요."',
    answer2 : '"화분 안에 흙이 다 젖을 정도로 줘요."',
    answer3 : '"햇빛을 직접적으로 받는 곳이요."',
    info_of_answer0 : '잎 끝이 타는 경우는 햇빛을 직접적으로 받아서 그럴 수 있어요. <br>' +
        '                실내 공간에서 식물을 키울 경우에는 드문 일이지만 창문이나 방충망 없이 식물이 직사광선을 받을 경우 잎이 탈 수 있습니다.<br>' +
        '                특히 햇빛이 강한 여름에 조심해야 해요.<br>' +
        '                식물에게 햇빛은 정말 중요해요. 햇빛을 잘 받을 수 있는 장소에 둬야 식물이 햇빛을 먹고 무럭무럭 잘 성장할 수 있으니까요!<br>' +
        '                그러나 햇빛을 너무 직접적으로 많은 양을 받으면 어느 식물이든 잎이 타버릴 수 있어요. 햇빛이 충분하되, 직접적으로 햇살을 받지는 않도록 방충망, 얇은 커튼, 1~2겹의 유리창 등을 이용하시길 권장 드립니다.',
    info_of_answer1 : '너무 잘하고 있어요! 식물에 물을 주는 주기는 정확한 공식이 없기 때문에 날씨, 습도, 온도, 계절, 식물 상태 등에 따라 매번 조절하며 줘야 해요. <br>' +
        '다만 몬스테라는 여름에 물이 빨리 마르니 흙을 자주 확인해야 합니다. 봄,여름,가을 은 흙을 촉촉하게 유지하되, 물에 잠기지 않도록 주의해주시고 겨울은 토양 표면이 말랐을 때 충분히 물을 주시면 됩니다.',
    info_of_answer2 : '잘하고 있어요! 겉흙이 마르면 화분 밑 배수 구멍으로 물이 빠져나올 때까지 듬뿍 주셔야 합니다. 다만 과습 위험이 있어서 흙이 충분히 말랐는 지 확인하는 게 중요해요! <br>' +
        '흙에 손가락을 넣었을 때 손가락 한마디 정도까지 겉 흙이 말랐을 때 듬뿍 주시면 됩니다~! 샤워기나 분무기로 잎 전체를 적셔가며 주시면 잎에 내려앉은 먼지도 씻겨지고 공중습도도 높일 수 있어요.여름에는 젖은 천으로 잎을 닦아주는 것도 좋습니다.',
    info_of_answer3 : '너무 잘하고 있어요! 식물에 물을 주는 주기는 정확한 공식이 없기 때문에 날씨, 습도, 온도, 계절, 식물 상태 등에 따라 매번 조절하며 줘야 해요. <br>' +
        '다만 몬스테라는 여름에 물이 빨리 마르니 흙을 자주 확인해야 합니다. 봄,여름,가을 은 흙을 촉촉하게 유지하되, 물에 잠기지 않도록 주의해주시고 겨울은 토양 표면이 말랐을 때 충분히 물을 주시면 됩니다.'
  }
];

document.addEventListener('DOMContentLoaded', function() {
    printResult('몬스테라', '건조', 0);
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