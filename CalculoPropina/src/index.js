let X;
let prop;
/*Regla de 3 simple*/
document.getElementById("Regla3simple").onclick = function()
{
 X = parseFloat(document.getElementById("Paga").value);
 prop = parseFloat(document.getElementById("PorcentajePropina").value);
 let resultadoPropina = (prop * X)/ 100;
 //mensaje del resultado de la operacion
 let montoTotal = (resultadoPropina+X);
 console.log("El resultado de la propina es  " + resultadoPropina);
document.getElementById("propina").innerHTML = resultadoPropina;

document.getElementById("montoTotal").innerHTML=montoTotal;

}