//Joel Torres Arias.
//Menu de Opciones con While.
//version 2.
var salida = " ";
while (salida != "N"){
    console.log("Opciones: 1 sumar, 2 restar");
    var opc = parseInt(prompt("Ingresa el numero de la opción elegida: "));
    var num1 = parseInt(prompt("Ingresa el primer número: "));
    var num2 = parseInt(prompt("Ingresa el segundo número: ")); 
    switch (opc) {
        case 1:
            console.log(num1+num2);
            break;
        case 2:
            console.log(num1-num2);
            break;
        default:
            console.log("La opciòn no es valida")
            break;
    }
    salida = prompt("Ingresa Y para continuar o N para salir: ").toUpperCase();
}
console.log("Gracias hasta la proxima");