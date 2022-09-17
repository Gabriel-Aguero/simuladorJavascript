let contadorTotal = 0;
let contadorTal = 0;


let btnGuardar = document.getElementById("btnGuardar");
let genero = document.querySelector(".radio:checked");

class Paciente {

    constructor(id, hc, apellido, nombre, edad, genero, fechaIngreso){
        this.id = id;
        this.hc = hc;
        this.apellido = apellido;
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.fechaIngreso = fechaIngreso;
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

const paciente1 = new Paciente(1, 1,"AGUERO","GABRIEL", "38", "Masculino", "2022-08-14");
const paciente2 = new Paciente(2, 2,"PEREZ","GIMENA", "32", "Femenino", "2022-06-05");

const registro = [];
registro.push(paciente1, paciente2);



const farmaco1 = new inotropicos(1,"ATROPINA", "Amplolla (1 mg/dl)", "Diluir en 10 ml - Dosis obtenida 0,01 mg/kg", "0,1 ml/kg minimo 1 ml");
const farmaco2 = new inotropicos(2,"ADENOSINA", "Ampolla (6 mg/ 2 ml)","Dosis obtenida 0,1 mg/kg (max 6 mg)","0,2 mg/kg (max 12 mg)");
const farmaco3 = new inotropicos(3, "ADRENALINA","Ampolla (1 mg/ml)","Diluir en 10 ml - Dosis obtenida 0,01 mg/ml", "0,1 mg/kg");

const farmacia = [];
farmacia.push(farmaco1, farmaco2, farmaco3);

// Funcion para listar los registros 
function mostrarRegistro(){    
        let cuerpo = document.getElementById("body");
        cuerpo.innerHTML = "";
      
        registro.forEach((paciente)=>{                       
            let nuevoRegistro = document.createElement("tr");                                
            nuevoRegistro.innerHTML = 
                                     `
                                        <tr>
                                         <th scope="row">${paciente.id}</th>
                                         <td>${paciente.hc}</td>
                                         <td>${paciente.apellido}</td>
                                         <td>${paciente.nombre}</td>
                                         <td>${paciente.edad}</td>
                                         <td>${paciente.genero}</td>
                                         <td>${paciente.fechaIngreso}</td>
                                        </tr>
                                                                                                                                                   
                                      `
        cuerpo.append(nuevoRegistro);    
        })    
}

function limpiarCampos(){
    let apellido = document.getElementById("apellidoInput");
    let nombre =document.getElementById("nombreInput");
    let hc = document.getElementById("hcInput");
    let edad = document.getElementById("edadInput"); 
    let fecha = document.getElementById("fecha");

    apellido.value = "";
    nombre.value = "";
    hc.placeholder = "Historia Clinica";
    edad.value = "";
    fecha.value = "";
}

//Function para ingresar un nuevo registro 
function ingresarPaciente(array){   
    let apellido = document.getElementById("apellidoInput");
    let nombre =document.getElementById("nombreInput");
    let hc = document.getElementById("hcInput");     
    let edad = document.getElementById("edadInput"); 
    let genero = document.querySelector("input[name='btnradio']:checked").value;
    let fecha = document.getElementById("fecha");
    let pacienteIngresado = new Paciente(array.length+1, hc.placeholder, apellido.value.toUpperCase(), nombre.value.toUpperCase(),edad.value, genero,fecha.value);
    array.push(pacienteIngresado);    
    console.log(array);
    mostrarRegistro();
    limpiarCampos();
    
}

function generarHistoriaClinca(){
    let numeroAleatorio = Math.floor(Math.random()*100);
    let nuevaHC = document.getElementById("hcInput");
    nuevaHC.placeholder = "HC00"+numeroAleatorio;
    return nuevaHC;
}

let botonGuardar = document.getElementById("btnGuardar");
botonGuardar.addEventListener("click", ()=>{
    ingresarPaciente(registro);
})

let verRegistro = document.getElementById("btnVerRegistros");
verRegistro.addEventListener("click", ()=>{
    mostrarRegistro();  
    //generos(); 
})

let btnListadoFarmacos = document.getElementById("btnListaFarmacia");
btnListadoFarmacos.addEventListener("click", ()=>{
    mostrarFarmacos(farmacia);
})

let btnIngresarPaciente = document.getElementById("btnIngresarPaciente");
btnIngresarPaciente.addEventListener("click", ()=>{
    generarHistoriaClinca();        
    let apellido = document.getElementById("apellidoInput");
    apellido.disabled = false;
    
    let nombre =document.getElementById("nombreInput");
    nombre.disabled = false;       
    
    let edad = document.getElementById("edadInput"); 
    edad.disabled = false;
              
    let fecha = document.getElementById("fecha");
    fecha.disabled = false;
    
    let botonGuardar = document.getElementById("btnGuardar");
    botonGuardar.disabled = false;


})

//function buscar
//Si encuentra coincidencia devuelve el elemento, en caso de que no, nos devuelve undefined
// function buscarPorApellido(){
//     let buscarPaciente = prompt("Ingrese el Apellido del paciente que desee buscar");
//     let pacienteEncontrado = registro.find((reg)=> reg.apellido.toLowerCase() == buscarPaciente.toLowerCase());
//     if(pacienteEncontrado == undefined){
//         alert("El paciente no se encuentra en nuestros registro clinico");
//     }else{
//         console.log(`Registro encontrado:`);
//         console.log(`Apellido: ${pacienteEncontrado.apellido} \nNombre: ${pacienteEncontrado.nombre} \nEdad: ${pacienteEncontrado.edad}`);
//     }
// }

//Function para mostrar el listado de farmacos.
function mostrarFarmacos(array){  
    let listadoFarmacos = document.getElementById("body-farmacos");
    listadoFarmacos.innerHTML = "";

    farmacia.forEach((farmaco)=>{
        let listado = document.createElement("tr");
        listado.innerHTML = `
                            <tr>
                                <th scope="row">${farmaco.id}</th>
                                <td>${farmaco.medicacion}</td>
                                <td>${farmaco.presentacion}</td>
                                <td>${farmaco.calculo}</td>
                                <td>${farmaco.dosis}</td>                                
                            </tr>`
     listadoFarmacos.append(listado);
    })        
}

// Function para valorar la escala de glagow
// function valoracionGlasgow(){
   
//     const ocular = prompt(`ESCALA DE GLASGOW 
//                           'VALORACION OCULAR: 
//                            A) ESPONTANEA 
//                            B) A LA VOZ 
//                            C) AL DOLOR 
//                            D) SIN RESPUESTA`);

//     const verbal = prompt(`VALORACION VERBAL: 
//                            A) ORIENTADO 
//                            B) DESORIENTADO 
//                            C) INAPROPIADA 
//                            D) INCOMPRENSIBLE 
//                            E) SIN RESPUESTA`);

//     const motora = prompt(`VALORACION MOTORA: 
//                            A) OBECEDE A ORDENES 
//                            B) LOCALIZA EL DOLOR 
//                            C) RETIRA AL DOLOR 
//                            D) RESPUESTA EN FLEXION 
//                            E) RESPUESTA EN EXTENSION 
//                            F) SIN RESPUESTA`);

//     switch (ocular.toUpperCase()){
//         case "A":         
//             contadorTotal = contadorTotal + 4;
//             break;
//         case "B": 
//         contadorTotal = contadorTotal + 3;        
//             break;
//         case "C": 
//         contadorTotal = contadorTotal + 2;        
//             break;
//         case "D": 
//         contadorTotal = contadorTotal + 1;        
//             break;        
//         default:
//             contadorTotal = 0;
//             break;
//     }

//     switch (verbal.toUpperCase()){
//         case "A":           
//             contadorTotal = contadorTotal + 5;
//             break;
//         case "B": 
//             contadorTotal = contadorTotal + 4;        
//             break;
//         case "C": 
//              contadorTotal = contadorTotal + 3;        
//             break;
//         case "D": 
//             contadorTotal = contadorTotal + 2;        
//             break;
//         case "E": 
//             contadorTotal = contadorTotal + 1;        
//             break;
//         default:
//             contadorTotal = 0;
//             break;
//     }

//     switch (motora.toUpperCase()){
//         case "A":
//             contadorTotal = contadorTotal + 6;
//             break;
//         case "B": 
//             contadorTotal = contadorTotal + 5;
//             break;
//         case "C": 
//             contadorTotal = contadorTotal + 4;
//             break;
//         case "D": 
//             contadorTotal = contadorTotal + 3;
//             break;
//         case "E": 
//             contadorTotal = contadorTotal + 2;
//             break;
//         case "F": 
//             contadorTotal = contadorTotal + 1;
//             break;
//         default:
//             contadorTotal = 0;
//             break;
//     }
    
//     return contadorTotal;
          
// }

// //Function para valorar la escala de tal
// function valoracionTal(){
//     let freCard = 0;
//     let freResp = 0;
//     const frecCardiaca = parseInt(prompt(`ESCALA DE TAL 
//                                  INGRESE LA FRECUENCIA CARDIACA DEL NIÑO:  `));

//     const freRespiratoria = parseInt(prompt(`INGRESE LA FRECUENCIA RESPIRATORIA DEL NIÑO:  `));
//     const valoracionRespiratoria = prompt(`VALORACION CLINICA RESPIRATORIA:  
//                                            A) NO TIENE SIBILANCIAS
//                                            B) AL FINAL DE LA ESPIRACION
//                                            C) INSPIRATORIAS Y ESPIRATORIAS 
//                                            D) AUDIBLES SIN ESTETOSCOPIO`);

//     const valoracionMecanica = prompt(`VALORACION AL ESFUERZO RESPIRATORIO: 
//                                        A) SIN TIRAJE 
//                                        B) LEVE TIRAJE INTERCOSTAL
//                                        C) TIRAJE GENERALIZADO 
//                                        D) TIRAJE MAS ALETEO NASAL`);

//     if(frecCardiaca < 120){
//         freCard = 0;    
//     }else if(frecCardiaca > 120 && frecCardiaca < 140){
//         freCard = 1;
//     } else if(frecCardiaca > 140 && frecCardiaca < 160){
//         freCard = 2;
//     } else{
//         freCard = 3;
//     }
    
//     if(freRespiratoria < 30){
//         freResp = 0;    
//     }else if(freRespiratoria > 30 && freRespiratoria < 55){
//         freResp = 1;
//     } else if(freRespiratoria > 55 && freRespiratoria < 70){
//         freResp = 2;
//     } else{
//         freResp = 3;
//     }

//     switch(valoracionRespiratoria.toUpperCase()){
//         case "A": 
//             contadorTal = contadorTal + 0;
//             break;
//         case "B": 
//             contadorTal = contadorTal + 1;
//             break;
//         case "C": 
//             contadorTal = contadorTal + 2;
//             break;
//         case "D": 
//             contadorTal = contadorTal + 3;
//             break;
//         default:
//             contadorTal = 0;
//             break;            
//     }

//     switch(valoracionMecanica.toUpperCase()){
//         case "A": 
//             contadorTal = contadorTal + 0;
//             break;
//         case "B": 
//             contadorTal = contadorTal + 1;
//             break;
//         case "C": 
//             contadorTal = contadorTal + 2;
//             break;
//         case "D": 
//             contadorTal = contadorTal + 3;
//             break;
//         default:
//             contadorTal = 0;
//             break;            
//     }

//     return contadorTal + freCard + freResp;

// }


