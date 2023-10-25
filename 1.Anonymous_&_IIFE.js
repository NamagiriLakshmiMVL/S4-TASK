console.log("ANONYMOUS FUNCTION")
console.log(" ");
console.log("1. PRINT ODD NUMBERS IN ARRAY")
const odd = function(num){
   let arr1 = []
   for(let obj of num)
  { 
    if (obj % 2 == 1)
    arr1.push(obj)
  }
    return arr1
}
console.log("Input is :",[1,2,3,4])
console.log("Output is :",odd([1,2,3,4]))

console.log(" ");
console.log("2. CONVERTING ALL STRING TO TITLECAPS IN STRING ARRAY")
let titlefunc = function(str)
{  let arr = []
   for (let val of str)
   {
    let str1 = val[0].toUpperCase()
    let str2 = val.slice(1,val.length)
    arr.push(str1 + str2)
   }
    return arr.join(" ")
}
console.log("Input is :",["hello","javascript"])
console.log("Output is :",titlefunc(["hello","javascript"]))
console.log(" ");
console.log("3. SUM OF NUMBERS IN ARRAY")

let sum = function(num){
   let total = 0;
    for ( let val of num)
    {
        total+=val
    }
    return total
}
console.log("Input is :",[1,2,3,4,5])
console.log("Output is :",sum([1,2,3,4,5]))

console.log(" ");
console.log("4. RETURNING PRIME NUMBERS IN ARRAY")
let prime = function(num){
    let arr = []
    for (let val of num)
    {
        if ( !(val % 2 == 0 || val % 3 == 0 || val % 5 ==0 || val %7==0)|| (val == 2 ||val == 3 || val == 5 || val == 7) )
        {
            arr.push(val)
        }
    }
    return arr
}
console.log("Input is :",[2,23,39,7])
console.log("Output is :",prime([2,23,39,7]))
console.log(" ");

console.log("5.RETURN ALL PALINDROME IN ARRAY")
let palindrome= function(num){
    let arr1 = [] 
    for ( let val of num)
    {  
        let temp = val
        let a = temp % 10
        while (temp >=10)
        {
            temp/=10
        }
        let b =Math.floor(temp)
        if ( a === b)
        {
            arr1.push(val)
        }
    }
    return arr1
}
console.log("Input is :",[121,333,767,567,779]) 
console.log("Output is :",palindrome([121,333,767,567,779]))
console.log(" ");

console.log("6.RETURN MEDIAN OF TWO SORTED ARRAYS OF SAME SIZE")
let median = function(arr1,arr2){
    let arr3 = []
    for (let i = 0 ;i < arr1.length ;i++)
    {
        if (arr1[i] < arr2[i])
        {
            arr3.push(arr1[i])
            arr3.push(arr2[i])
        }
    }
    if (arr3.length % 2 == 1)
    {
        return (arr3[arr3.length/2])
    }
    else 
    {
        return parseInt(((arr3[arr3.length/2]+arr3[arr3.length/2]-1)/2))
    }
}
console.log("Input is :",[1, 12, 15, 26],[2, 13, 17, 30])
console.log("Output is :",median([1, 12, 15, 26],[2, 13, 17, 30]))

console.log(" ");
console.log("7. REMOVE DUPLICATES FROM ARRAY") 
console.log("Input is :",[1,1,6,7,9,9])
function duplicate(arr) { 
	return arr.filter((item, 
		index) => arr.indexOf(item) === index); 
} 
console.log("Output is :",duplicate([1,1,6,7,9,9]));

