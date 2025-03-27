function abrirVehiculo(marca, callback){
    setTimeout(function(){
        console.log("Se abre el vehiculo marca "+marca);
        callback(marca);
    }, 1000);
}

function encenderVehiculo(marca, callback){
    setTimeout(function(){
        console.log("Se enciende el vehiculo marca "+marca);
        callback();
    }, 3000);
}

abrirVehiculo("Toyota", function(marca){
    encenderVehiculo(marca, function(){
        console.log("El vehiculo esta encendido");
    });
});