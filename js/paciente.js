let btnGuardar = document.getElementById("btnGuardar");
let genero = document.querySelector(".radio:checked");

class Paciente {

    constructor(id, hc, apellido, nombre, edad, genero, antecedentes, diagnostico,fechaIngreso){
        this.id = id;
        this.hc = hc;
        this.apellido = apellido;
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.fechaIngreso = fechaIngreso;
        this.antecedentes = antecedentes;
        this.diagnostico = diagnostico;
    }    
}


const paciente1 = new Paciente(1, "HC001","AGUERO","GABRIEL", "38", "Masculino", "Sin Antecedentes","Gripe","2022-08-14");
const paciente2 = new Paciente(2, "HC002","PEREZ","GIMENA", "32", "Femenino","Tabaquista", "Neumonia","2022-06-05");

let listaPaciente = [];

// guardamos el array registro en el storage y verificamos si existe en el 
// local y lo traemos
if(localStorage.getItem("listaPaciente")){
    listaPaciente = JSON.parse(localStorage.getItem("listaPaciente"))
}
else{
    console.log("Seteando por primera vez la lista de pacientes");
    listaPaciente.push(paciente1, paciente2);
    localStorage.setItem("listaPaciente", JSON.stringify(listaPaciente));
}
mostrarRegistro();


// Funcion para listar los registros 
function mostrarRegistro(){    
        let cuerpo = document.getElementById("body");
        cuerpo.innerHTML = "";
      
        listaPaciente.forEach((paciente)=>{                       
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
                                         <td>${paciente.antecedentes}</td>
                                         <td>${paciente.diagnostico}</td>
                                         <td>${paciente.fechaIngreso}</td>
                                        </tr>
                                                                                                                                                   
                                      `
        cuerpo.append(nuevoRegistro);    
        })    
}

function limpiarCampos(){
    let apellido = document.getElementById("apellido");
    let nombre =document.getElementById("nombre");
    let hc = document.getElementById("historiaClinica");
    let edad = document.getElementById("edad"); 
    let antecedentes = document.getElementById("antecedentes");
    let diagnostico = document.getElementById("diagnostico");
    
    apellido.value = "";
    nombre.value = "";
    hc.placeholder = "Historia Clinica";
    edad.value = "";
    antecedentes.value = "";
    diagnostico.value = "";
}

//Function para ingresar un nuevo registro 
function ingresarPaciente(array){   
    let hc = document.getElementById("historiaClinica");     
    let apellido = document.getElementById("apellido");
    let nombre =document.getElementById("nombre");
    let edad = document.getElementById("edad"); 
    let genero = document.querySelector("input[name='btnradio']:checked").value;
    let antecedentes = document.getElementById("antecedentes");
    let diagnostico = document.getElementById("diagnostico");
    let fecha = document.getElementById("fechaActual");
    let pacienteIngresado = new Paciente(array.length+1,hc.placeholder,apellido.value.toUpperCase(),nombre.value.toUpperCase(),edad.value, genero,antecedentes.value,diagnostico.value,fecha.value);
    array.push(pacienteIngresado);   
    localStorage.setItem("listaPaciente", JSON.stringify(array));
    console.log(array);
    mostrarRegistro();
    limpiarCampos();

    // agregamos libreria de toastify para mostrar un mensaje al ingresar un paciente
    Toastify({
        text: "Ha ingresado un nuevo paciente",
        duration: 3000,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #287bff, #287bff)",
        },
      }).showToast();
    
}

function generarHistoriaClinca(){
    let numeroAleatorio = Math.floor(Math.random()*100);
    let nuevaHC = document.getElementById("historiaClinica");
    nuevaHC.placeholder = "HC00"+numeroAleatorio;
    return nuevaHC;
}

let botonGuardar = document.getElementById("btnGuardar");
botonGuardar.addEventListener("click", ()=>{
    ingresarPaciente(listaPaciente);
})

let btnIngresarPaciente = document.getElementById("btnIngresarPaciente");
btnIngresarPaciente.addEventListener("click", ()=>{
    generarHistoriaClinca();        
    let apellido = document.getElementById("apellido");
    apellido.disabled = false;
    let nombre =document.getElementById("nombre");
    nombre.disabled = false;    
    let edad = document.getElementById("edad"); 
    edad.disabled = false;                  
    let botonGuardar = document.getElementById("btnGuardar");
    botonGuardar.disabled = false;
})

// agregamos la libreria de luxon
const DateTime = luxon.DateTime;
let fechaActual = document.getElementById("fechaActual");
const fechaHoy = DateTime.now();
let fecha = fechaHoy.toLocaleString(DateTime.DATETIME_MED);
fechaActual.value = fecha;