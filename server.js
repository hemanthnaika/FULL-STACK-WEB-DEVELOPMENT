// console.log("A message")
// console.log("Another message")
// console.log("Hemanth")

//!To create the server using HTTP Module built in node
const http = require('http')
    // console.log(http)
const fs = require('fs')
const path = require('path')
const server = http.createServer((request, response) => {
        //! To find the path
        // const path = request.url
        // response.write(`You made a request to ${path}`)
        //!To find the which request using .method
        // console.log(request.method)
        //!To give the response using .write and .end key word
        // response.write('HI')
        // response.write(`<h1>I am heading</h1>`)
        // response.end()
        // response.end()
        const markup = fs.readFileSync(path.resolve('./index.html'))
        response.write(markup)
        response.end()
    })
    // console.log(server)
server.listen(3000, () => {
    console.log(`Server Listening at PORT:${3000}`)
})