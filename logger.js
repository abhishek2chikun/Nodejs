const Event = require('events');

var url ='http://mylogger.io/log';

class Logger extends Event
{
    display(message)
    {
        //sent http request
        console.log(message)


        //Raise a event
        this.emit('Speaking',{id:1,url:'htps://'})


    }
    
}

module.exports=Logger;
module.exports.Link=url;
