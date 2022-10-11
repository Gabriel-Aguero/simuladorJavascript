let btnFarmacia = document.getElementById("btnFarmacia");
let formFarmacia = document.getElementById("form-farmacia");

class farmacia{
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


// creamos el array para la lista de farmacos 
// y capturamos los datos del archivo .json
let listaFarmacia = [];
const cargarFarmacia = async () =>{
    const response = await fetch("farmacia.json");
    const data = await response.json();
    // console.log(data);
    for(let farmaco of data){
        let nuevoFarmaco = new farmacia(farmaco.id, farmaco.medicacion, farmaco.presentacion, farmaco.calculo, farmaco.dosis);
        listaFarmacia.push(nuevoFarmaco);
    }
    mostrarFarmacos(listaFarmacia);
    localStorage.setItem("listaFarmacia", JSON.stringify(listaFarmacia));
}

if(localStorage.getItem("listaFarmacia")){
    listaFarmacia = JSON.parse(localStorage.getItem("listaFarmacia"));
    mostrarFarmacos(listaFarmacia);
}
else{
    console.log("Ingresando por primera vez");
    cargarFarmacia();
}

//Muestra el listado de farmacos en la pantalla
function mostrarFarmacos(array){  
    let listadoFarmacos = document.getElementById("body-farmacos");
    listadoFarmacos.innerHTML = "";
    
    listaFarmacia.forEach((farmaco)=>{
        let listado = document.createElement("tr");
        listado.innerHTML = `
        <tr>
        <th scope="row">${farmaco.id}</th>
        <td>${farmaco.medicacion}</td>
        <td>${farmaco.presentacion}</td>
        <td>${farmaco.calculo}</td>
        <td>${farmaco.dosis}</td>  
        <td><button id= "btnAgregar${farmaco.id}" type="button" class="btn btn-primary">+</button></td>                                                   
        </tr>`
        listadoFarmacos.append(listado);
        
        let btnAgregar = document.getElementById(`btnAgregar${farmaco.id}`);
        //console.log(btnAgregar);
        btnAgregar.addEventListener("click",()=>{
            agregarPedido(farmaco);
            
        })
    })        
}


let pedidoEnCarrito = JSON.parse(localStorage.getItem("pedido")) || []
// llenamos el array con los valores que vamos agregando al pedido
function agregarPedido(farmaco){

    pedidoEnCarrito.push(farmaco);
    localStorage.setItem("pedido", JSON.stringify(pedidoEnCarrito));

    Swal.fire({
        icon: 'success',
        title: 'Se ha agregado un pedido',
        confirmButtonText : "Acepto",
        timer: 1000,    
        text: `Farmaco agregado: ${farmaco.medicacion}` 
    })
}

//------------ botones del carrito -------------------
let btnCarrito = document.getElementById("botonCarrito");
let btnFinalizarPedido = document.getElementById("botonFinalizarPedido");
let modalBody = document.getElementById("modal-body");
btnCarrito.addEventListener("click", ()=>{
    cargarCarrito(pedidoEnCarrito);
});



btnFinalizarPedido.addEventListener("click", ()=>{finalizarPedido()})

function finalizarPedido(){
    Swal.fire({
        title: 'Está seguro de realizar este pedido',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: 'blue',
        cancelButtonColor: 'red',
    }).then((result)=>{
        if(result.isConfirmed){
            Swal.fire({
            title: 'Usted ha realizado un pedido a farmacia',
            icon: 'success',
            confirmButtonColor: 'blue',
            text: `Puede realizar nuevamente otro pedido desde la lista de farmacos. `,
            })
            
            pedidoEnCarrito = [];
            localStorage.removeItem("pedido");
            cargarCarrito(pedidoEnCarrito);
        }else{
            Swal.fire({
                title: 'ATENCION',
                icon: 'warning',
                text: `El pedido no fue confirmado y farmacia no puede despacharlo`,
                confirmButtonColor: 'red',
                timer:4000
            })
        }
    })
}

//Mostramos el pedido en el carrito
function cargarCarrito(pedidoAgregado) {
   
    modalBody.innerHTML = ""; 
    modalBody.innerHTML = `
        <table id ="tabla_farmacos" class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Farmaco</th>
                    <th scope="col">Presentacion</th>
                    <th scope="col">Calculo</th>
                    <th scope="col">Dosis</th>
                </tr>
            </thead>
            <tbody id="body-Carrito">        
            </tbody>
        </table>`

        pedidoAgregado.forEach((pedidoEnCarrito)=>{
        let bodyCarrito = document.getElementById("body-Carrito");
        let filasCarrito = document.createElement("tr");
        filasCarrito.innerHTML += ` 
        
            <tr>
                <th scope="row">${pedidoEnCarrito.id}</th>
                <td>${pedidoEnCarrito.medicacion}</td>
                <td>${pedidoEnCarrito.presentacion}</td>
                <td>${pedidoEnCarrito.calculo}</td>
                <td>${pedidoEnCarrito.dosis}</td>   
                <td><button class= "btn btn-danger" id="botonEliminar${pedidoEnCarrito.id}"><i class="fas fa-trash-alt"></i></button></td>                                                  
                </tr>`
            bodyCarrito.append(filasCarrito);
        })

pedidoAgregado.forEach((pedidoEnCarrito, indice)=>{
    let btnEliminarPedido = document.getElementById(`botonEliminar${pedidoEnCarrito.id}`);
        btnEliminarPedido.addEventListener("click", ()=>{
            pedidoAgregado.splice(indice, 1);
            console.log(pedidoAgregado);
            localStorage.setItem("pedido", JSON.stringify(pedidoAgregado));
            cargarCarrito(pedidoAgregado);
        })
    })
}

let botonBuscar = document.getElementById("btnBuscador");
let cajaBuscar = document.getElementById("buscador");

botonBuscar.addEventListener("click", ()=>{
    event.preventDefault();
    let farmacoBuscado = listaFarmacia.filter(elem => elem.medicacion.toLowerCase() === cajaBuscar.value.toLowerCase());
    farmacoBuscado == 0 ?  
        Swal.fire({
            icon: 'info',
            title: 'Lo siento',
            text: 'No existen datos con esa busqueda!!!',
        }) :
    console.log(farmacoBuscado);
})



