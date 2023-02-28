// 1.sum of the elements in an array

var a=[1,2,3,4,5]
sum =0
for(i=0;i<a.length;i++)
{
	sum=sum+a[i]
}
console.log("sum",sum)

//2.sum and average the element in an array 

var a=[1,2,3,4,5]
sum =0
for(i=0;i<a.length;i++)
{
	sum=sum+a[i]
}
average=sum/a.length
console.log("sum",sum)
console.log("average",average)

                       //3.find how many even numbers in an array 

var a=[1,2,3,4,5,2,4,6,4]
b=[]
for(i=0;i<a.length;i++)
{
	if(a[i]%2==0)
	{
	b.push(a[i])
	}
}
c=b.length
console.log("even.no:",b)
console.log("even.length:",c)

                       //4.find how many odd numbers in an array

var a=[1,2,3,4,5,2,4,6,4]
b=[]
for(i=0;i<a.length;i++)
{
	if(a[i]%2!=0)
	{
	b.push(a[i])
	}
}
c=b.length
console.log("odd.no:",b)
console.log("odd.length:",c)

                        //5.delete the duplicate number in an array

var a=[100, 4, 6, 7, 15, 9, 15, 4, 100] 
x=[]
a.sort((a,b)=>a-b);
for(i=0;i<a.length;i++)
{
	if(a[i]==a[i+1])
	{
	 x.push(a[i+1])	
	}
}
console.log(x)

                        //6.delete the element in an particular index

var a = [11,22,33,44,55,66]
alert(a);
var b = parseInt(prompt("Enter the index number"));
x=[]
delete a[b];
console.log(a)

                         //7.design a method to count how many digit in an array  //a=[121]=> o/p= ONE TWO ONE

var a=152
x=a.toString()
console.log(x)
c=""
for(i=0;i<x.length;i++)
{
  if(x[i]==1)
  {
	 c+="one " 
  }	  
  if(x[i]==2)
  {
	 c+="two " 
  }	 
  if(x[i]==3)
  {
	 c+="three " 
  }
   if(x[i]==4)
  {
	 c+="four " 
  }
   if(x[i]==5)
  {
	 c+="five " 
  }
   if(x[i]==6)
  {
	 c+="six " 
  }
   if(x[i]==7)
  {
	 c+="seven " 
  }
   if(x[i]==8)
  {
	 c+="eight " 
  } if(x[i]==9)
  {
	 c+="nine " 
  } if(x[i]==0)
  {
	 c+="zero " 
  }
}  console.log(c) 


                       //8.check how many numbers are divisble by 3,4,5 in an array 

var a=[1,2,3,4,5,6,7,8,9,,10,12,15,16]
three=[]
four=[]
five=[]
for(i=0;i<a.length;i++)
{
	if(a[i]%3==0)
	{
		three.push(a[i])
	}
	if(a[i]%4==0)
	{
		four.push(a[i])
	}
	if(a[i]%3==0)
	{
		five.push(a[i])
	}
}
c=three.length+four.length+five.length
console.log("no that are divisible by 3:",three)
console.log("no that are divisible by 4:",four)
console.log("no that are divisible by 5:",five)
console.log("Total",c+" " +"no are divisible by 3,4 and 5")

                       //9.calculate how many palindromes are in an array
					   
var a = [121,323,441,343,767]
c=[]
for(i=0;i<a.length;i++)
{
	str = a[i]
	sum=0
while(str>0)
{
	rem=str%10
	sum=(sum*10)+rem
	str=(str-rem)/10
}	
if(sum==a[i])
{
	c.push(a[i])
}
}console.log("palindrome no's are:",c)






                           // 11.Design a method to combine two arrays.

var a=[1,3,4,5,6,7,8,9,10,11]
var b=["adhi","than","M"]
c=2
sum=(a+","+b)
x=a.join(c)
x=a.concat(b)
console.log(x)
console.log(sum)

                         // 12.Design a method to add unique elements and return from the array.

