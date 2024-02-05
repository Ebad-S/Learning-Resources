/* Define   a   list   that   contains   the   following   values:   6,   4,   1,   7,   2,   8,   3,   9,   11.

b) Use   a   for-loop   to   iterate   through   all   the   values   in   the   list   and   find   the   smallest
value.   Print   the   smallest   value.   Do   this   without   using   JavaScript’s   built-in   min
function.

c) Use   a   new   for-loop   corresponding   to   problem   b,   but   find   and   print   the   largest
value.   */

const list=[ 6 ,4 ,1,7,2 ,8 ,3 ,9 ,11 ];
var    smallest=list[ 0 ];
for    (num in list){
       if (num < smallest)       {
         smallest =list[num];
       }
}
console .log(smallest);
