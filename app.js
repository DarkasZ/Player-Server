const nreq = require('./lib/NReq')

let payload = {"player_id": 15001}

payload = JSON.stringify(payload)
//nreq.post('http','localhost:9818,/hi')
//nreq.post('POST','http','localhost',9818,'/hi')
//nreq.request('GET','https','covid19.ddc.moph.go.th',443,'/api/Cases/today-cases-all')
async function showRequest()
{
    nreq.post('POST','http','localhost',10002,'/reward/collect/',payload)
    //nreq.request('POST','http','localhost',10001,'/player/get/15001')
}
showRequest()
