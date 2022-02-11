/*function get_checked(){
    var found = null;
    var check_state = document.getElementsByName("state");

    for(var i =0; i<check_state.length; i++) {
        if(check_state[i].checked){
            found = check_state[i];
        }
    }
    if (found != null) {
    } else {
    alert("답변을 선택해주세요.");
    return false;
  }
}*/

function checkOnlyOne(element) {
    const qna1_checkboxes
        = document.getElementsByName("qna1_check");

    qna1_checkboxes.forEach((cb) => {
        cb.checked = false;
    })

    element.checked = true;


    const qna2_checkboxes
        = document.getElementsByName("state");

    qna2_checkboxes.forEach((cb) => {
        cb.checked = false;
    })

    element.checked = true;


    const addition_qna1_checkboxes
        = document.getElementsByName("addition_qna1");

    addition_qna1_checkboxes.forEach((cb) => {
        cb.checked = false;
    })

    element.checked = true;
}


function each_check() {
    $("input[name=qna1_check]:checked").each(function () {
        var test = $(this).val();
        console.log("체크된 값 : " + test);
    });

    $("input[name=state]:checked").each(function () {
        var test = $(this).val();
        console.log("체크된 값 : " + test);
    });

    $("input[name=addition_qna1]:checked").each(function () {
        var test = $(this).val();
        console.log("체크된 값 : " + test);
    });
}


function total(){
    var arTest = [];
    $("input[name=state]:checked").each(function () {
        arTest.push($(this).val());
    });
    console.log("체크된 값 total : " + arTest);
}


