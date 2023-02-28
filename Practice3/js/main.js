/*var a=[2,4,3,6,7,9]
function even(m){
b=[]
for(i=0;i<6;i++){
	if(a[i]%2==0){
		b.push(a[i])
	}
}
 return(b);
}
c=even(a)
console.log(c);



var a=[1,2,3,4,5,6,7,8]
function odd(n){
b=[]
	for(i=0;i<8;i++){
		if(a[i]%2!=0){
			b.push(a[i])
		}
	}
	return(b);
}
c=odd(a)
console.log(c);?
//tabel
var a=parseInt(prompt ("enter a number"));
var b=parseInt(prompt ("enter a number"));
for (let i=1;i<b;i++)
{

	result=(i*a)
	console.log(i+' * '+a+' = '+result)
	
}
var a=[5,4,6,8,10]
for (let i=0;i<10;i++){
	if (a[0])
	{
	result=(i*a[0])
	console.log(i+' * '+a[0]+' = '+result)
	}
	else if (a[1])
	{
	result=(i*a[1])
	console.log(i+' * '+a[1]+' = '+result)
	}
	else if (a[2])
	{
	result=(i*a[2])
	console.log(i+' * '+a[2]+' = '+result)
	}
	else if (a[3])
	{
	result=(i*a[3])
	console.log(i+' * '+a[3]+' = '+result)
	}
	else 
	{
	result=(i*a[4])
	console.log(i+' * '+a[4]+' = '+result)
	}
}
display number of occurrence of each element in the array.
var a=[1,2,3,4,5,1,2];
var b={}
for(i=0;i<a.length;i++){
	if(b[a[i]]){
		b[a[i]]++
	}
	else{
		b[a[i]]=1
	}
}
console.log(b);
//find largest number in array
var a=[2,5,3,78,100]
var largest=a[0]
for (i=1;i<a.length;i++){
	if(a[i]>largest){
		largest=a[i]
	}
}
console.log(largest)
//smallest number 
var a=[2,5,3,78,100]
var largest=a[0]
for (i=1;i<a.length;i++){
	if(a[i]<largest){
		largest=a[i]
	}
}
console.log(largest)*/
//2nd smallest number 
/*var a=[2,5,3,78,100]
var largest=a[0]
var secondlatgest=a[0]
for (i=1;i<a.length;i++){
	if(a[i]>largest)
	{
		secondlargest=largest
		largest=a[i]
	}
	else if(a[i]>secondlargest)
	{
		secondlargest=a[i]
	}
}
console.log(secondlargest)
	  
var a=[2,4,-5,-8,3,-10,-2]
sum=0
for(i=0;i<a.length;i++)
{
	if (a[i]<0)
	{
		sum++
	}
	else
	{
		console.log(a)
	}
} 	 
// console.log(count+"positive numbers")
console.log(sum+"negative numbers")*/


var a=[1,2,3,4,5,6,7,8,9,10]
sum=0;
count=0;
for(i=0;i<a.length;i++){
	if(a[i]%2==0){
		sum++;
	}
	else{
		count++;
	}
}
console.log(count+"even numbers");
console.log(sum+"odd numbers");




