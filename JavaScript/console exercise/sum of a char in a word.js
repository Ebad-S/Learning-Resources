



function sumInWord (letter,word) //word counted as an array
{
  let counter= 0 ;
  for (i in word)
  {
     if (word[i] === letter)
     {
        counter++;
      }
    }
    return counter;
}

console.log(sumInWord("a","cacke abc speatula"));





function longerThanNumber(string,number)
{
  let answer=(string.length > number);
  return answer;
}
console.log(longerThanNumber("kahsckjbchb",5));
