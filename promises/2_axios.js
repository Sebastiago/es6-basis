const axios = require('axios')


let config = {
    method:'get',
    url: 'https://pokeapi.co/api/v2/type'
}

axios(config)
    .then((response) => {
        /*response.data.results.forEach(element =>{
            console.log(`Nombre: ${element.name}`)
        console.log('+-+-+-+-+-+-+-+-+-')
        })*/
        return response.data.results 
    })
    .then((data) => {
        data.forEach(element =>{
            console.log(`Nombre: ${element.name}`)
            console.log('+-+-+-+-+-+-+-+-+-')
        })
    })
    .catch((error) => {
        console.error(error)
    })