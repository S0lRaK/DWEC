var miCalculadora = (function () {
	
	var operador1;
	var operador2;

	function sumar() {
		return operador1 + operador2;
	}

	function restar() {
		return operador1 - operador2;
	}

	function operacioRandom() {
		// Genera aleatòriament un número, 0 o 1
		var opcio = Math.round(Math.random());

		if (opcio == 1) {
			sumar();
		}
		else {
			restar();
		}
	}

	return {
		publicMethod: operacioRandom
	}
});