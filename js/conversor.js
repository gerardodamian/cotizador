
let nombre = prompt("Por favor, ingresa tu nombre:");
let apellido = prompt("Por favor, ingresa tu apellido:");
let edad = prompt("Hola " + nombre + " " + apellido + " , ingresa tu edad:");

edad = parseInt(edad);

if (!isNaN(edad) && edad >= 18) {
    alert("Bienvenido, " + nombre + ". Eres mayor de 18 años y puedes entrar.");
} else {
    alert(
        "Lo siento, " + nombre + ". Eres menor de 18 años y no puedes entrar."
    );
}

function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 350;
    let euro = 400;
    let bitcoin = 10500;
    let real = 0.14;
    const resultadoElement = document.getElementById("resultado");
    if (isNaN(valore)) {
        resultadoElement.textContent =
            "Debes ingresar una cantidad válida en Pesos (COP).";
    } else {
        if (document.getElementById("uno").checked) {
            resultado = valore / dolar;
            resultadoElement.textContent =
                "El cambio de Pesos a Dólares es US$" + resultado.toFixed(2);
        } else if (document.getElementById("dos").checked) {
            resultado = valore / euro;
            resultadoElement.textContent =
                "El cambio de Pesos a Euros es: Є" + resultado.toFixed(2);
        } else if (document.getElementById("tres").checked) {
            resultado = valore / bitcoin;
            resultadoElement.textContent =
                "El cambio de Pesos a Bitcoins es: ₿" + resultado.toFixed(2);
        } else if (document.getElementById("cuatro").checked) {
            resultado = valore / real;
            resultadoElement.textContent =
                "El cambio de Pesos a Reales es: R$" + resultado.toFixed(2);
        } else {
            resultadoElement.textContent = "Debes seleccionar una moneda.";
        }
    }
}

//Crear un algoritmo utilizando un ciclo.

let contador = 1;

while (contador <= 10) {
    console.log(contador);

    contador++;
}
