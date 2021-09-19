let btnIniciar = document.getElementById("iniciar");
let btnPausar = document.getElementById("pausar");

let cronometro = document.getElementById("timer");

let hh = 0;
let mm = 0;
let ss = 0;
let centz = 0;

let tempo = 10;
let int = "";

function iniciar() {
  int = setInterval(timer, tempo);
  btnIniciar.style.display = "none";
  btnPausar.style.display = "inline";
}
function pausar() {
  clearInterval(int);
  btnIniciar.style.display = "inline";
  btnPausar.style.display = "none";
}
function zerar() {
  clearInterval(int);
  hh = 0;
  mm = 0;
  ss = 0;
  centz = 0;
  cronometro.innerText = "00:00:00:00";
  btnIniciar.style.visibility = "initial";
  btnIniciar.style.display = "inline";
  btnPausar.style.display = "none";
}
function timer() {
  centz++;
  if (centz == 100) {
    centz = 0;
    ss++;
  }
  if (ss == 60) {
    ss = 0;
    mm++;
  }
  if (mm == 60) {
    mm = 0;
    hh++;
  }

  let formato =
    (hh < 10 ? "0" + hh : hh) +
    ":" +
    (mm < 10 ? "0" + mm : mm) +
    ":" +
    (ss < 10 ? "0" + ss : ss) +
    ":" +
    (centz < 10 ? "0" + centz : centz);

  cronometro.innerText = formato;
}
