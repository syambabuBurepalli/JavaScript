//declaring acall back function
function sam (x,y,z,callback){     // using callback function
    callback (x*y+z);
}
sam (4,5,6,function(result){
    console.log(result);
    if (result===30){
        console.log('true');
    }else{
        console.log('false');
    }
}
);

//calblback
function ram(a,b,c,d,callback){
    callback(a+b-c+d);
}
ram (4,5,2,3,function(result){
    console.log(result);
}
);

