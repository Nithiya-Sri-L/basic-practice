//1)sum of elemnt
//  var a=[1,3,4,6,7]
// sum=0;
// function check(b){
// for(let i=0;i<a.length;i++)
// {
// 	sum=sum+a[i]
// }
// return (sum)
// }
// m=check(a);
// console.log(m)
//2)average
// var a=[1,3,4,6,7]
// function avg(f){
// 	sum=0;
// for(let i=0;i<a.length;i++)
// {
// 	sum=sum+a[i]/a.length
// }
// return (sum)
// }
// c=avg(a);
// console.log(c)


//3)even number passed
// var arr=[1,2,6,4,9,3]
// function even(arr)
// {
// 	var b=[]
// 	for (i=0;i<arr.length;i++){
// 		if(arr[i]%2==0){
// 			b.push(arr[i]);
//
// 		}
// 	}
// 	return(b);
// }
// c=even(arr);
// console.log(c);






//4)display positive numbers AND negative numbers
// var arr=[1,-2,3,-4,5,-6,7]
// count=0;
// add=0;
// for(i=0;i<arr.length;i++){
// if (arr[i]>0)
// {
// 	count++;
// 	//console.log("positive numbers"+count)
// }
// else if(arr[i]<0){
// 	add++;
// }
// }
// console.log("positive numbers"+"="+count);
// console.log("negative numbers"+add);


//6_)duplicate elements delete
// var a=[2,3,6,5,3,5,8,5,4]
// b=a.sort();
// //console.log(b);
// c=[];
// for (i=0;i<b.length;i++)
// {
// 		if (b[i]!=b[i+1])
// 		{
// 			c.push(b[i])
//
// 	}
// }
// console.log(c)


//7)count digits
var arr=[12,2,3,6,8]
count=0
for(i=0;i<arr.length;i++)
{
	while(arr[i]!=0)
	{
		count++
	}
}
console.log("digits is"+"="+count)

//8)divisible by 3,4,5

/*a=[600,650,1200,239,15]   //div by 4,5,3
c=[]
count=0
for(i=0;i<a.length;i++)
{
	if((a[i]%4==0) && (a[i]%5==0) && (a[i]%3==0))

	{
		c.push(a[i])
		count++

	}

}


console.log("div count=" +count)

//9) delete particular index
n=parseInt(prompt("Enter a index"))   //delete index
b=[1,2,3,4,5,6,7,8]
c=[]
	delete b[n];
	c.push(b)
console.log(c)
//10)zig zag
	a=[1,2,3,4,5]   //zigzag
	b=[6,7,8,9,10]
	dot=[]
	for(i=0;i<a.length;i++)
	{
		dot.push(a[i],b[i])
	}
	document.write("zigzag="+dot)
	document.write("<br>")




//10)combine 2 arrays
	var a=[231,121,987,454]
	b=[1,3,7,9]
	c=a.concat(b)
	console.log(c)

//11)even average sum
 
 
var b=[1,3,4,6,7]
function send(s){
sum=0;
for(let i=0;i<b.length;i++)
{
	if(b[i]%2==0)
	{
	sum=sum+b[i]/b.length
	}
}
return (sum)
}
c=send (b)
console.log(sum)


//12)reverse elemnts
a=[22,30,42,5,6,2]
function reverse(h){
b=[]
for(i=a.length-1;i>=0;i--)
{
	b.push(a[i]);
}
return (b);
}
n=reverse(a)
console.log(n)

//13)merge two array elemnt sorted form
a=[1,5,2,7,4,9,3]
b=[13,76,54,12,10]
function con(v,m){
c=a.concat(b);
c.sort()
return (c)
}
cat=con(a,b)
console.log(cat);



	//16)smallest number
 var array=[20,25,13,2,25,40]
 s=array[2]
 for(i=0;i<array.length;i++)
 	 {
 		 if(s>array[i])
		 {
 			 s=array[i];
 		 }
 	 }
 console.log(s)*/

