function getData(id, getNextData){
    //2s
    setTimeout(()=>{
        console.log("data", id)
        if(getNextData){ //add condition to execute getNextData() function if
            getNextData();
        }
    },2000)
}

//Normal function calls issue here
// getData(1, getData(2,getData));

//arraow function is mandatory to use
getData(1,()=>{
    console.log('getting data 1...');
    getData(2,()=>{
        console.log('getting data 2...');
        getData(3, ()=>{
            console.log('getting data 3...');
            getData(4);
        })
    })
},)