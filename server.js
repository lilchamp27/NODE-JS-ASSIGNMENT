// SERVER TO PRINT HELLO NODE!!!!!!
const http = require('http')

http.createServer((req, res) => {
    res.write("Hello Node!!!!!");
    res.end();
}).listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`)
})