/*17)largest number
	 var array=[20,43,13,25,40]
 	 s=array[0]
 	 for(i=0;i<array.length;i++)
 		 {
 			 if(s<array[i]){
 				 s=array[i];
 			 }
 		 }
 	 console.log(s)

//

 var a=[100,-4,6,-7,9,15]
function nithii (n){
	b=[]
   for (i=0;i<n.length;i++)
   {
	   if (n[i]<0)
	   {
		   b.push(n[i]*-1);
		  //  console.log(b)
	   }
   }
   return (b)
}
   //nithii(a);
   var d=nithii(a);
   console.log(d)

//number to  text value
  var c=112
b=''
a=c+b
v=[]

for (i=0;i<a.length;i++){
	if(a[i]==1)
	{
		x=("one")
		v.push(x)
	}
	else if(a[i]==2)
	{
		x=("two")
		v.push(x)
		
	}
	else if(a[i]==3)
	{
		x=("three")
		v.push(x)
		
		
	}
	else if(a[i]==4)
	{
		x=("four")
		v.push(x)
		
		
	}
	else if(a[i]==5)
	{
		x=("five")
		v.push(x)
		
		
	}
	else if(a[i]==6)
	{
		x=("six")
		v.push(x)
		
		
	}
	else if(a[i]==7)
	{
		x=("seven")
		v.push(x)
		
		
	}
	else if(a[i]==8)
	{
		x=("eight")
		v.push(x)
		
		
	}
	else if(a[i]==9)
	{
		x=("nine")
		v.push(x)
		
	}
	
}

console.log(v)	
//merge two arrays 

/*a=[1,2,3,4,5]
b=[8,9,12,67]
for(i=0;i<b.length;i++)
{
	a.push(b[i]);
}

console.log(a)


//ascending order

var n=[3, 8, 2,10,6,12]
as=n.sort((k,j)=>k-j)
console.log(as)
//decscending order

var b=[3, 8, 2,10,6,12]
de=b.sort((a,b)=>b-a)
console.log(de)

//smallest number
var array=[20,43,13,25,40]
s=array[0]
for(i=0;i<array.length-2;i++)
	 {
		 if(s>array[i]){
			 s=array[i];
		 }
	 }
console.log(s)
//swap two elemnts in array
	 let arr = [12, -2, 55, 68, 80];

	 const temp = arr[0];
	 arr[0] = arr[3];
	 arr[3] = temp;

	 console.log(arr);*
//
	 var a=[10,3,6,3,5,8,5,4]
	 b=a.sort();
	 c=[];
	 for (i=0;i<b.length;i++)
	 {
	 		if (b[i]==b[i+1])
	 		{
	 			c.pop(b[i])
		        
	 	}
		else
		{
			c.push(b[i]);
		}
	 }
	 console.log(c)
//remove duplicates elemnts in array
	 var arr = [1,3,4,7,2,9,4,1];   

	  function dup(arr) { 

	             return arr.filter((value, index) => 
		  arr.indexOf(value) === index);

	      }    

	      console.log(dup(arr)); 
	 
		  //9)palindrom

		  var a=[231,121,987,454]
		  b=a
		  c=[]
		  for(i=0;i<b.length;i++)
		  {
		  	rem=0;
		  	while (b[i]>0){
		  	rem=(rem*10)+b[i]%10
		  	a[i]=b[i]/10
			}
		  		if(rem==b[i])
		  		{
		  			c.push(b[i]);
		  	
		  		}

		  	}
			console.log(c)
var a=[10,46,28,80,70,41]
for(i=0;i<a.length;i++){
	if(a[i]%2==0){
		b=a[i]/2
		a[i]=b;
	}
}
console.log(a);

var a=[2,7,3,14,24]
for(i=0;i<a.length;i++)
{
	if(a[i]%2==0){
		c=a[i]/2
		a[i]=c;
	}
}
console.log(a);*/



