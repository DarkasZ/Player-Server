const http = require('http')
const nreq = require('./lib/NReq')

const PORT = process.env.PORT || 10002
    let server = http.createServer(onClientRequest)
    server.listen(PORT)
    console.log('Server started listening in ' + PORT )

async function onClientRequest(request, response)
{
    let method = request.method
    let requrl = request.url

    await nreq.request('POST','http','localhost',10001,'/player/get/15004')

    let id = requrl.split('/')
    console.log(id)

    if(method === `GET`)
    {
        response.statusCode = 404
        response.write( JSON.stringify({'code': 4 , 'msg': 'nothing'}))
        console.log('Nothing... ')
    }
    else if(method === `POST` && `/${id[1]}/${id[2]}/` === '/reward/collect/')
    {
        if("level" < 10){
            response.write(JSON.stringify({ "code": 2 , "msg": "player cannot collected this rewards" }))
        }
        else if("player_id" === 15001){
            response.write(JSON.stringify({ "code": 1 , "msg": "player collected this rewards" }))
        }
        else if("player_id" === undefined)
        {
            response.write(JSON.stringify({ "code": 3 , "msg": "player not found" }))
        }

    }
    response.end()
}