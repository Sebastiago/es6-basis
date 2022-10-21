const axios = require('axios')


let config = {
    method:'get',
    url: 'https://pokeapi.co/api/v2/type'
}


const f = async () => {
    try {
        let response = await axios(config)
        response.data.results.forEach(element =>{
            console.log(`Nombre: ${element.name}`)
        console.log('................')
        })
    } catch (error) {
        console.error(error)
    }
}

f()