var number_of_dice = 5;
var dicevalues = [0, 0, 0, 0, 0];
var selected = [];
var turn = 0;

for (i = 0; i < number_of_dice; i++) {
    var span = document.createElement("span");
    span.innerHTML = "&#x2685;";
    span.setAttribute("id", "d" + i.toString());
    span.setAttribute("class", "die");
    span.setAttribute("onclick", "toggledie(this)");
    document.getElementById("dice-area").appendChild(span);
}
var dice = document.getElementsByClassName("die");

function init() {
    dicevalues = [0, 0, 0, 0, 0];
    selected = [];
    turn = 0;
    for (i = 0; i < 5; i++) {
        dice[i].style.color = "#ddd";
    }
    for (i = 0; i < number_of_dice; i++) {
        document.getElementById("d" + i).innerHTML = "&#x2685;";
    }
    dice = document.getElementsByClassName("die");
    document.getElementById("roll-button").innerHTML = "Start Game";
    span.setAttribute("onclick", "toggledie(this)");
}

function toggledie(die) {
    if (turn > 0 && turn < 3) {
            if (selected.indexOf(die) > -1) {
            unselectdie(die);
        } else {
            selectdie(die);
        }
    }
}

function selectdie(die) {
    selected.push(die);
    die.style.color = "#ff0000";
}

function unselectdie(die) {
    selected.splice(selected.indexOf(die), 1);
    die.style.color = "#000000";
}

function rolldice() {
    if (turn == 3) {
        init();
        return;
    }
    turn++;
    document.getElementById("roll-button").innerHTML = "Roll Dice (" + (3 - turn) + " left)";
    console.log(dicevalues);
    for (i = 0; i < dice.length; i++) {
        if (selected.indexOf(dice[i]) == -1) {
            dicevalues[i] = roll("d" + i);
        }
    }
    console.log(dicevalues);
    if (turn == 3) score();
}

function roll(die) {
    var val = Math.ceil(Math.random() * 6);
    /* console.log(val); */
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

function score() {
    document.getElementById("roll-button").innerHTML = "New game";
    for (i = 0; i < 5; i++) {
        console.log(dice[i].style.color);
        if (dice[i].style.color == "rgb(0, 0, 0)") dice[i].style.color = "#ddd";
    }
    var sortedvalues = dicevalues.slice();
    sortedvalues.sort((a, b) => a - b);
    console.log("sortedvalues: " + sortedvalues);
    console.log("kniffle? " + sortedvalues);
    if (sortedvalues[0] == sortedvalues[4]) {
        console.log("KNIFFLE!");
        for (i = 0; i < 5; i++) {
            dice[i].style.color = "#0000ff";
        }
    } else {
        console.log("No KNIFFLE.");
    }
}
