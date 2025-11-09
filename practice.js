function reverseString(str) { 
    let reversed = '';
   for(let i=str.length-1; i>=0; i--)
    console.log(str[i]);
}
reverseString("hello");


function bubbleSorting(arr){return arr.sort((a,b)=>a-b);}