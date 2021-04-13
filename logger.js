var url ='http://mylogger.io/log';
console.log(module)
//console.log(__dirname)
function display(message)
{
    //sent http request
    console.log(message)
}
  


module.exports=display;
module.exports.Link=url;
module.exports.x=display