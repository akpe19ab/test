//Definerer en variabel, size, som 8.
var size = 8;
//definerer en variabel, board, som ingenting.
var board = "";
/*Et for loop fra y=0 til 8.
For hver count i for loopet eksekveres hele det indre for loop og der logges en newline character.
*/
for (var y = 0; y < size; y++) {
  /*Indre for loop, som tæller fra x=0 til 8.
  For hver count i for loopet adderes x-værdien til den 'ydre' y-værdi
  og der tages remainder(2) af resultatet og adderer to forskellige strings til board-variablen, alt efter resultatet.
  */
  for (var x = 0; x < size; x++) {
    //en if statement som adderer en string " " til board-variablen hvis remainder(2) af resultatet er 0.
    if ((x + y) % 2 == 0)
      board += " ";
    //else statement som adderer # til board-variablen hvis ikke remainder er 0.
    else
      board += "#";
  }
  // Skifter linje, hver gang det 'ydre' for loop kører igennem én gang.
  board += "\n";
}
// Printer board, som enten vil være " " eller "#" jf. det indre for loop.
console.log(board);