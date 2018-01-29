// Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

// s1 = "A aaaa bb c"

// s2 = "& aaa bbb c d"

// s1 has 4 'a', 2 'b', 1 'c'

// s2 has 3 'a', 3 'b', 1 'c', 1 'd'

// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

// Hopefully other examples can make this clearer.

// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

function mix(s1, s2) {
   let one = s1.replace(/[^a-z]/g, '').split('').sort();
   let two = s2.replace(/[^a-z]/g, '').split('').sort();
   let obj1 = {};
   let obj2 = {};
  
  for(let i = 0; i < one.length; i++){
    if(!obj1.hasOwnProperty([one[i]])){
      obj1[one[i]] = 1;
    } else {
      obj1[one[i]] += 1;
    }
  }
  
  for(let j = 0; j < two.length; j++){
    if(!obj2.hasOwnProperty([two[j]])){
      obj2[two[j]] = 1;
    } else {
      obj2[two[j]] += 1;
    }
  }
  
   let arr1 = [];
   let arr2 = [];
   let same = [];
   for(let k in obj1){
     if(obj2.hasOwnProperty(k)){
       if(obj1[k] > obj2[k]){
         arr1.push("1:" + k.repeat(obj1[k]));
       } else if(obj1[k] < obj2[k]){
         arr2.push("2:" + k.repeat(obj2[k]));
       } else if(obj1[k] == obj2[k] && obj1[k] > 1){
         same.push("=:" + k.repeat(obj1[k]));
       }
     } else if(obj1[k] > 1){
       arr1.push('1:' + k.repeat(obj1[k]))
     }
   }
   
   for(let k in obj2){
     if(!obj1.hasOwnProperty(k) && obj2[k] > 1){
       arr2.push('2:' + k.repeat(obj2[k]));
     } 
   }
   arr1 = arr1.sort()
   arr2 = arr2.sort()
   same = same.sort()
   let result = [];
   for(let z = 7; z >= 4; z--){
     let af = arr1.filter(v => v.length == z)
     let bf = arr2.filter(v => v.length == z)
     let cf = same.filter(v => v.length == z)
     if(af.length != 0){
       result.push(...af);
     } 
     if(bf.length != 0){
       result.push(...bf)
     } 
     if(cf.length != 0){
       result.push(...cf);
     }
   }
   
   return result.join('/');
 }