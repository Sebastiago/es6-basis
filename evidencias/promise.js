const axios = require('axios')


let config = {
    method:'get',
    url: 'https://age-of-empires-2-api.herokuapp.com/api/v1/units'
}

axios(config)
    .then((response) => {
        response.data.units.forEach(element =>{
            console.log(`Nombre: ${element.name}`)
            console.log(`Descripcion: ${element.description}`)
        console.log('+-+-+-+-+-+-+-+-+-')
        })
        return response.data.units
    })
    .catch((error) => {
        console.error(error)
    })