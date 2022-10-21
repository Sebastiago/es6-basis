const needle = require('needle')

const url = 'https://rickandmortyapi.com/api/character'

const f = async () => {
    try {
        let response = await needle('get', url)
        response.body.results.forEach(element => {
            console.log(`Nombre: ${element.name}`)
            console.log('................')
        })
    } catch (error) {
        console.error(error)
    }
}

f()