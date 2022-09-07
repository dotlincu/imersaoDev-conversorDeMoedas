function Converter() {
	var valorElemento = document.getElementById("valor").value;
	var valorDolar = parseFloat(valorElemento);
	var valorReal = valorDolar * 5.25;

	var elementoConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O resultado em real é R$ " + valorReal;
	elementoConvertido.innerHTML = valorConvertido;

	// console.log("Valor em real: R$ " + valorReal);
	// console.log("Valor em dolar: U$ " + valorDolar);
}
