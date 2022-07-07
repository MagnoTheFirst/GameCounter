var p1 = document.getElementById("input_player1");
var p2 = document.getElementById("input_player2");
var p3 = document.getElementById("input_player3");
var p4 = document.getElementById("input_player4");
var p5 = document.getElementById("input_player5");

var p1Text = document.getElementById("p1_text");
var p2Text = document.getElementById("p2_text");
var p3Text = document.getElementById("p3_text");
var p4Text = document.getElementById("p4_text");
var p5Text = document.getElementById("p5_text");

function hideInputFields() {

    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";


    p1Text.style.display = "none";
    p2Text.style.display = "none";
    p3Text.style.display = "none";
    p4Text.style.display = "none";
    p5Text.style.display = "none";

}

function show() {
    p1.style.display = "block";
    p1Text.style.display = "block";
}

function showItems() {
    var dropdownvalue = document.querySelector("#player");
    if (dropdownvalue.value == 'one') {
        p1.style.display = "block";
        p1Text.style.display = "block";

    } else if (dropdownvalue.value == 'two') {
        p1.style.display = "block";
        p1Text.style.display = "block";
        p2.style.display = "block";
        p2Text.style.display = "block";

    } else if (dropdownvalue.value == 'three') {
        p1.style.display = "block";
        p1Text.style.display = "block";
        p2.style.display = "block";
        p2Text.style.display = "block";
        p3.style.display = "block";
        p3Text.style.display = "block";

    } else if (dropdownvalue.value == 'four') {
        p1.style.display = "block";
        p1Text.style.display = "block";
        p2.style.display = "block";
        p2Text.style.display = "block";
        p3.style.display = "block";
        p3Text.style.display = "block";
        p4.style.display = "block";
        p4Text.style.display = "block";

    } else {
        alert("Error")
    }
}