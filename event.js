const Logger = require('./logger');
const logger = new Logger()

//Register a listening
logger.on('Speaking',(args)=>{
    console.log("Listener called",args)
})


logger.display("It's OOPS")
