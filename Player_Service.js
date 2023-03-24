const http = require('http')
const data = require('./data_player.json')

const PORT = process.env.PORT || 10001
let server = http.createServer(onClientRequest)
server.listen(PORT)
console.log('Server started listening in ' + PORT )

const options = {
    host:`localhost`,
    port:10001,
    method:'POST',
    path:`/player/get/15001`,
    headers:{
        'Content-Type':'application/json; charset=utf-8'
    }
}

let req = http.request (options,(resp) => {
    let respdata =``

    resp.on(`data`,(chunk)=>{
        respdata += chunk.toString()
    })
    resp.on(`end`,function(){
        let resp= convertStringtoJSON(respdata)
        console.log(resp)
    })
})

req.end()
function convertStringtoJSON(data)
{
    try{
        return JSON.parse(data)
    }catch(excp){
        return data
    }
}

function onClientRequest(request, response)
{
    let method = request.method
    let requrl = request.url

    if(method === `GET` && requrl === `/`)
    {
        	response.statusCode = 404
            console.log('Nothing... ')
    }
    else if(method === `GET` && requrl === `/player/get/15001`)
    {
        const responseData = {
                "player_id": "15001",
                "username": "john",
                "level": 5
        }
        const jsonContent = JSON.stringify(responseData);
        response.end(jsonContent);
            console.log(data[0])
    }
    else if(method === `GET` && requrl === `/player/get/15002`)
    {
        const responseData = {
            "player_id": "15002",
            "username": "tony",
            "level": 9
        }
        const jsonContent = JSON.stringify(responseData);
        response.end(jsonContent);
            console.log(data[1])
    }
    else if(method === `GET` && requrl === `/player/get/15003`)
    {
        const responseData = {
            "player_id": "15003",
            "username": "kerry",
            "level": 15
        }
        const jsonContent = JSON.stringify(responseData);
        response.end(jsonContent);
            console.log(data[2])
    }
    else{
        response.write('Player not Found')
    }

    response.end()
}