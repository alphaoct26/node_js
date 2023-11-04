const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("hii hello !!")
    }
    else if (req.url === "/wha") {
        res.end("what the fuck !!")

    }
    else  {
        res.end("<h1>bicth</h1>you done mistake ")
    }
})
server.listen(5000)
