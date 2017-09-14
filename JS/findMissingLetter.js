// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
Array.prototype.unContains = function (obj) {
  var i = this.length;
  while (i--) {
    if (this[i] === obj) {
      return false;
    }
  }
  return true;
}

function findMissingLetter(array){
  var arrayL=new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')
  var arrayU=[];

  if(/[a-z]/.test(array[0])){
    for (i=0;i<arrayL.length;i++){
      if(arrayL[i]==array[0]){
          var arrays= arrayL.slice(i,i+array.length)
      }
    }
    for (j=0;j<arrays.length;j++){
      if(array.unContains(arrays[j])){
        return arrays[j];
      }
    }
  }

  else{
    for (i=0;i<arrayL.length;i++){
      arrayU[i]=arrayL[i].toUpperCase();
    }
    for (t=0;t<arrayU.length;t++){
      if(arrayU[t]==array[0]){
          var arrays= arrayU.slice(t,t+array.length)
      }
    }
    for (j=0;j<arrays.length;j++){
      if(array.unContains(arrays[j])){
        return arrays[j];
      }
    }
  }
}


//别人的方法
function findMissingLetter(array) {
  var string = array.join("");
  for (var i = 0; i < string.length; i++) {
    if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
      return String.fromCharCode(string.charCodeAt(i) + 1);
    }
  }
}
