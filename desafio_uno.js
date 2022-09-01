const escala = prompt('Selecciona la escala que desea valorar \n 1.- ESCALA DE GLASGOW \n 2.- Escala de TAL');
let contadorTotal = 0;
let contadorTal = 0;

switch(escala){
    case "1":        
        contadorTotal = valoracionGlasgow();
        alert("EL PACIENTE TIENE UN GLASGOW CON UN SCORE TOTAL DE: " + contadorTotal + "/15 ");
        break;
    case "2":        
        contadorTotal = valoracionTal();
        alert("EL PACIENTE TIENE UN SCORE DE TAL DE: " + contadorTotal);
        break;
    default:
        alert("Fin del programa");

}

function valoracionGlasgow(){
   
    const ocular = prompt('VALORACION DE ESCALA DE GLASGOW. \n '+
    'OCULAR: \n A) ESPONTANEA \n B) A LA VOZ \n C) AL DOLOR \n D) SIN RESPUESTA');
    const verbal = prompt('VALORACION DE ESCALA DE GLASGOW. \n '+
    'VERBAL: \n A) ORIENTADO \n B) DESORIENTADO \n C) INAPROPIADA \n D) INCOMPRENSIBLE \n E) SIN RESPUESTA \n');
    const motora = prompt('VALORACION DE ESCALA DE GLASGOW. \n '+   
    'MOTORA: \n A) OBECEDE A ORDENES \n B) LOCALIZA EL DOLOR \n C) RETIRA AL DOLOR \n D) RESPUESTA EN FLEXION \n E) RESPUESTA EN EXTENSION \n F) SIN RESPUESTA');

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

function valoracionTal(){
    let freCard = 0;
    let freResp = 0;
    const frecCardiaca = prompt('INGRESE LA FRECUENCIA CARDIACA DEL NIÑO \n ');
    const freRespiratoria = prompt('INGRESE LA FRECUENCIA RESPIRATORIA DEL NIÑO \n ');
    const valoracionRespiratoria = prompt('VALORACION CLINICA RESPIRATORIA \n ' + 
    'A) NO TIENE SIBILANCIAS \n B) AL FINAL DE LA ESPIRACION \n C) INSPIRATORIAS Y ESPIRATORIAS \n D) AUDIBLES SIN ESTETOSCOPIO \n');
    const valoracionMecanica = prompt('A) SIN TIRAJE \n B) LEVE TIRAJE INTERCOSTAL \n C) TIRAJE GENERALIZADO \n D) TIRAJE MAS ALETEO NASAL');

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

