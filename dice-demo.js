var number_of_dice = 0;
var span = document.createElement("span");
span.innerHTML = "&#x2685;";
span.setAttribute("id", "d" + number_of_dice.toString());
span.setAttribute("class", "die");
document.getElementById("dice-area").appendChild(span);
number_of_dice++;

if (number_of_dice < 2) {
    number_of_dice = 1;
    document.getElementById("minus").disabled = true;
    document.getElementById("plus").disabled = false;

} else if (number_of_dice > 8) {
    number_of_dice = 9;
    document.getElementById("plus").disabled = true;
    document.getElementById("minus").disabled = false;
}

function adddie() {
    if (number_of_dice < 9) {
        var span = document.createElement("span");
        span.innerHTML = "&#x2685;";
        span.setAttribute("id", "d" + number_of_dice.toString());
        span.setAttribute("class", "die");
        document.getElementById("dice-area").appendChild(span);
        number_of_dice++;
        document.getElementById("roll-button").innerHTML = "Roll Dice";
        if (number_of_dice == 9) {
            document.getElementById("plus").disabled = true;
        } else {
            document.getElementById("plus").disabled = false;
        }
    }
    if (number_of_dice > 1) {
        document.getElementById("minus").disabled = false;
    } else {
        document.getElementById("minus").disabled = true;
    }
    console.log("+ => " + number_of_dice + " dice");
}

function removedie() {
    if (number_of_dice > 1) {
        document.getElementById("dice-area").removeChild(document.getElementById("dice-area").lastChild);
        number_of_dice--;
        if (number_of_dice == 1) {
            document.getElementById("minus").disabled = true;
            document.getElementById("roll-button").innerHTML = "Roll Die";
        } else {
            document.getElementById("minus").disabled = false;
        }
    }
    if (number_of_dice < 9) {
        document.getElementById("plus").disabled = false;
    } else {
        document.getElementById("plus").disabled = true;
    }
    console.log("- => " + number_of_dice + " dice");
}

function rolldice() {
    var dice = document.getElementsByClassName("die");
    console.log(dice);
    for (i = 0; i < dice.length; i++) {
        roll("d" + i);
    }
}

function roll(die) {
    var val = Math.ceil(Math.random() * 6);
    console.log(val);
    var text = "";
    switch (val) {
        case 1: txt = "&#x2680;"; break;
        case 2: txt = "&#x2681;"; break;
        case 3: txt = "&#x2682;"; break;
        case 4: txt = "&#x2683;"; break;
        case 5: txt = "&#x2684;"; break;
        case 6: txt = "&#x2685;"; break;
    }
    document.getElementById(die).innerHTML = txt;
    document.getElementById(die).style.color = "#000";
    return val;
}
