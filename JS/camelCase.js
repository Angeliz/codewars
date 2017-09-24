// Write simple .camelCase method (camel_case function in PHP or CamelCase in C#) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase=function(){
  var array=this.toLowerCase().split(" "); 
  for(var i=0;i<array.length;i++){
    var char=array[i].charAt(0);
    array[i] = array[i].replace(char, function replace(char) {  
            return char.toUpperCase();  
    });  
  }
  return array.join("");
}
//
String.prototype.camelCase=function(){
    var arr = this.split(" ");
    arr = arr.map(function(e){
       return e.charAt(0).toUpperCase() + e.substr(1);
          })
    return arr.join("");
}