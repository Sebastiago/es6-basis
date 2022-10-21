const request = require('request')

let endpoint = 'https://pokeapi.co/api/v2/type'

request(endpoint, { json: true } , (err , response, data)=>{
    data.results.forEach(element => {
        console.log(`Tipo: ${element.name}`)
        console.log('----------------')
    });
})