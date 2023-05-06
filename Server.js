const http = require('http')
const data = require('./data_player.json')

const PORT = process.env.PORT || 10001
    let server = http.createServer(onClientRequest)
    server.listen(PORT)
    console.log('Server started listening in ' + PORT )
    
function onClientRequest(request, response)
{
    let method = request.method
    let requrl = request.url
    let res = ''

    let id = requrl.split('/')

    console.log(id)
    
    if(method === `GET`)
    {
        response.statusCode = 404
        response.write( JSON.stringify({'code': 4 , 'msg': 'nothing'}))
        console.log('Nothing... ')
    }
    else if(method === `POST` && `/${id[1]}/${id[2]}/` === '/player/get/')
    {
            res = data.find((item) =>{
            if(item.player_id === `${id[3]}`){
                return item
            }
            })
    if(res != undefined)
    {
        if(res.level < 10){
            response.write(JSON.stringify({ "code": 2 , "msg": "player cannot collected this rewards" }))
        }
        else if(res.player_id === `${id[3]}`) {
            response.write(JSON.stringify({ "code": 1 , "msg": "player collected this rewards" }))
        }
        //response.write(JSON.stringify(res))/
    }
    else
    {
        response.write( JSON.stringify({'code': 3 , 'msg': 'player not found'}))
    }
    }
    
    response.end()
}