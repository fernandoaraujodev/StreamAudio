import config from "./config.js"
import { Controller } from "./controller.js"
import { logger } from "./logger.js"

const {
    location,
    pages: {
        homeHTML
    }
} = config

const controller = new Controller()
async function routes(request, response){
    const { method, url } =  request

    if(method === 'GET' && url === '/'){
        response.writeHead(302, {
            'Location': location.home
        })
        response.end()
    }

    if(method === 'GET' && url === '/home'){
        const {

        } = await controller.getFileStream(homeHTML)
    }

    return response.end('hello world')
}

export function handler(request, response){
    return routes(request, response)
    .catch(error => logger.error(`Deu xablau: ${error.stack}`))
}