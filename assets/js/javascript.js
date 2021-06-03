
//ReLog
function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
  hr = (hr == 0) ? 12 : hr;
  hr = (hr > 12) ? hr - 12 : hr;
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
  var months = ['enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  var days = ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vier', 'Sab'];
  var curWeekDay = days[today.getDay()];
  var curDay = today.getDate();
  var curMonth = months[today.getMonth()];
  var curYear = today.getFullYear();
  var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
  document.getElementById("date").innerHTML = date;
  var time = setTimeout(function(){ startTime() }, 500);
}

function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}




//modo obscuro paginas

//index
function apagarLuz() {

    var colorOscuro = '#343a40';
    var colorClarocard = "#e7eea5";
    var letraOscura = '#343a40';
    var letraClara = "white";
    var tipoborde = "10px solid #343a40";
    var colorseccionoscuro = "#707d54";

    document.body.style.background = colorOscuro;
    document.body.style.color = letraClara;

    document.getElementById("seccion1").style.borderLeft = tipoborde;
    document.getElementById("seccion1").style.borderRight = tipoborde;
    document.getElementById("seccion1").style.color = letraClara;
    document.getElementById("seccion1").style.background = colorseccionoscuro;
    document.getElementById("cardindex").style.background = colorClarocard;
    document.getElementById("cardindex").style.color = letraOscura;
    document.getElementById("cardindex2").style.background = colorClarocard;
    document.getElementById("cardindex2").style.color = letraOscura;
    document.getElementById("cardindex3").style.background = colorClarocard;
    document.getElementById("cardindex3").style.color = letraOscura;
    document.getElementById("theadformulario").style.borderColor = colorOscuro;

}

function encenderLuz() {

  var colorClaro = 'rgb(245, 245, 219)';
  var letraOscura = '#343a40';
  var colorOscuro = '#343a40';
  var letraClara = "white";
  var tipoborde = "10px solid rgb(245, 245, 219)";
  var colorseccionclaro ="rgb(180, 185, 98)";
  document.body.style.background = colorClaro;
  document.body.style.color = letraOscura;

  document.getElementById("seccion1").style.borderLeft = tipoborde
  document.getElementById("seccion1").style.borderRight = tipoborde
  document.getElementById("seccion1").style.color = letraOscura
  document.getElementById("seccion1").style.background = colorseccionclaro;
  document.getElementById("cardindex").style.background = colorOscuro
  document.getElementById("cardindex").style.color = letraClara
  document.getElementById("cardindex2").style.background = colorOscuro
  document.getElementById("cardindex2").style.color = letraClara
  document.getElementById("cardindex3").style.background = colorOscuro
  document.getElementById("cardindex3").style.color = letraClara

}

//pagina gato

function apagarLuzGato() {

  var colorOscuro = '#343a40';
  var fondoparrafosgato = '#707d54';
  var textoparrafogato = '#a1ab89';
  var bordeparrafogato = "10px solid #707d54";
  var letraClara = "white";

  document.body.style.background = colorOscuro;
  document.body.style.color = letraClara;

  document.getElementById("titulotextogato1").style.background = fondoparrafosgato;
  document.getElementById("parrafogato1").style.background = textoparrafogato;
  document.getElementById("parrafogato1").style.border = bordeparrafogato;
  document.getElementById("titulotextogato2").style.background = fondoparrafosgato;
  document.getElementById("parrafogato2").style.background = textoparrafogato;
  document.getElementById("parrafogato2").style.border = bordeparrafogato;
  document.getElementById("titulotextogato3").style.background = fondoparrafosgato;
  document.getElementById("parrafogato3").style.background = textoparrafogato;
  document.getElementById("parrafogato3").style.border = bordeparrafogato;
  document.getElementById("referenciagato1").style.color = letraClara;
  document.getElementById("referenciagato2").style.color = letraClara;
  document.getElementById("referenciagato3").style.color = letraClara;

}


function encenderLuzGato() {

  var fondoparrafosgato = '#a1ab89';
  var textoparrafogato = '#e1e6d4';
  var bordeparrafogato = "10px solid #a1ab89";
  var colorClaro = 'rgb(245, 245, 219)';
  var letraOscura = '#343a40';

  document.body.style.background = colorClaro
  document.body.style.color = letraOscura

  document.getElementById("titulotextogato1").style.background = fondoparrafosgato
  document.getElementById("parrafogato1").style.background = textoparrafogato
  document.getElementById("parrafogato1").style.border = bordeparrafogato
  document.getElementById("titulotextogato2").style.background = fondoparrafosgato
  document.getElementById("parrafogato2").style.background = textoparrafogato
  document.getElementById("parrafogato2").style.border = bordeparrafogato
  document.getElementById("titulotextogato3").style.background = fondoparrafosgato
  document.getElementById("parrafogato3").style.background = textoparrafogato
  document.getElementById("parrafogato3").style.border = bordeparrafogato
  document.getElementById("referenciagato1").style.color = letraOscura
  document.getElementById("referenciagato2").style.color = letraOscura
  document.getElementById("referenciagato3").style.color = letraOscura

}

