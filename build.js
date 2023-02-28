var a=[1,2,3,4,5,6]
res=a.map(function(value){
    return value*2;
});
console.log(res)     //map
/*fileter
const res=a.filter(function(value){
    return value>2;
});
console.log(res,a);*/
//every
/*var a=[2,3,5,6,7]
res=a.every(function(value,index){
    return value>1;
});
console.log(res);*/
//some
/*res=a.some(function(value){
    return value>4;
});
console.log(res)*/
//find
//var a=[1,2,3,4,5,6]
/*res=a.find(function(value,index)
{
    return value==6;           //chcek left to rigt and return element
});

    console.log(res);*/
    //reduce
  /*  const sum=a.reduce(function(acc,c){      
        return acc+c;
    });
    console.log(sum)  */    //insted of forloop
