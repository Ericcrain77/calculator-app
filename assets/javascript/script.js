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