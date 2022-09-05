//Para este desafio cree un codigo con los temas vistos hasta ahora, en el que las personas ingresan a una plataforma de venta de boletas para un evento, el cual consta de 4 localidades a escoger, dependiendo de la localidad sera el costo de las entradas al evento.


let edadUsuario = prompt("Para inresar a nuestra plataforma debe ser mayor de edad. \nPorfavor ingrese su edad:" );


while(edadUsuario == "" ){
    edadUsuario = prompt(`Debe ingresar su edad para poder avanzar`);
}

let entrada;

if(edadUsuario >= 18 ){
    alert(`Bienvenido a nuestra plataforma`);
    entrada = prompt(`Porfavor elija la ubicacion que desea para su evento \n platea1, platea2, platea3, vip: `);
}else{
    alert(`No estas en edad para ingresar`);
}


const ticketService = 0.10;

let platea1 = (7000 * ticketService) + 7000;
let platea2 = (3000 * ticketService) + 3000;
let platea3 = (8000 * ticketService) + 3000;
let vip = (15000 * ticketService) + 15000;


let valorBoleta = (ubicacion) => {
  
    while (ubicacion){
        if(ubicacion === "platea1"){
            alert(`El valor que debes abonar es de ${platea1}, incluye el costo de ticket service`);
        }else if(ubicacion === "platea2"){
            alert(`El valor que debes abonar es de ${platea2}, incluye el costo de ticket service`);
        }else if(ubicacion === "platea3"){
            alert(`El valor que debes abonar es de ${platea3}, incluye el costo de ticket service`);
        }else if(ubicacion === "vip"){
            alert(`El valor que debes abonar es de ${vip}, incluye el costo de ticket service`);
        }else{
            alert(`La opcion ingresada no es valida, debe ingresar una de las opciones para hacer su compra`);
        }
        ubicacion ++
    }
}

valorBoleta(entrada)



/* let costoBoleta = (ubicacion) => {
    switch(ubicacion){
        case "platea1":
          let platea1 = (7000 * ticketService) + 7000;
          alert(`El valor que debes abonar es de ${platea1}, incluye el costo de ticket service`);
          break;
        case "plate2":
          let platea2 = (3000 * ticketService) + 3000;
          alert(`El valor que debes abonar es de ${platea2}, incluye el costo de ticket service`);
          break;
        case "platea3":
          let platea3 = (8000 * ticketService) + 3000;
          alert(`El valor que debes abonar es de ${platea3}, incluye el costo de ticket service`);
          break;
        case "vip":
          let vip = (15000 * ticketService) + 15000;
          alert(`El valor que debes abonar es de ${vip}, incluye el costo de ticket service`);
          break;
        default :
          alert(`La opcion ingresada es incorecta, debe ingresar una opcion para hacer su compra`);
        }
  
}

costoBoleta(entrada); */