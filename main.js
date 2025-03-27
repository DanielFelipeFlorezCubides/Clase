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

function encenderLuces(marca, callback){
    setTimeout(function(){
        console.log("Se encienden las luces del vehiculo marca "+marca);
        callback();
    }, 4000);
};

abrirVehiculo("Toyota", function(marca){
    encenderVehiculo(marca, function(){
        encenderLuces(marca, function(){
            console.log("Listo para funcionar...");
        });
    });
});