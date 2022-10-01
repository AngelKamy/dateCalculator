const semana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
function dateCalc() {
    // Recolección de datos
const dayInput = document.getElementById("day").value; 
const yearInput = document.getElementById("year").value;
let mesInput = document.getElementById("month").value; 
const mensajeOutput = document.getElementById("mensaje")
let monthInput= 0;

    console.log("Si sirvió");
    
    // Generación de Fecha
    mesInput = mesInput.toLowerCase();
    console.log(mesInput);

    switch(mesInput){  
        case "enero":
            monthInput = 0;
            break;
        case "febrero":
            monthInput = 1;
            break
        case "marzo":
            monthInput = 2;
            break;
        case "abril":
            monthInput = 3;
            break;
        case "mayo":
            monthInput = 4;
            break;
        case "junio":
            monthInput = 5;
            break;
        case "julio":
            monthInput = 6;
            break;
        case "agosto":
            monthInput = 7;
            break;
        case "septiembre":
            monthInput = 8;
            break;
        case "octubre":
            monthInput = 9;
            break;
        case "noviembre":
            monthInput = 10;
            break;
        case "diciembre": 
            monthInput= 11;
            break;
        default:
            window.alert("La fecha no existe");
            break
    }
    console.log(monthInput);

    const date = new Date(yearInput,monthInput,dayInput);
    console.log(date);

    const dayIndex = date.getDay();
    console.log({dayIndex});

    const dia = semana[dayIndex];
    console.log(dia);

    let resultado=" ";

    if (dayIndex == 0 || dayIndex == 6){
        resultado="No es dia laboral";
        console.log("A descansar");
    }
    else{
        resultado ="es dia laboral"
        console.log("A trabajar")
    }
mensajeOutput.value = `El ${dayInput} de ${mesInput} de ${yearInput} \n cayó o caerá el ${dia}, ${resultado}`


}






/* Esta funcion convierte los números a un valor 
numérico*/

