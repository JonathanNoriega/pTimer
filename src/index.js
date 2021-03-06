

//timer
var tiempo = 0;
var verificador = false;
var intervalo;

let grabarTiempso = document.getElementById('grabarTiempos');
let temporizador  = document.getElementById("time");
let list = document.getElementById('lista');
document.addEventListener("keyup", start)
document.addEventListener("keydown", stop);

let p = document.createElement('ul');

//     BUTTONS

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');

btn2.addEventListener("click", tresportres);
btn1.addEventListener("click", dospordos);
btn3.addEventListener("click", cuatroporcuatro);
btn4.addEventListener("click", cincoporcinco);
btn5.addEventListener("click", seisporseis);
btn6.addEventListener("click", sieteporsiete);

//     END BUTTONS

let scrambol = document.getElementById('scramble');

var threebythree = new Scrambo(); 

if(evento.keyCode == 32 && verificador == false)
  {
    scrambol.innerHTML = threebythree.get();
  }
  
function tresportres(evento) {


  
}
function dospordos(evento) {

  var dospordos = new Scrambo().type(222).get(); 
  scrambol.innerHTML = dospordos;

  if(evento.keyCode == 32 && verificador == false){
    clearInterval(intervalo);
    scrambol.innerHTML = dospordos;
  }
}
function cuatroporcuatro() {
  var cuatroporcuatro = new Scrambo().type(444).length(45).get(); 
  scrambol.innerHTML = cuatroporcuatro;
}
function cincoporcinco() {
  var cincoporcinco = new Scrambo().type(555).get(); 
  scrambol.innerHTML = cincoporcinco;
}
function seisporseis() {
  var seisporseis = new Scrambo().type(666).get(); 
  scrambol.innerHTML = seisporseis;
}
function sieteporsiete() {
  var sieteporsiete = new Scrambo().type(777).get(); 
  scrambol.innerHTML = sieteporsiete;
}


  
function start(evento)
{
  if(evento.keyCode == 32 && verificador == false)
  {
      intervalo = setInterval(function() {
        tiempo += 0.01;
        temporizador.innerHTML = tiempo.toFixed(2);
      }, 10);
      verificador = true;

    }
    else{
      verificador = false;
    }

    if(evento.keyCode == 32 && verificador == false){
      clearInterval(intervalo);

    }
    
    if(evento.keyCode == 32 && verificador == false && temporizador.textContent !== '0.00') {

      let p = document.createElement('ul');
      p.innerHTML = `
      <li>${tiempo.toFixed(2)}</li>`;
      grabarTiempos.appendChild(p);
    
      tiempo = 0;
    }  
}



function stop(evento)
{
  if(evento.keyCode == 32 && verificador == true)
  {
    clearInterval(intervalo);
  }
}


