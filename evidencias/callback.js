const request = require('request')

let endpoint = 'https://hp-api.herokuapp.com/api/characters'

request(endpoint, { json: true } , (err , response, data)=>{
    data.forEach(element => {
        console.log(`${element.house}`)
        console.log('----------------')
    });
})