/*
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
37
It may be useful to know that you can find the length of a string by writing
.length after it.
let abc = "abc";
console.log(abc.length);
// → 3
*/
let TotalRow = 7;
var Row = 0;
var CharToPrint = "#";
while (Row <= TotalRow)
{
    console.log(CharToPrint+ "\n");
    CharToPrint += "#";
    Row = CharToPrint.length;
}
/*
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
37
It may be useful to know that you can find the length of a string by writing
.length after it.
let abc = "abc";
console.log(abc.length);
// → 3
*/

/* var NumRow = 7;
  for (row=0; row < NumRow; row++)
  {
    var CharToPrint = "#";
    for (var Col=0; Col <row; Col++)
    {
      CharToPrint += "#";
    }
    console.log(CharToPrint + "\n");
  } THIS BLOCK FROM IVAN AND WORKING !!!
*/
