function abrirVehiculo(marca) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marca === "Mazda") {
                console.log("Se abre el vehiculo marca " + marca);
                resolve(marca);
            } else {
                console.log("No es posible abrir el vehiculo marca " + marca);
                reject("Error al abrir");
            }
        }, 1000)
    });
}

function encenderVehiculo(marca) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marca === "Mazda") {
                console.log("Se enciende el vehiculo marca " + marca);
                resolve(marca);
            } else {
                console.log("No es posible encender el vehiculo marca " + marca);
                reject("Error al encender el vehiculo");
            }
        }, 1000)
    });
}

function encenderLuces(marca) {
    return new Promise(function (res, rej) {
        setTimeout(function () {
            console.log("Se encienden las luces del vehiculo " + marca);
            res();
        }, 3000);
    })
};

abrirVehiculo("Mazda")
    .then(encenderVehiculo)
    .then(encenderLuces)
    .then(function () {
        console.log("Estamos ready!!!");
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => {
        console.log("Esto termino bien o mal pero termino");
    });