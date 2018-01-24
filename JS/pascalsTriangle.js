// #Pascal's Triangle

// Pascal's Triangle

// Wikipedia article on Pascal's Triangle: http://en.wikipedia.org/wiki/Pascal's_triangle

// Write a function that, given a depth (n), returns a single-dimensional array representing Pascal's Triangle to the n-th level.

// For example:

// pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]

function pascalsTriangle(numRows) {
  //return a flat array representing the values of Pascal's Triangle to the n-th level
	var result=[];             //声明一维数组        
	for(var i=0;i<numRows;i++){
	    result[i]=[];        //声明二维数组
	}
    if(numRows>=2){
        result[0][0]=1;
        result[1][0]=1;
        result[1][1]=1;
        for(var i=2;i<numRows;i++){
            result[i][0]=1;
            result[i][i]=1;
            for(var j=1;j<i;j++){
                result[i][j]=result[i-1][j-1]+result[i-1][j];
            }
        }
    }
    if(numRows==1){
        result[0][0]=1;
    }
    var arr=[];
    for(let i=0;i<numRows;i++){
      for(let j=0;j<result[i].length;j++){
        arr.push(result[i][j]);
      }
    }
    return arr;
}

//
function pascalsTriangle(n) {
  var pascal = [];
  var idx = 0;
  
  for ( var i = 0; i < n; i++ ) {
    idx = pascal.length - i;
    for ( var j = 0; j < i+1; j++ ) {
      if ( j === 0 || j === i ) {
        pascal.push(1);
      } else {
        pascal.push( pascal[ idx+j ] + pascal[ idx+j-1 ] );
      }
    }
  }
  return pascal;
}