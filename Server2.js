const http = require('http')
//=========================================================
const PORT = process.env.PORT || 10002
//=========================================================
let server = http.createServer(onClientRequest)
server.listen(PORT)
console.log('Server started listening in ' + PORT )
//=========================================================
function onClientRequest(request, response)
{
    let method = request.method
    let requrl = request.url

    let result = ''
    
    if(method === `GET`)
    {
        response.statusCode = 404
        response.write( JSON.stringify({'code': 4 , 'msg': 'nothing'}))
        console.log('Nothing... ')
    }
    else if(method === `POST` && requrl === `/reward/collect`) 
    {
        
    }
    else{
        response.write( JSON.stringify({'code': 3 , 'msg': 'player not found'}))
        }
    
    response.end()
    }