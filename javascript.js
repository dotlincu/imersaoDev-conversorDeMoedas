function converteDolar() {
	var real = parseFloat(document.getElementById("valor").value);
	if(real >= 0){
		document.getElementById("dolar").innerHTML = "O resultado em dólar é U$ " + (real * 0.1943).toFixed(2);
		document.getElementById("euro").innerHTML = "";
		document.getElementById("bitcoin").innerHTML = "";
	}
}

function converteEuro() {
	var real = parseFloat(document.getElementById("valor").value);
	if(real >= 0){
		document.getElementById("dolar").innerHTML = "";
		document.getElementById("euro").innerHTML = "O resultado em euro é € " + (real * 0.1913).toFixed(2);
		document.getElementById("bitcoin").innerHTML = "";
	}
}

function converteBitcoin() {
	var real = parseFloat(document.getElementById("valor").value);
	if(real >= 0){
		document.getElementById("dolar").innerHTML = "";
		document.getElementById("euro").innerHTML = "";
		document.getElementById("bitcoin").innerHTML = "O resultado em bitcoin é BTC " + (real * 0.0000098);
	}
}