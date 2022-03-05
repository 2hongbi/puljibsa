function qna1_get_checked() {
    var found = null;
    var check_qna1 = document.getElementsByName("qna0_check");

    if (check_qna1[1].checked) {
        return resultIntro_Page();
    }

    for (var i = 0; i < check_qna1.length; i++) {
        if (check_qna1[i].checked) {
            found = check_qna1[i];
        }
    }
    if (found != null) {
        return qna1Qna2_next();
    } else {
        alert("답변을 선택해주세요.");
        return false;
    }
}

function state_get_checked() {
    var found = null;
    var check_state = document.getElementsByName("qna1_check");
    for (var i = 0; i < check_state.length; i++) {
        if (check_state[i].checked) {
            found = check_state[i];
        }
    }
    if (found != null) {
        return qna2Insert_next();
    } else {
        alert("답변을 선택해주세요.");
        return false;
    }
}

function addition_qna_get_checked() {
    var found = null;
    var check_addition_qna = document.getElementsByName("qna2_check");
    for (var i = 0; i < check_addition_qna.length; i++) {
        if (check_addition_qna[i].checked) {
            found = check_addition_qna[i];
        }
    }
    if (found != null) {
        return addqna12_next();
    } else {
        alert("답변을 선택해주세요.");
        return false;
    }
}

function addition_qna2_get_checked() {
    var found = null;
    var check_addition_qna2 = document.getElementsByName("qna3_check");
    for (var i = 0; i < check_addition_qna2.length; i++) {
        if (check_addition_qna2[i].checked) {
            found = check_addition_qna2[i];
        }
    }
    if (found != null) {
        return addqna23_next();
        ;
    } else {
        alert("답변을 선택해주세요.");
        return false;
    }
}

function addition_qna3_get_checked() {
    var found = null;
    var check_addition_qna3 = document.getElementsByName("qna4_check");
    for (var i = 0; i < check_addition_qna3.length; i++) {
        if (check_addition_qna3[i].checked) {
            found = check_addition_qna3[i];
        }
    }
    if (found != null) {
        return [addqna3Result_next(), addqna3Result_Page()];
    } else {
        alert("답변을 선택해주세요.");
        return false;
    }
}

function checkOnlyOne(element) {
    const qna1_checkboxes = document.getElementsByName("qna0_check");

    qna1_checkboxes.forEach((cb) => {
        cb.checked = false;
    })

    element.checked = true;

    const qna2_checkboxes = document.getElementsByName("qna1_check");

    qna2_checkboxes.forEach((cb) => {
        cb.checked = false;
    })

    element.checked = true;

    const addition_qna_checkbox = document.getElementsByName("qna2_check");

    addition_qna_checkbox.forEach((cb) => {
        cb.checked = false;
    })

    element.checked = true;

    const addition_qna2_checkbox = document.getElementsByName("qna3_check");

    addition_qna2_checkbox.forEach((cb) => {
        cb.checked = false;
    })

    element.checked = true;

    const addition_qna3_checkbox = document.getElementsByName("qna4_check");

    addition_qna3_checkbox.forEach((cb) => {
        cb.checked = false;
    })
    element.checked = true;
}


/*function each_check() {
    $("input[name=qna1_check]:checked").each(function () {
        var test = $(this).val();
        console.log("체크된 값 : " + test);
    });

    $("input[name=state]:checked").each(function () {
        var test = $(this).val();
        console.log("체크된 값 : " + test);
    });

    $("input[name=addition_qna]:checked").each(function () {
        var test = $(this).val();
        console.log("체크된 값 : " + test);
    });

    $("input[name=addition_qna2]:checked").each(function () {
        var test = $(this).val();
        console.log("체크된 값 : " + test);
    });

    $("input[name=addition_qna3]:checked").each(function () {
        var test = $(this).val();
        console.log("체크된 값 : " + test);
    });
}*/

var arTest = [];

function total() {

    $("input[name=qna1_check]:checked").each(function () {
        arTest.push($(this).val());
    });

    $("input[name=qna2_check]:checked").each(function () {
        arTest.push($(this).val());
    });

    $("input[name=qna3_check]:checked").each(function () {
        arTest.push($(this).val());
    });

    $("input[name=qna4_check]:checked").each(function () {
        arTest.push($(this).val());
    });
    console.log("체크된 값 total : " + arTest);
}

function removeElement() {
    arTest.pop();
    console.log("이전 값 total : " + arTest);
}

function uploadTextData(){
    $.ajax({
        type : 'POST',  //전송 방식
        url : '{% url "result" %}', // result/
        data : {
            textData: arTest
        },
        success: function(data) {
            console.log('데이터전송 성공!', data);
        },
        error: function(error) {
            console.log('에러', error);
        }
    });
}