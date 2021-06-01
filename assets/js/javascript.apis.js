//Consumir API  => https://randomuser.me/
$(document).ready(function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open ('GET','https://randomuser.me/api/?results=4&nat=ES',true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);

            //fotos
            var Foto1 = data.results[0].picture.large;
            var Foto2 = data.results[1].picture.large;
            var Foto3 = data.results[2].picture.large;
            var Foto4 = data.results[3].picture.large;
        
            document.getElementById("veterinario1imagen").setAttribute("src", Foto1 );
            document.getElementById("veterinario2imagen").setAttribute("src", Foto2 );
            document.getElementById("veterinario3imagen").setAttribute("src", Foto3 );
            document.getElementById("veterinario4imagen").setAttribute("src", Foto4 );
            
            //nombres
            var nombrevet1 = data.results[0].name.first + " " + data.results[0].name.last;
            var nombrevet2 = data.results[1].name.first + " " + data.results[1].name.last;
            var nombrevet3 = data.results[2].name.first + " " + data.results[2].name.last;
            var nombrevet4 = data.results[3].name.first + " " + data.results[3].name.last;

            document.getElementById("veterinario1nombre").textContent = nombrevet1;
            document.getElementById("veterinario2nombre").textContent = nombrevet2;
            document.getElementById("veterinario3nombre").textContent = nombrevet3;
            document.getElementById("veterinario4nombre").textContent = nombrevet4;


            //emails
            var correovet1 = data.results[0].email;
            var correovet2 = data.results[1].email;
            var correovet3 = data.results[2].email;
            var correovet4 = data.results[3].email;

            document.getElementById("veterinario1email").textContent = correovet1;
            document.getElementById("veterinario2email").textContent = correovet2;
            document.getElementById("veterinario3email").textContent = correovet3;
            document.getElementById("veterinario4email").textContent = correovet4;

        }
    };
});

//Consumir API  => https://mindicador.cl/
//conversor de divisas
function convertir()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open ('GET','https://mindicador.cl/api',true);
    xmlhttp.send();

    var cl = parseInt(document.getElementById("cl").value);
    var dolar = 0;
    var euro = 0;

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            var data = JSON.parse(this.responseText);
            dolar = cl / data.dolar.valor;
            euro = cl / data.euro.valor;
        } 
           
        document.getElementById("valorEuro").innerHTML =  "Monto en Euros: " + new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR',maximumFractionDigits:2}).format(euro);  
        document.getElementById("valorDolar").innerHTML =  "Monto en Dolares : " + new Intl.NumberFormat('es-US',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(dolar);
  
    }
}
   


