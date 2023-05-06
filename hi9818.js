const http = require ('http')
const PORT = process.env.PORT || 9818

let server = http.createServer(onClientRequest)
    server.listen(PORT)
    console.log('Server started listening in ' + PORT)
function onClientRequest(request, response)
{
    response.writeHead(200)
    let method = request.method
    let requrl = request.url

    if(method === `GET` && requrl === `/hi`)
    {
        response.write(`Hello on Get`)
    }
    else if(method === `POST` && requrl === `/hi`)
    {
        response.write(`Hello on Post`)
    }
    else 
    {
        response.write(`Nothing...`)
    }
    response.end()
}