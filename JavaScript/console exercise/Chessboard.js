/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height. */

let BoardSize = 8;
let CellColor ="";
for (let Col = 0; Col < BoardSize; Col++)
{
 for (let Row = 0; Row <BoardSize; Row++)
 {
   if ((Col + Row) % 2 == 0)
    { CellColor += "□";}
   else {CellColor += "■";}
  }
   CellColor += "<br>";
 }
document.write(CellColor);

/*
let BoardSize = 8;
Row=0;
while (Row <= BoardSize)
{
  if (Row % 2 == 0)
  {
    CellColor = "w";
    for (var Col = 0; Col < BoardSize; Col++)
    {
     document.write(CellColor);
    }
  }
  else
  {
    CellColor = "#";
    document.write(CellColor);
    Col++;
  }
  Row ++;
  document.write("<br>");
  let CellColor= "";
}
*/





// document.write( );
