// complete the function
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}

//
function solution(string){
  return string.replace(/[A-Z]/g, function(c){return " " + c;});
}