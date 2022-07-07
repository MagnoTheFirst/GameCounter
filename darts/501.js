var points_p1 = 501;
var points_p2 = 501;
var points_p3 = 501;
var points_p4 = 501;
var points_p5 = 501;

function setValues() {
    document.getElementById("p1_score").textContent = points_p1;
    document.getElementById("p2_score").textContent = points_p2;
    document.getElementById("p3_score").textContent = points_p3;
    document.getElementById("p4_score").textContent = points_p4;
}

function reducePoints(fieldId) {
    alert(fieldId);
    var points1 = document.getElementById("points_p1").value;
    var points2 = document.getElementById("points_p2").value;
    var points3 = document.getElementById("points_p3").value;
    var points4 = document.getElementById("points_p4").value;

    if (fieldId == "p1_score" && checkInput(points1, this.points_p1)) {


        alert(points1);
        this.points_p1 = points_p1 - points1;
        document.getElementById("p1_score").textContent = points_p1;

    } else if (fieldId == "p2_score" && checkInput(points2, this.points_p2)) {

        this.points_p2 = points_p2 - points2;
        document.getElementById("p2_score").textContent = points_p2;

    } else if (fieldId == "p3_score" && checkInput(points3, this.points_p3)) {

        this.points_p3 = points_p3 - points3;
        document.getElementById("p3_score").textContent = points_p3;

    } else if (fieldId == "p4_score" && checkInput(points4, this.points_p4)) {

        this.points_p4 = points_p4 - points4;
        document.getElementById("p4_score").textContent = points_p4;

    } else {
        alert("error");
    }
}

function checkInput(input, points) {
    if (input > points || input > 180 || input < 0) {
        alert("Please typ in a valid value, smaller than 180 and not greater than the actual points");
        return false;
    } else {
        return true;
    }
}

function loadPlayer() {
    var playerInfo = decodeURIComponent(document.cookie);
    let ca = playerInfo.split(';');
    alert(ca);
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        console.log(c);
        var counter = i + 1;
        var player = "p" + i + "_name" + "=" + c;
        alert("_________________ " + player);
        var playersub = "p" + i + "=";
        alert(playersub);
        var playername = c.replace(playersub, " ");
        console.log("******************" + playername);
        document.getElementById(player).textContent = playername;
    }
    return "";

}