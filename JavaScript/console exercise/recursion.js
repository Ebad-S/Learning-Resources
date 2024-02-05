/* Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return */

 function isEven(n){
   if(n == 0) return true;
   else if (n == 1) return false;
   else if (n < 0) return isEven(-n);
   else return isEven(n-2);
}
console.log(isEven(30));
console.log(isEven(57));
console.log(isEven(-81));



//Not working
/* function isEven(n){
  switch (n)
  {
    case (n == 0): return true;
    break;
    case (n == 1): return false;
    break;
    case (n < 0) : return isEven(-n);
    break;
    default: isEven(n-2);
    break;
  }
}
console.log(isEven(53)); */
