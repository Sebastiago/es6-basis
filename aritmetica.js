import {suma, resta, multiplicacion, division, potencia} from './operaciones.js'

const a = 10
const b = 30

/*
//manera legada tradicional de escribir funciones
function suma(a, b){
     console.log (`la suma es: ${a + b}`)
}

suma(a, b)*/

/* 
//manera con identificador
const suma = function(a, b){
    console.log(`la suma es: ${a+b}`)
}

suma(a, b)*/


/*
//manera sintaxis flecha, no son necesarios los {}

const suma = (a, b) => console.log(`la suma es: ${a+b}`)

suma(a, b)

const suma = (a, b) =>{
    return a + b
} 
console.log(`la suma es: ${suma(a,b)}`)*/

//const suma = (a, b) => a + b 

console.log(`la suma es: ${potencia(a,b)}`)