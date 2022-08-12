const promiseOne = (firstName) => {
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            if (firstName ! == null) {
                resolve (`name is ${first name}`);
            }else{
                reject (`first is empty or null`);
            }
        },1500);
    })
}
promiseOne ('syam').then(()=>{

});