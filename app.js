const http = require('http')

const server= http.createServer((req,res)=>{
    if(req.url=== '/' ){
       return res.end('Welcome to our home page !!!')
    }
    if(req.url === '/about'){
       return res.end('here lies the short life we lived !!!!')
    }
    res.end(`
    <h1>Ooops!!</h1>
    <p>we can not find the address you are trying to acess</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)
