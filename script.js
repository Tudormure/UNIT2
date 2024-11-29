const button = document.getElementById("button");

var i = 1;
var poze = [];

poze[0] = "vimeo.PNG";
poze[1] = "yt.PNG";
poze[2] = "gol.PNG";

button.addEventListener("dblclick", function () {
  document.getElementById("poza1").style.width = 0; //poza 1 dispare
  document.getElementById("poza3").style.width = 0; //poza 3 dispare
  document.getElementById("poza1").style.height = 0; //poza 1 dispare
  document.getElementById("poza3").style.height = 0; //poza 3 dispare
  ex3();
});
function ex3() {
  x = 0;
  setInterval(function () {
    if (x <= 2) {
      document.getElementById("poza2").src = poze[x];
    } 
    else {
      x = 0;
    }
    x++;
    console.log(x);
  }, 3000);
}
