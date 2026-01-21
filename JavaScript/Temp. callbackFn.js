//callback function is function that is passed as argument in another function

function sayHi(){
    console.log('Hi........')
}
function callMe(callback){
    callback();
}
callMe(sayHi);
// =================================

function processData(data){
    console.log('processing...'+data)
}

function deleteData(data){
    console.log('deleting...'+data)
}

function fn(callBack,data){
callBack(data);
}

callBack(processData,'pratik');