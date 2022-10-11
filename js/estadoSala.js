// la invoco sin asignarle un boton ya que quiero que se carguen 
// al ingresar a la app 
cargarSala();
// function para cargar las habitaciones del servicio
function cargarSala(){
    let contenido = document.getElementById("contenido");
    
    contenido.innerHTML = `
                    <div class="row d-flex justify-content-center">
                        <div class="col-xs-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="card text-dark bg-light mb-3" style="max-width: 28rem;">
                                <div class="card-header">Habitación 001</div>
                                <div class="card-body">
                                <h5 class="card-title">Nombre: </h5>
                                <h6 class="card-subtitle mb-2 text-muted">Equipo QX: </h6>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolores repellat soluta ullam, laborum sunt.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-xs-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="card text-dark bg-light mb-3" style="max-width: 28rem;">
                                <div class="card-header">Habitación 002</div>
                                <div class="card-body">
                                <h5 class="card-title">Nombre: </h5>
                                <h6 class="card-subtitle mb-2 text-muted">Equipo QX: </h6>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolores repellat soluta ullam, laborum sunt.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="card text-dark bg-light mb-3" style="max-width: 28rem;">
                                <div class="card-header">Habitación 003</div>
                                <div class="card-body">
                                <h5 class="card-title">Nombre: </h5>
                                <h6 class="card-subtitle mb-2 text-muted">Equipo QX: </h6>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolores repellat soluta ullam, laborum sunt.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="card text-dark bg-light mb-3" style="max-width: 28rem;">
                                <div class="card-header">Habitación 004</div>
                                <div class="card-body">
                                <h5 class="card-title">Nombre: </h5>
                                <h6 class="card-subtitle mb-2 text-muted">Equipo QX: </h6>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolores repellat soluta ullam, laborum sunt.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="card text-dark bg-light mb-3" style="max-width: 28rem;">
                                <div class="card-header">Habitación 005</div>
                                <div class="card-body">
                                <h5 class="card-title">Nombre: </h5>
                                <h6 class="card-subtitle mb-2 text-muted">Equipo QX: </h6>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolores repellat soluta ullam, laborum sunt.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="card text-dark bg-light mb-3" style="max-width: 28rem;">
                                <div class="card-header">Habitación 006</div>
                                <div class="card-body">
                                <h5 class="card-title">Nombre: </h5>
                                <h6 class="card-subtitle mb-2 text-muted">Equipo QX: </h6>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, dolores repellat soluta ullam, laborum sunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>           
                        `;
}


let botonPaciente = document.getElementById("btnPaciente");
let botonFarmacia = document.getElementById("btnFarmacia");
let botonHome = document.getElementById("btnHome");

let contenidoHome = document.getElementById("contenido");
let formuFarmacia = document.getElementById("form-farmacia");
let formuPaciente = document.getElementById("idForm-paciente");

botonPaciente.addEventListener("click", ()=>{
    contenidoHome.classList.add("sala");
    formuFarmacia.classList.add("form-farmacia");
    formuPaciente.classList.remove("formu_paciente");
})

botonHome.addEventListener("click", ()=>{
    contenidoHome.classList.remove("sala");
    formuFarmacia.classList.add("form-farmacia");
    formuPaciente.classList.add("formu_paciente");
})

botonFarmacia.addEventListener("click", ()=>{
    contenidoHome.classList.add("sala");
    formuFarmacia.classList.remove("form-farmacia")
    formuPaciente.classList.add("formu_paciente");
})