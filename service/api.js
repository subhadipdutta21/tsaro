const axios = require('axios')

export default class Api {
    
    // sample get api call 

    static get = async (url) => {
        return new Promise((resolve, reject) => {
            axios.get(url).then(res => {
                resolve(res.data)
            }).catch(err => reject(err))
        })
    }
}