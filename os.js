const os=require('os')
var tm=os.totalmem()
var fm=os.freemem()
console.log("Available Memory=",tm-fm)
console.log(`Free Memory ${fm}`)