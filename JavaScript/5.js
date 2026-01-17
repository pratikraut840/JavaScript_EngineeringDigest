function getData(data) {
    console.log('getting...' + data)
}

function deleteData(data) {
    console.log('deleting...' + data)
}

function callBack(functionName) {
    functionName('RAJ')
}

callBack(getData);