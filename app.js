let tareas = require('./funcionesDeTareas') //Aqui esta la lista de tareas
let accion = process.argv[2] // toma la 3 palabra de la consola

/* AQUI HACEMOS LA LOGICA DE LA AGENDA */
switch (accion) {

    case 'listar': // muestra todas las tareas
        console.log('Aqui están todas las tareas')
        console.log('---------------------------')
        tareas.forEach(function(tarea,indice){
            console.log((indice +1) + " : " +tarea.titulo + ' (' + tarea.estado + ')') 
        })
        break
    
    case 'guardar' : 
    
  case undefined: //cuando no mandas una accion
    console.log('Atención - tienes que pasar una acción')
        break
    

  default: //cuando mandas una accion que no existe
    console.log('No entiendo qué quieres hacer')
        break
}
