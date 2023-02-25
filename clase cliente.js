class Cliente{
    //ATRIBUTOS
    nombre = "nombre";
    alcaldia = "alcaldia";
    genero = "genero";
    saldo = 5000;
    ID = 0;
    //metodos
    crearClave(alcadia,genero,ID){
        let clave = (alcaldia+genero+ID);
        return clave;
    }
    colsultarSaldo(saldo){
        console.log(saldo);
    }
    ingresarSaldo(saldo,saldoIngresado){
        saldo = saldo + saldoIngresado;
        return saldo;
    }
    retirar(saldo,saldoRetirar){
        if (saldo >= saldoRetirar){
            saldo = saldo - saldoRetirar;
            return saldo;
        }
        else{
            console.log("SALDO INSUFICIENTE");
        }

    }
}

var ID = 0;
do{
console.log("Ingrese nuevo cliente");
ID += 1;
nombre = prompt("Ingrese el nombre del cliente: ");
alcaldia = prompt("Ingrese la alcaldia IZTP(iztapalapa) o IZTC(iztacalco): ").toUpperCase();
genero = prompt("Ingrese el genero M(mujer) o H(hombre): ").toUpperCase();
cliente = new Cliente;
console.log(cliente1.crearClave(alcaldia,genero,ID));
salida = prompt("Desea ingresar otro cliente Si 'Y', NO 'N'.").toUpperCase();
}while(salida != 'N' )