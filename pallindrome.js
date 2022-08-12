// declaring a pallindrome
const data = '11121112';
const datasplit = data.split('');
const reverseddata = datasplit.reverse('');
const joinreversed = reverseddata.join('');
console.log(data);

//by using if and else
if (data===joinreversed){
    console.log('given data $(data))is a pallindrome');
}
else {
    console.log('given data $(data)is not a pallindrome');
}

//string
const str = 'rotator';
const strsplit = str.split('');
const reversedstr = strsplit.reverse('');
const joinreversedstr = reversedstr.join('');


console.log(str);

//by using if and else
if(str===joinreversedstr){ 
    console.log('given string $(str) is a pallindrome');
}else {
    console.log('given string $(str) is not apallindrome');
}





