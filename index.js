/*//let= variables e identificadores simples: number, strings, booleans
let lenjuage ="js"

//const: funciones, arreglos, objetos

//template string
console.log(`I hate ${lenjuage}`)*/


import{ materias } from "./materias.js"
import pkg from 'colors'
//console.log(materias)

//metodos de los objetos arreglo
//foreach: recorre un arreglo
/*materias.forEach((materia) => {
    if(materia.tipo === 'trasversal'){
        console.log(`materia: ${materia.nombre}`.red)
        console.log(`materia: ${materia.instructor}`.blue)
    }
})*/


//map: contruye un arreglo con base en otro
/*const profesores = materias.map((materia)=>{
    return materia.instructor
})

console.log(profesores)*/


/*//find: encontrar la primera ocurrencia que cumpla con la condicion dada
const PHP = materias.find((materia)=>{
    return materia.instructor === "Tatiana Cabrera"
})

console.log(PHP)*/

/*//push: agrega un elemento a un arreglo
materias.push({
        id:4,
        nombre:"Diseño Front-end",
        instructor: "Adriana Duarte",
        tipo:"tecnica",
        notas: [
            4.1,
            4,
            3.9
        ]
})

console.log(materias)*/

/*//splice: eliminar un arreglo
materias.splice(0, 2)

console.log(materias)*/

//findIndex: actualizar un elemento
const actualizar = materias.findIndex(materia => materia.instructor === "Tatiana Cabrera");
materias[actualizar].instructor="Cristian Buitrago"
console.log(materias)