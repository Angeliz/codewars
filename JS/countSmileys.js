// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :] 

// Example cases:

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
function countSmileys(arr) {
  var count=0;
  for (var i=0;i<arr.length;i++) {
    if (arr[i].length==2) {
      if ((arr[i].charAt(0)==':' || arr[i].charAt(0)==';') && (arr[i].charAt(1)==')' || arr[i].charAt(1)=='D' )) count++;
    }
    if (arr[i].length==3) {
      if ((arr[i].charAt(0)==':' || arr[i].charAt(0)==';') && (arr[i].charAt(1)=='-' || arr[i].charAt(1)=='~') && (arr[i].charAt(2)==')' || arr[i].charAt(2)=='D' )) count++;
    } 
  }
  return count;
}
//orz
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}