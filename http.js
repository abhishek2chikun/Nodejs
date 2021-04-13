const http =require('http');

const server = http.createServer((req,res)=>{
if (req.url == '/home')
{
    res.write("<html><h1>Hello World This is Home Page </h1></html>")
    res.end()
}
});

server.on("connection",(socket) =>
{
    console.log("New Connection")

})

server.listen(5000);

console.log("Listining on port 5000")