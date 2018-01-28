// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0..255 (included).

// Input to the function is guaranteed to be a single string.

// Examples
// // valid inputs:
// 1.2.3.4
// 123.45.67.89

// // invalid inputs:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Note: leading zeros (e.g. 01.02.03.04) are considered not valid in this kata!

function isValidIP(str) {
  var arr=str.split(".");
  if(arr.length!=4){
    return false;
  }
  arr.forEach(function(item){
    if(item[0]=='0'){
      return false;
    }
    item=parseInt(item,10);
    if(item<1||item>255){
      return false;
    }
  });
  return true;
}
//
function isValidIP(str) {
  var lst = str.split(".");
  if (lst.length != 4) { return false; }
  for (var i = 0; i < 4; i++){
    var it = lst[i], pit = parseInt(it);
    if (pit.toString() != it || pit > 255 || pit < 0) { return false; }
  }
  return true;
}