//pagina perro

function apagarLuzPerro() {

  var colorOscuro = '#343a40';
  var fondoparrafosperro = '#707d54';
  var textoparrafoperro = '#a1ab89';
  var bordeparrafoperro = "10px solid #707d54";
  var letraClara = "white";

  document.body.style.background = colorOscuro;
  document.body.style.color = letraClara;

  document.getElementById("titulotextoperro1").style.background = fondoparrafosperro;
  document.getElementById("parrafoperro1").style.background = textoparrafoperro;
  document.getElementById("parrafoperro1").style.border = bordeparrafoperro;
  document.getElementById("titulotextoperro2").style.background = fondoparrafosperro;
  document.getElementById("parrafoperro2").style.background = textoparrafoperro;
  document.getElementById("parrafoperro2").style.border = bordeparrafoperro;
  document.getElementById("titulotextoperro3").style.background = fondoparrafosperro;
  document.getElementById("parrafoperro3").style.background = textoparrafoperro;
  document.getElementById("parrafoperro3").style.border = bordeparrafoperro;
  document.getElementById("referenciaperro1").style.color = letraClara;
  document.getElementById("referenciaperro2").style.color = letraClara;

}


function encenderLuzPerro() {

  var fondoparrafosperro = '#a1ab89';
  var textoparrafoperro = '#e1e6d4';
  var bordeparrafoperro = "10px solid #a1ab89";
  var colorClaro = 'rgb(245, 245, 219)';
  var letraOscura = '#343a40';

  document.body.style.background = colorClaro;
  document.body.style.color = letraOscura;

  document.getElementById("titulotextoperro1").style.background = fondoparrafosperro;
  document.getElementById("parrafoperro1").style.background = textoparrafoperro;
  document.getElementById("parrafoperro1").style.border = bordeparrafoperro;
  document.getElementById("titulotextoperro2").style.background = fondoparrafosperro;
  document.getElementById("parrafoperro2").style.background = textoparrafoperro;
  document.getElementById("parrafoperro2").style.border = bordeparrafoperro;
  document.getElementById("titulotextoperro3").style.background = fondoparrafosperro;
  document.getElementById("parrafoperro3").style.background = textoparrafoperro;
  document.getElementById("parrafoperro3").style.border = bordeparrafoperro;
  document.getElementById("referenciaperro1").style.color = letraOscura
  document.getElementById("referenciaperro2").style.color = letraOscura
  document.getElementById("referenciaperro3").style.color = letraOscura

}

//formulario

function apagarLuzContacto() {

  var colorOscuro= '#343a40';

  document.body.style.background = colorOscuro;
  document.getElementById("cardformulario").style.border = colorOscuro
}

function encenderLuzContacto() {

  var colorClaro = 'rgb(245, 245, 219)';

  document.body.style.background = colorClaro;

}

//veterinario

function apagarLuzVeterinario() {

  var colorOscuro= '#343a40';
  var letraClaraveterinario = "white";

  document.body.style.background = colorOscuro;
  document.getElementById("tituloveterinario").style.color = letraClaraveterinario;

}

function encenderLuzVeterinario() {

  var colorClaro = 'rgb(245, 245, 219)';
  var letraClaraveterinario = "#343a40";

  document.body.style.background = colorClaro;
  document.getElementById("tituloveterinario").style.color = letraClaraveterinario;
}


//validador RUT

var Fn = {
  // Valida el rut con su cadena completa "XXXXXXXX-X"
  validaRut : function (rutCompleto) {
    rutCompleto = rutCompleto.replace("‐","-");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
      return false;
    var tmp   = rutCompleto.split('-');
    var digv  = tmp[1]; 
    var rut   = tmp[0];
    if ( digv == 'K' ) digv = 'k' ;
    
    return (Fn.dv(rut) == digv );
  },
  dv : function(T){
    var M=0,S=1;
    for(;T;T=Math.floor(T/10))
      S=(S+T%10*(9-M++%6))%11;
    return S?S-1:'k';
  }
}

$("#btnvalida").click(function(){
  if (Fn.validaRut( $("#txt_rut").val() )){
    $("#msgerror").html("");
  } 
  else {
    $("#msgerror").html("El Rut no es válido ");
  }
});


//contadores de caracteres
//Rut
var maxLength1 = 10;
$('input').keyup(function() {
  var length = $(this).val().length;
  var length = maxLength1-length;
  $('#chars').text(length);
  $('#chars2').text($(this).val().length);
});
//Comentarios
var maxLength2 = 300;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var length = maxLength2-length;
  $('#chars4').text(length);
  $('#chars3').text($(this).val().length);
});