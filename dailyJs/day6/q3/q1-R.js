// l1> split behavior -> sokit if he find else just wrap in array
const removeAllSpace = str => {
  console.log(
    str.split('')
  ) /*  
  
  - //** split(" ") >> find " " & remove " " & wrap into array item ===> do this in loop and return them inside store array
  
  ! here after removing space/" " nothing remaning so item has ==> no space string  
  */
  console.log(
    str.split(' ').join('')
  ) /*
 - convert into string 
 - //** join("") >> remove  comma && replace it with given case ""/nothing from string 
 
 
 */
  return str.split(' ').join('')
}

// join : empty space / nothing ==> so string mai not found

console.log(removeAllSpace('       We are     neoGrammers   '))
