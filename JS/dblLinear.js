// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// #Task: Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u.

// #Example: dbl_linear(10) should return 22

// #Note: Focus attention on efficiency

//排序的方法，效率比较低，数据一大就崩了orz
// function dblLinear(n) {
//     // your code
//     var arr=[1];
//     var i=0;
//     while(i<n+1){
//       if(arr.indexOf(arr[i]*2+1)==-1){
//         arr.push(arr[i]*2+1);
//       }
//       if(arr.indexOf(arr[i]*3+1)==-1){
//         arr.push(arr[i]*3+1);
//       }
//       i++;
//        arr.sort(function(a,b){
//         return a-b;
//       });
//     }
//     return arr[n];
// }


// 需要去排序本身就是个误区，只要有涉及到数组元素查找、数组元素排序；n值一大必然会导致性能差，换一种思考方式就完全不一样了
// 1、既然产生数值（2x+1 或 3x+1）必须以升序数组元素值为基础，那么可以考虑push数组时就是有序的
// 2、每次循环只需要把（2yi + 1）、(3zi+1)中较小值给数组即可。而yi和zi分别产生此次较小值的数组index，每产生一个较小值对应数组index就加1即可。
// 3、只需要让数组长度<=n+1即可取的所需值
function dblLinear(n) {
    // your code
    var arr = [1];
    var y,z;
    var yi=0,zi=0;
    while(arr.length <n+1){
      y = 2 * arr[yi] + 1;
      z = 3 * arr[zi] + 1;
      if(y>z){
        arr.push(z);
        zi++;
      }else{
        arr.push(y);
        yi++;
      }
    }
    return arr[n];
}