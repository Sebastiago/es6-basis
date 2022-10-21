let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://pokeapi.co/api/v2/type'

const get_data = (endpoint) => {
    //definir una promesa para la conexiona API
    let promise = new Promise((resolve, reject) => {
        //1. creamos el objeto de conexion
        let http = new XMLHttpRequest()
        //2. abrir conexion a a API
        http.open('get', endpoint)
        //3. enviar la solicitud(request) a la API
        http.send()
        //4. hacer el tratamiento de la response
        http.onload = () => {
            if (http.status === 200) {
                resolve(http.responseText)
            }
            else {
                reject(http.status)
            }
        }
    })
    return promise
}

const exito = (response) => {
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo) => {
        console.log(`Nombre: ${tipo.name}`)
        console.log('-------------------')
    })
    //console.log(JSON.parse(response))
}

const fallo = (status) => {
    console.log(status)
}

//invoca la funcion
get_data(endpoint)
        .then((response) => {
            exito(response)
        })
        .catch((status) => {
            fallo(status)
        })