var a = [1,2,3,1,2,4,5,6,5,6]
x=[]
sum=0
a.sort((a,b)=>a-b);
for(i=0;i<a.length;i++)
{
	if(a[i]==a[i+1])
	{
		x.push(a[i],a[i+1])
		
		sum=sum+a[i]+a[i+1]	
		
	}
}
console.log("unique no are:",x)
console.log("sum of unique elements:",sum)

                           // 13.Design a method to return nth smallest element.

var a = [1,2,3,,5,6,8,9,9,3]

a.sort((a,b)=>a-b)
x=a.shift()
console.log(x)

                           // 14.Design a method to merge two array element in zigzag manner.

var a =[1,2,3]
var b =[4,5,6]
x=[]
for(i=0;i<b.length;i++)
{
	x.push(a[i],b[i])
}
console.log(x)

                          // 15.Design a method to merge two sorted array in the sorted form.

var a=[9,8,7,6]
var b =[5,4,3,2,1]
x=[]
a.sort((a,b)=>a-b);
b.sort((a,b)=>a-b);
for(i=0;i<b.length;i++)
{
	a.push(b[i])
}

a.sort((a,b)=>a-b);
console.log(a)



                        // 17.Design a method to calculate the sum and average of the even element of the array.
var a =[1,2,3,4,5,6,7]
sum=0
for(i=0;i<a.length;i++)
{
	sum=sum+a[i]
	
}console.log("sum",sum)
average=sum/a.length
console.log("average",average)
	
                         // 18.Design a method to find the first and second smallest element of the array.
 
var a=[7,8,-8,1,2,3,4,5,6]
b=a.sort((a,b)=>a-b);
x=[]
for(i=0;i<2;i++)
{
	x.push(b[i])
}
console.log("First & second smallest no is:",x)

                         // 19.Design a method to reverse the elements of the array.
						 
var a= [1,2,3,4,5,6,7,8,9,10,11]
x=a.reverse()
console.log(x)
  
                         // 20.design a method to swap two adjacent element	

var a = 21
var b = 32
a=a+b;
b=a-b;
a=a-b;
console.log(a)
console.log(b)
  
  

                           // 21.Design a method to sort the elements of an array in ascending order

var a =[1,7,9,10,5,6,7,12,13,15]
a.sort((a,b)=>a-b);
console.log("ascending no:",a)

                          // 22.Design a method to sort the elements of an array in descending order

var a= [1,7,9,10,5,6,7,12,13,15]
a.sort((a,b)=>b-a);
console.log("decsending no:",a)

                          // 23.Design a method to Find 3rd Largest Number in an array

var a= [1,7,9,10,5,6,7,12,13,15]
x=[]
a.sort((a,b)=>b-a);
for(i=0;i<3;i++)
{
	x.push(a[i])
}console.log(x)
c=x.pop()
console.log(c)

                         // 24.Design a method to Find 2nd Largest Number in an array

var a= [1,7,9,10,5,6,7,12,13,15]
x=[]
a.sort((a,b)=>b-a);
for(i=0;i<2;i++)
{
	x.push(a[i])
}
c=x.pop()
console.log(c)

                         // 25.Design a method to Find Largest Number in an array

var a= [1,7,9,10,5,6,7,12,13,15]
a.sort((a,b)=>a-b);
c=a.pop()
console.log(c)

                        // 26.Design a method to Find 2nd Smallest Number in an array

var a= [1,7,9,10,5,6,7,12,13,15]
a.sort((a,b)=>a-b);
//conosle.log(a)
x=[]
for(i=0;i<2;i++)
{
	x.push(a[i])
	console.log(x)
}
c=x.pop()
console.log(c)

                       // 27.Design a method to Find Smallest Number in an array

var a= [1,7,9,10,5,6,7,12,13,15]
a.sort((a,b)=>b-a);
console.log(a.pop())

                      // 28.Design a method to Remove Duplicate Element in an array

