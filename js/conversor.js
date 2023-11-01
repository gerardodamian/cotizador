function convertir(){
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 350;
    let euro = 400;
    let bitcoin = 10500;
    let real = 0.14;
    const resultadoElement = document.getElementById("resultado");
    if (isNaN(valore)) {
        resultadoElement.textContent = "Debes ingresar una cantidad válida en Pesos (COP).";
    } else {
        if(document.getElementById("uno").checked){
            resultado = valore / dolar;
            resultadoElement.textContent = "El cambio de Pesos a Dólares es US$" + resultado.toFixed(2);
        }
        else if (document.getElementById("dos").checked){
            resultado = valore / euro;
            resultadoElement.textContent = "El cambio de Pesos a Euros es: Є" + resultado.toFixed(2);
        }
        else if (document.getElementById("tres").checked){
            resultado = valore / bitcoin;
            resultadoElement.textContent = "El cambio de Pesos a Bitcoins es: ₿" + resultado.toFixed(6); // Mostrar 6 decimales
        }
        else if (document.getElementById("cuatro").checked){
            resultado = valore / real;
            resultadoElement.textContent = "El cambio de Pesos a Reales es: R$" + resultado.toFixed(2);
        }
        else {
            resultadoElement.textContent = "Debes seleccionar una moneda.";
        }
    }
}

//Crear un algoritmo con un condicional.

const numero = parseFloat(prompt("Ingresa un número:"));

if (numero > 0) {
    console.log("El número es positivo");
} else if (numero === 0) {
    console.log("El número es igual a cero");
} else {
    console.log("El número es negativo");
}

//Crear un algoritmo utilizando un ciclo.

let contador = 1;

while (contador <= 10) {
    console.log(contador);

    contador++;
}


