var timer = 6;
var timerelem = document.querySelector("#timerelem");
var randumnum = document.querySelector("#rdmnum");
var score = document.querySelector("#score");
var panel = document.querySelector("#btmpnl");

var guessnumber;

setInterval(() => {

    if (timer > 0) {
        --timer;
        timerelem.textContent = timer
    } else {
        panel.innerHTML = '<h1 id="over">Game Over<span><br><button id="refresh" onClick = "location.reload()">Play Again</button></span></h1>'
        document.querySelector(".bubble").style.display = 'none'
    }

}, 1000);


function makebubble() {

    for (let i = 0; i < 96; i++) {

        let random = Math.floor(Math.random() * 10);
        document.querySelector("#btmpnl").innerHTML += `<div class="bubble">${random}</div>`

    }

}
makebubble()

function randomnumguess() {
    guessnumber = Math.floor(Math.random() * 10);
    randumnum.textContent = guessnumber;
}

randomnumguess();


document.querySelector("#btmpnl").addEventListener("click", e => {
    console.log(guessnumber, e.target.textContent)
    if (e.target.classList.contains('bubble')) {

        if (guessnumber === Number(e.target.textContent)) {
            score.textContent = 10 + Number(score.textContent)

            randomnumguess();
            panel.innerHTML = '';
            makebubble();
            timer = 6;

        } else {

        }
    }
})