var a = [1,2,1,3,4,3,4,5,6,7,6,8]
x=[]
a.sort((a,b)=>a-b);
for(i=0;i<a.length;i++)
{
	if(a[i]!=a[i+1])
	{
	  x.push(a[i])	
	}
}
console.log(x)


29."Write a function that:
	A. Accepts one array of numbers as argument
	B. Finds all duplicate values in the array
	C. Inserts the duplicate values inside a new array
	C. Returns the new array
Ex: [100, 4, 6, 7, 15, 9, 15, 4, 100] => [100, 4, 15]"*/

/*var a=[100, 4, 6, 7, 15, 9, 15, 4, 100] 
a.sort((a,b)=> a-b);
x=[]
for(i=0;i<a.length;i++)
{
	if(a[i]==a[i+1])
	{
		x.push(a[i])
	}
}console.log(x)

/*30."Write a function that:
	A. Accepts one array of numbers as argument
	B. Converts each negative numbers into positive
	C. Inserts the converted numbers inside a new array
	D. Returns the new array
Ex: [100, -4, 6, -7, -9, 15] => [4, 7, 9]"

var a=[100, -4, 6, -7, -9, 15]
b=[]
for(i=0;i<a.length;i++)
{
	if(a[i]<0)
	{
	  b.push(a[i]*-1)
	}
}console.log(b)

/*31."Write a function that:
	A. Accepts one number variable as argument
	B. Converts each digit in the number into its equivalent text value
	C. Concadinates all texts as a single string
	D. Returns the string
Ex:	152 => ""ONE FIVE TWO""

var a = 1324
x=a.toString()
c=""
for(i=0;i<x.length;i++)
{
	if(x[i]==1)
	{
	c+="one "	
	}
	if(x[i]==2)
	{
	c+="two "	
	}
	if(x[i]==3)
	{
	c+="three "	
	}
	if(x[i]==4)
	{
	c+="four "	
	}
	if(x[i]==5)
	{
	c+="five "	
	}
	if(x[i]==6)
	{
	c+="six "	
	}
	if(x[i]==7)
	{
	c+="seven "	
	}
	if(x[i]==8)
	{
	c+="eight "	
	}
	if(x[i]==9)
	{
	c+="nine "	
	}
	if(x[i]==0)
	{
	c+="zero "	
	}
}console.log(c)

/*32."Write a function that:
	A. Accepts one array of numbers as argument
	B. Finds the average of all numbers
	C. Returns the average
Ex: [4, 6, 11] => 7"

var a=[4, 6, 11]
sum=0 
for(i=0;i<a.length;i++)
{
	sum=sum+a[i]
}
average=sum/a.length
console.log("average",average)



//10.calculate how many perfect numbers are in an array


// 16.Design a method to display number of occurrence of each element in the array.

var a = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,9] 
  let count = {};

  for (let i = 0; i < a.length; i++) 
  {
    if (count[a[i]])
		{
      count[a[i]]++;
        } 
	else 
	{
      count[a[i]] = 1;
    }
  }
	console.log(count)

var a=[2,4,6,7,9]
var b=[]
b=a.sort((a,b)=>a-b)
console.log( b)*/
var a = 1324
x=a.toString()
c=""
for(i=0;i<x.length;i++)
{
	if(x[i]==1)
	{
	c+="one "	
	}
	if(x[i]==2)
	{
	c+="two "	
	}
	if(x[i]==3)
	{
	c+="three "	
	}
	if(x[i]==4)
	{
	c+="four "	
	}
	if(x[i]==5)
	{
	c+="five "	
	}
	if(x[i]==6)
	{
	c+="six "	
	}
	if(x[i]==7)
	{
	c+="seven "	
	}   
	if(x[i]==8)
	{
	c+="eight "	
	}
	if(x[i]==9)
	{
	c+="nine "	
	}
	if(x[i]==0)
	{
	c+="zero "	
	}
}console.log(c)      







