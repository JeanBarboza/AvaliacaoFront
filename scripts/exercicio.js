function calcular(){
    var num1 = Number(document.getElementById(numero1).value);
    var num2 = Number(document.getElementById(numero2).value);

    document.getElementById("somar").innerHTML = "Soma: " + (num1+num2);
    document.getElementById("subtrair").innerHTML = "Subtrair: " + (num1-num2);
    document.getElementById("multiplicar").innerHTML = "Multiplicar: " + (num1*num2);

    if (num2 == 0){
         document.getElementById("dividir").innerHTML = "Nao se pode dividir por zero";
        } else {
        document.getElementById("dividir").innerHTML = "Dividir:" + (num1/num2);
    }
}