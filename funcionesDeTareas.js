const fs = require("fs") //require del modulo nativo FileSystem

/* LEER */
let tareasJSON = fs.readFileSync("./tareas.json", "utf-8") // lectura del tareas en JSON
let tareas = JSON.parse(tareasJSON) // convertimos tareasJSON a Js

/* ESCRIBIR */
function escribirJSON (tareas) {
    let tareasNuevas = JSON.stringify(tareas)
    
    console.log(tareasNuevas)
}
 
module.exports = tareas //exportamos modulos para usarlos en app.js