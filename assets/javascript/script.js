function calculate() {
    var p = document.getElementById("result").value;

    var q = eval(p);

    document.getElementById("result").value = q;
}

function display(value) {
    document.getElementById("result").value += value;
}

function clearNumbers() {
    document.getElementById("result").value = " ";
}

function display2(value) {
    document.getElementById("result2").value += value;
}

function calculate2() {
    var p = document.getElementById("result2").value;

    var q = eval(p);

    document.getElementById("result2").value = q;
}

function clearNumbers2() {
    document.getElementById("result2").value = " ";
}