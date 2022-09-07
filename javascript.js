function Converter() {
	var real = parseFloat(document.getElementById("valor").value);
	var valorDolar = real * 0.19;
	var valorEuro = real * 0.19;
	var valorBitcoin = real * 0.0000098;
	var dolarConvertido = document.getElementById("dolar");
	var euroConvertido = document.getElementById("euro");
	var bitcoinConvertido = document.getElementById("bitcoin");
	var dolar = "O resultado em dólar é U$ " + valorDolar;
	var euro = "O resultado em euro é € " + valorEuro;
	var bitcoin = "O resultado em bitcoin é BTC " + valorBitcoin;
	
	dolarConvertido.innerHTML = dolar;
	euroConvertido.innerHTML = euro;
	bitcoinConvertido.innerHTML = bitcoin;

	// console.log("Valor em real: R$ " + valorReal);
	// console.log("Valor em dolar: U$ " + valorDolar);
}