console.log(" ");
console.log("8.ROTATE AN ARRAY BY K TIMES")
let rotate = function (a, n, k) 
{ 
    let arr1 = []
    k = k % n; 
    for (let i = 0; i < n; i++) { 
		if (i < k) { 
			arr1.push(a[n + i - k]); 
		} 
		else { 
			arr1.push((a[i - k])); 
		} 
	} 
	return arr1
} 
let arr = [1, 2, 3, 4, 5]; 
let len = arr.length; 
let rot = 3;
console.log("Input is :",[1,2,3,4,5]) 
console.log("Output is :",rotate(arr, len, rot)); 
console.log(" ");
console.log(" ");
console.log(" ");
console.log("IIFE FUNCTIONS");
console.log(" ");
console.log("1. PRINT ODD NUMBERS IN ARRAY");
(function(num){
     let arr1 = []
     for(let obj of num)
    { 
      if (obj % 2 == 1)
      arr1.push(obj)
    }
    console.log("Input is:",[1,2,3,4])
      console.log("Output is:",arr1)
})([1,2,3,4])


console.log(" ");
console.log("2. Coverting all String to titlecaps in string array");
(function(str)
 {  let arr = []
    for (let val of str)
    {
     let str1 = val[0].toUpperCase()
     let str2 = val.slice(1,val.length)
     arr.push(str1 + str2)
    }
    console.log("Input is :",(["hello","guvi"]));
     console.log("Output is :",arr.join(" "));
 })(["hello","guvi"])
 
 console.log(" ");
console.log("3. Sum of numbers in array");
(function(num){
    let total = 0;
     for ( let val of num)
     {
         total+=val
     }
     console.log("Input is :",[1,2,3,4,5])
     console.log("Output is :",total)
 })([1,2,3,4,5])
 
 console.log(" ");
console.log("4. Prime Number in array");

(function(num){
    let arr = []
    for (let val of num)
    {
        if ( !(val % 2 == 0 || val % 3 == 0 || val % 5 ==0 || val %7==0)|| (val == 2 ||val == 3 || val == 5 || val == 7) )
        {
            arr.push(val)
        }
    }
    console.log("Input is :",[2,23,39,7,5])
    console.log("Output is :", arr)
})([2,23,39,7,5])


console.log(" ");
console.log("5.Return all the palindrome in a array");
(function(num){
    let arr1 = [] 
    for ( let val of num)
    {  
        let temp = val
        let a = temp % 10
        while (temp >=10)
        {
            temp/=10
        }
        let b =Math.floor(temp)
        if ( a === b)
        {
            arr1.push(val)
        }
    }
    console.log("Input is :",[121,333,567,779])
    console.log("Output is :",arr1)
})([121,333,567,779])

console.log(" ");
console.log("6.Return median of two sorted arrays of same size");
(function(arr1,arr2){
    let arr3 = []
    console.log("Input is",[1, 12, 15, 26],[2, 13, 17, 30])
    for (let i = 0 ;i < arr1.length ;i++)
    {
        if (arr1[i] < arr2[i])
        {
            arr3.push(arr1[i])
            arr3.push(arr2[i])
        }
    }
    if (arr3.length % 2 == 1)
    {
        console.log("Output is :",(arr3[arr3.length/2]))
    }
    else 
    {
        console.log("Output is :", parseInt(((arr3[arr3.length/2]+arr3[arr3.length/2]-1)/2)))
    }
})([1, 12, 15, 26],[2, 13, 17, 30])

console.log(" ");
console.log("7. Remove Duplicates from Array");  

(function duplicate(arr) { 
    console.log("Input is : ",[1,1,6,7,9,9])
	console.log("Output is :", arr.filter((item, 
		index) => arr.indexOf(item) === index))
})([1,1,6,7,9,9]) 

console.log(" ");
console.log("8.Rotate an array by k times");

(function (a, n, k) 
{ 
    let arr1 = []
    console.log("Input is:",[1, 2, 3, 4, 5])
    k = k % n; 
    for (let i = 0; i < n; i++) { 
		if (i < k) { 
			arr1.push(a[n + i - k]); 
		} 
		else { 
			arr1.push((a[i - k])); 
		} 
	} 
	console.log( "Output is:",arr1 )
})([1, 2, 3, 4, 5],5,3) 
 

 






                            








