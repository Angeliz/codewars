// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

//法1
function findNextSquare(sq) {
  var perfectNumber = Math.sqrt(sq);
  var result=false;
    if (perfectNumber%1==0){
       result= true;
    }
    else{
       result= false;
    }
    if (result==true){
      return (perfectNumber+1)*(perfectNumber+1);
    }
    else{
      return -1;
    }
}

//法2
function findNextSquare(sq) {
  var root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}

//法3
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}