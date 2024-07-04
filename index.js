var isStop = true;
var s = 0;
var mint = 0;
var hr = 0;

function start() {
  if (isStop == true) {
    isStop = false;
    timer();
  }
}
function timer() {
  if (isStop == false) {
    s = parseInt(s);
    mint = parseInt(mint);
    hr = parseInt(hr);

    s++;
    // console.log(s);
    if (s == 60) {
      s = 0;
      mint++;
    }
    if (mint == 60) {
      mint = 0;
      hr++;
    }
    if (s < 10) {
      s = "0" + s;
    }
    if (mint < 10) {
      mint = "0" + mint;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }

    Stopwatch.innerHTML = hr + " : " + mint + " : " + s;

    setTimeout("timer()", 1000);
  }
}
// stop
function stop() {
  isStop = true;
}
// reset
function reset() {
  isStop = true;
  s = 0;
  mint = 0;
  hr = 0;
  Stopwatch.innerHTML = "00 : 00 : 00";
}
