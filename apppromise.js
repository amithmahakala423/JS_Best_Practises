function asyncMethod(message){
    return new Promise(function(fulfill, reject){
        setTimeout(function(){
            console.log(message);
            fulfill();
        },500);
    });
}

function findUser(){
   return asyncMethod('find the user')  
}

function validateUser(){
    return asyncMethod('validate the user')
    
}

function doStuff(){
    return asyncMethod('do stuff')
    
}
asyncMethod('Open db connection')
    .then(findUser)
    .then(validateUser)
    .then(doStuff)
    .then(function(){ });