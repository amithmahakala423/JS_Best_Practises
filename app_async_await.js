
function asyncMethod(message, num){
    return new Promise(function(fulfill, reject){
        setTimeout(function(){
            console.log(message + " " + num);
            fulfill(num + 1);
        },500);
    });
}


async function main(){
    var one = await asyncMethod('Open db connection', 0)
    var two = await asyncMethod('findUser', one)
    var three = await asyncMethod('validateUser', two)
    var four = await asyncMethod('doStuff', three)
}

main();