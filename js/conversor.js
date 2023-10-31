function convertir(){
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 350;
    let euro = 400;
    let bitcoin = 10500;
    let real = 0.14;
    if(document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Pesos a Dolar es US$"  + resultado.toFixed(2))
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de Pesos a Euros es: Є"  + resultado.toFixed(2));
    }
    else if (document.getElementById("tres").checked){
        resultado = valore / euro;
        alert("El cambio de Pesos a Bitcoins es: ₿"  + resultado.toFixed(2));
    }
    else if (document.getElementById("cuatro").checked){
        resultado = valore / euro;
        alert("El cambio de Pesos a Reales es: R$"  + resultado.toFixed(2));
    }
    else{
        alert("Tienes que completar todos los campos");
    }
}
