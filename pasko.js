
const test =  document.getElementById("text")
     
function interval() {
    document.getElementById("text").innerHTML = "M <br>";

    console.log(test.innerHTML);
}


function interval1() {
    document.getElementById("text").innerHTML = "ME <br>";
    console.log(test.innerHTML);
 }


function interval2() {
    document.getElementById("text").innerHTML = "MER <br>";
    console.log(test.innerHTML);
 }
 

 function interval3() {
     document.getElementById("text").innerHTML = "MERR <br>";
     console.log(test.innerHTML);
}


function interval4() {
     document.getElementById("text").innerHTML = "MERRY <br>";
     console.log(test.innerHTML);
 }


 function interval5() {
     document.getElementById("text").innerHTML = "MERRY  <br>";
     console.log(test.innerHTML);
 }


 function interval6() {
     document.getElementById("text").innerHTML = "MERRY C <br>";
     console.log(test.innerHTML);
 }


 function interval7() {
     document.getElementById("text").innerHTML = "MERRY CH<br>";
     console.log(test.innerHTML);
 }


 function interval8() {
    document.getElementById("text").innerHTML = "MERRY CHR <br>";
    console.log(test.innerHTML);
 }


 function interval9() {
     document.getElementById("text").innerHTML = "MERRY CHRI <br>";
     console.log(test.innerHTML);
 }

 function interval10() {
     document.getElementById("text").innerHTML = "MERRY CHRIS <br>";
     console.log(test.innerHTML);
}

 function interval11() {
     document.getElementById("text").innerHTML = "MERRY CHRIST <br>";
     console.log(test.innerHTML);
}
function interval12() {
    document.getElementById("text").innerHTML = "MERRY CHRISTM <br>";
    console.log(test.innerHTML);
}

function interval13() {
    document.getElementById("text").innerHTML = "MERRY CHRISTMA <br>";
    console.log(test.innerHTML);
}

function interval14() {
    document.getElementById("text").innerHTML = "MERRY CHRISTMAS <br>";
    console.log(test.innerHTML);
}

function interval15() {
    document.getElementById("text").innerHTML = "MERRY CHRISTMASS <br>";
    console.log(test.innerHTML);
}

function interval16() {
    document.getElementById("text").innerHTML = "MERRY CHRISTMASS!! <br>";
    console.log(test.innerHTML);
}

   

  function kislap(){
    let text = document.getElementById('xmass');
    let red = Math.floor(Math.random(255) *256);
    let blue = Math.floor(Math.random(255) *256);
    let green = Math.floor(Math.random(255) * 256);
    a = document.getElementById('rgbname').innerText = `rgb(${red}, ${blue},${green})`;
    text.style.color = `rgb(${red}, ${blue},${green})`;

  }

  function start (){
    start_color = setInterval(kislap, 200,
  setTimeout(interval, 1000),
  setTimeout(interval1, 2000),
  setTimeout(interval2, 3000),
  setTimeout(interval3, 4000),
  setTimeout(interval4, 5000),
  setTimeout(interval5, 6000),
  setTimeout(interval6, 7000),
  setTimeout(interval7, 8000),
  setTimeout(interval8, 9000),
  setTimeout(interval9, 10000),
  setTimeout(interval10, 11000),
  setTimeout(interval11, 12000),
  setTimeout(interval12, 13000),
  setTimeout(interval13, 14000),
  setTimeout(interval14, 15000),
  setTimeout(interval15, 16000),
  setTimeout(interval16, 17000),);
  }

  function stop(){
    clearInterval(start_color);
  };

 var x = document.getElementById("jingle");

function playAudio() {
  x.play();
}
function pauseAudio() {
    x.pause();
  };
