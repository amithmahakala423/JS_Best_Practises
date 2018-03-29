function asyncMethod(message,cb){
    setTimeout(function(){
        console.log(message);
        cb();
    },500)
}

var myObject = require('./myobject-module')
console.log("app running on port "+ process.env.PORT);
console.log(myObject.hi);

asyncMethod('Open db connection', function(){
    asyncMethod('find the user', function(){
        asyncMethod('validate the user', function(){
            asyncMethod('do stuff', function(){
                
            })
        })
    })
})