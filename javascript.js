function Converter() {
	var real = parseFloat(document.getElementById("valor").value);
	var valorDolar = real * 0.19;
	var valorEuro = real * 0.19;
	var valorBitcoin = real * 0.0000098;
	
	document.getElementById("dolar").innerHTML = "O resultado em dólar é U$ " + valorDolar;
	document.getElementById("euro").innerHTML = "O resultado em euro é € " + valorEuro;
	document.getElementById("bitcoin").innerHTML = "O resultado em bitcoin é BTC " + valorBitcoin;

	// console.log("Valor em real: R$ " + valorReal);
	// console.log("Valor em dolar: U$ " + valorDolar);
}
