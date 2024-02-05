/* FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)
*/


let n =0;
while (n < 100)
{
  n++;
  if (n % 5 == 0 && n % 3 == 0)
  {
    console.log("FizzzzzBuzzzz" + "\n");
    n++;
  }
  if (n % 3 == 0)
  {
    console.log("Fizz" + "\n");
    n++;
  }
  if (n % 5 == 0)
  {
    console.log("Buzz" + "\n");
    n++;
  }
  console.log(n + "\n");
}

/* let n = 1;
while (n <= 100)
{
  switch (n)
  {
    case (n % 5 == 0 && n % 3 != 0):
          console.log("FizzzzzBuzzzz" + "\n");
          n++;
          break;
    case (n % 3 == 0):
        console.log("Fizz" + "\n");
          n++;
          break;
    case (n % 5 ==0):
          console.log("Buzz" + "\n");
          n++;
          break;
    default: console.log(n + "\n"); n++;

  }
}
*/
