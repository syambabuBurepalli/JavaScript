const promiseOne = (firstName) => {
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            if (firstName ! == null) {
                resolve (`name is ${first name}`);
            }else{
                reject (`First is empty or null`);
            }
        },1500);
    })
}
promiseOne ('syam').then(()=>{

});