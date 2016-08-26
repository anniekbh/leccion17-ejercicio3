var numero=0;

numero=parseInt(prompt("Ingrese el numero por favor : "));
if (numero % 2 != 0 ) {
	window.alert("Odd!" );
} else if (numero % 2 == 0 && numero>=2 && numero <=5) {
	window.alert("Good!");
} else if ( numero % 2 == 0 && numero >= 6 && numero <= 20) {
	window.alert("Great!");
} else {
	window.alert("Perfect!");
}