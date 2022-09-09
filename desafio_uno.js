let contadorTotal = 0;
let contadorTal = 0;

class Paciente {

    constructor(id, hc, apellido, nombre, edad){
        this.id = id;
        this.hc = hc;
        this.apellido = apellido;
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarPacientes(){
        console.log(`Historia Clinica: ${this.hc}, Apellido: ${this.apellido}, Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }

}

class inotropicos{
    constructor(id, medicacion, presentacion, calculo, dosis){
        this.id = id;
        this.medicacion = medicacion;
        this.presentacion = presentacion;
        this.calculo = calculo;
        this.dosis = dosis;
    }

    mostrarFarmaco(){        
        console.log(`Farmaco: ${this.medicacion} \nPresentacion: ${this.presentacion}\nCalculo: ${this.calculo} \nDosis correspondiente: ${this.dosis}`);
    }
}

const paciente1 = new Paciente(1,"HC001","AGUERO","GABRIEL", "38");
const paciente2 = new Paciente(2,"HC001","PEREZ","JUAN", "32");

const registro = [];
registro.push(paciente1, paciente2);

const farmaco1 = new inotropicos(1,"ATROPINA", "Amplolla (1 mg/dl)", "Diluir en 10 ml - Dosis obtenida 0,01 mg/kg", "0,1 ml/kg minimo 1 ml");
const farmaco2 = new inotropicos(2,"ADENOSINA", "Ampolla (6 mg/ 2 ml","Dosis obtenida 0,1 mg/kg (max 6 mg)","0,2 mg/kg (max 12 mg)");
const farmaco3 = new inotropicos(3, "ADRENALINA","Ampolla 1 mg/ml","Diluir en 10 ml - Dosis obtenida 0,01 mg/ml", "0,1 mg/kg");

const farmacia = [];
farmacia.push(farmaco1, farmaco2, farmaco3);

// Funcion para listar los registros 
function mostrarRegistro(array){
    alert("En la consola puede ver el regsitro clinico");
    array.forEach((registro)=>{
        registro.mostrarPacientes();
    });
}

//Function para ingresar un nuevo registro 
function ingresarPaciente(array){
    let apellido = prompt(`Ingrese el Apellido del paciente`);
    let nombre = prompt(`Ingrese el Nombre del paciente`);
    let edad = prompt(`Ingrese la edad del paciente`);
    let pacienteIngresado = new Paciente(registro.length + 1, apellido.toLowerCase(), nombre.toLowerCase(), edad);
    array.push(pacienteIngresado);
}

//function buscar
//Si encuentra coincidencia devuelve el elemento, en caso de que no, nos devuelve undefined
function buscarPorApellido(){
    let buscarPaciente = prompt("Ingrese el Apellido del paciente que desee buscar");
    let pacienteEncontrado = registro.find((reg)=> reg.apellido.toLowerCase() == buscarPaciente.toLowerCase());
    if(pacienteEncontrado == undefined){
        alert("El paciente no se encuentra en nuestros registro clinico");
    }else{
        console.log(`Registro encontrado:`);
        console.log(`Apellido: ${pacienteEncontrado.apellido} \nNombre: ${pacienteEncontrado.nombre} \nEdad: ${pacienteEncontrado.edad}`);
    }
}

//Function para mostrar el listado de farmacos.
function mostrarFarmacos(array){  
    alert("Podes ver el listado de farmacos en la consola !!!");  
    array.forEach((elemento) => {
        elemento.mostrarFarmaco();
    });
}


// Function para valorar la escala de glagow
function valoracionGlasgow(){
   
    const ocular = prompt(`ESCALA DE GLASGOW 
                          'VALORACION OCULAR: 
                           A) ESPONTANEA 
                           B) A LA VOZ 
                           C) AL DOLOR 
                           D) SIN RESPUESTA`);

    const verbal = prompt(`VALORACION VERBAL: 
                           A) ORIENTADO 
                           B) DESORIENTADO 
                           C) INAPROPIADA 
                           D) INCOMPRENSIBLE 
                           E) SIN RESPUESTA`);

    const motora = prompt(`VALORACION MOTORA: 
                           A) OBECEDE A ORDENES 
                           B) LOCALIZA EL DOLOR 
                           C) RETIRA AL DOLOR 
                           D) RESPUESTA EN FLEXION 
                           E) RESPUESTA EN EXTENSION 
                           F) SIN RESPUESTA`);

    switch (ocular.toUpperCase()){
        case "A":         
            contadorTotal = contadorTotal + 4;
            break;
        case "B": 
        contadorTotal = contadorTotal + 3;        
            break;
        case "C": 
        contadorTotal = contadorTotal + 2;        
            break;
        case "D": 
        contadorTotal = contadorTotal + 1;        
            break;        
        default:
            contadorTotal = 0;
            break;
    }

    switch (verbal.toUpperCase()){
        case "A":           
            contadorTotal = contadorTotal + 5;
            break;
        case "B": 
            contadorTotal = contadorTotal + 4;        
            break;
        case "C": 
             contadorTotal = contadorTotal + 3;        
            break;
        case "D": 
            contadorTotal = contadorTotal + 2;        
            break;
        case "E": 
            contadorTotal = contadorTotal + 1;        
            break;
        default:
            contadorTotal = 0;
            break;
    }

    switch (motora.toUpperCase()){
        case "A":
            contadorTotal = contadorTotal + 6;
            break;
        case "B": 
            contadorTotal = contadorTotal + 5;
            break;
        case "C": 
            contadorTotal = contadorTotal + 4;
            break;
        case "D": 
            contadorTotal = contadorTotal + 3;
            break;
        case "E": 
            contadorTotal = contadorTotal + 2;
            break;
        case "F": 
            contadorTotal = contadorTotal + 1;
            break;
        default:
            contadorTotal = 0;
            break;
    }
    
    return contadorTotal;
          
}

//Function para valorar la escala de tal
function valoracionTal(){
    let freCard = 0;
    let freResp = 0;
    const frecCardiaca = parseInt(prompt(`ESCALA DE TAL 
                                 INGRESE LA FRECUENCIA CARDIACA DEL NIÑO:  `));

    const freRespiratoria = parseInt(prompt(`INGRESE LA FRECUENCIA RESPIRATORIA DEL NIÑO:  `));
    const valoracionRespiratoria = prompt(`VALORACION CLINICA RESPIRATORIA:  
                                           A) NO TIENE SIBILANCIAS
                                           B) AL FINAL DE LA ESPIRACION
                                           C) INSPIRATORIAS Y ESPIRATORIAS 
                                           D) AUDIBLES SIN ESTETOSCOPIO`);

    const valoracionMecanica = prompt(`VALORACION AL ESFUERZO RESPIRATORIO: 
                                       A) SIN TIRAJE 
                                       B) LEVE TIRAJE INTERCOSTAL
                                       C) TIRAJE GENERALIZADO 
                                       D) TIRAJE MAS ALETEO NASAL`);

    if(frecCardiaca < 120){
        freCard = 0;    
    }else if(frecCardiaca > 120 && frecCardiaca < 140){
        freCard = 1;
    } else if(frecCardiaca > 140 && frecCardiaca < 160){
        freCard = 2;
    } else{
        freCard = 3;
    }
    
    if(freRespiratoria < 30){
        freResp = 0;    
    }else if(freRespiratoria > 30 && freRespiratoria < 55){
        freResp = 1;
    } else if(freRespiratoria > 55 && freRespiratoria < 70){
        freResp = 2;
    } else{
        freResp = 3;
    }

    switch(valoracionRespiratoria.toUpperCase()){
        case "A": 
            contadorTal = contadorTal + 0;
            break;
        case "B": 
            contadorTal = contadorTal + 1;
            break;
        case "C": 
            contadorTal = contadorTal + 2;
            break;
        case "D": 
            contadorTal = contadorTal + 3;
            break;
        default:
            contadorTal = 0;
            break;            
    }

    switch(valoracionMecanica.toUpperCase()){
        case "A": 
            contadorTal = contadorTal + 0;
            break;
        case "B": 
            contadorTal = contadorTal + 1;
            break;
        case "C": 
            contadorTal = contadorTal + 2;
            break;
        case "D": 
            contadorTal = contadorTal + 3;
            break;
        default:
            contadorTal = 0;
            break;            
    }

    return contadorTal + freCard + freResp;

}

function calculoAtropina(){

}


//Function que consulte al usuario opción deseada
function preguntarOpcion(){
    let opcion = parseInt(prompt(`Ingrese el número de la1 opción que desea realizar:
                     ********************************
                        1 - Ver Registro Clinico
                        2 - Ingresar Paciente
                        3 - Buscar Paciente
                        4 - Escala de Glasgow
                        5 - Escala de TAL 
                        6 - Farmacia                                               
                        0 - Para salir
                        `));
    menu(opcion);
}

//Function para ejecutar la funcion segun la opcion escogida
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
           salir = true;
           alert(`Gracias por visitarnos !!!`);
        break;    
        case 1:
            mostrarRegistro(registro);
      	break;
   	    case 2: 
           ingresarPaciente(registro);
      	break 
   	    case 3:                   	
           buscarPorApellido();
      	break;
        case 4:                   	
          alert(`El paciente tiene un score de: ${valoracionGlasgow()}/ 15 en la escala de Glasgow`);
        break;
        case 5:                   	
        alert(`El paciente tiene una escore de TAL de: ${valoracionTal()}`);
        break;
        case 6:                   	
            mostrarFarmacos(farmacia);
        break;
   	    default: 
      	alert(`Ingrese una opción correcta`)
    }
}

let salir;
// Ciclo while donde se invoca preguntar opcion, si responde case 0 sale (salir == true)
while(salir != true){
    preguntarOpcion();
    
}




