const http = require('http')

const PORT = process.env.PORT || 10002
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

let payload ={
    player_id: 15001

}
payload = JSON.stringify(payload)

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

req.write(payload)
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
    else if(method === `GET` &&  requrl === `/reward/collect` && "player_id" === payload ) 
    {
            response.write("player collected this rewards")
    }
    else if(method === `GET` &&  requrl === `/reward/collect`&& "level" < 10 ) 
    {
            response.write("player cannot collect this rewards" )
    }
    else{
        response.write("Player not found")
    }

    response.end()
}

