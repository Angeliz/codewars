// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
function accum(s) {
  var myArray=new Array();
  for(var i=0;i<s.length;i++){
    var strU=s.charAt(i).toUpperCase();
    var strL=s.charAt(i).toLowerCase();
    var strLn="";
    for(var j=1;j<=i;j++){
      strLn=strLn+strL;
    }
    myArray[i]=strU+strLn;
  }
  return myArray.join('-');
}

function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}