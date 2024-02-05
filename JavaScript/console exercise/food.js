/* reate   an   array   called    favoriteFood    with   3   of   your   favorite   dishes   (represented
as   strings).
b)   Print   the   entire   array.
c)   Remove   the   second   element   from   the   array.
d)   Use    .length    to   find   out   how   many   dishes   there   are   in   the   list   now,   and   check
that   there   are   2   pcs.
e)   Print   out   all   the   dishes   left   in   the   food   list,   but   use   capitalize   so   that   all   the   letters
are   capitalized.   */

var    favoriteFood   =   [ "Pizza" ,    "Ravioli" ,    "Fish" ];
console .log(favoriteFood);
favoriteFood.splice( 1 , 1 );
console .log(favoriteFood); // TO SHOW .splice() IS INCLUSIVE OF STARTING INDEX
var    totDishes   =   favoriteFood.length;
console .log( "Total   dishes   left   in   the   list   is" ,   totDishes);
console .log(favoriteFood[ 0 ].toUpperCase());
console .log(favoriteFood[ 1 ].toUpperCase());
console .log(favoriteFood);
