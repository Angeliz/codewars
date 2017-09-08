// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```
public class TwoToOne {
    
    public static String longest (String s1, String s2) {
        String s=s1.concat(s2);
        String result="";
        for(int i=(int)'a';i<(int)'a'+26;i++){
          if(s.indexOf((char)i)!=-1){  //包含此字母
            if(result.indexOf((char)i)!=-1){
              continue;
            }
            else{
              result=result.concat(String.valueOf((char)i));
            }
          }
        }
        return result;
    }
}


//   
import java.util.*;

public class TwoToOne {

    public static String longest (String s1, String s2) {
        Set<Character> set = new TreeSet<>();
        for (char c : (s1 + s2).toCharArray()) {
            set.add(c);
        } //hashSet 某些自动排序
        return set.toString().replaceAll("[\\[\\], ]", ""); //字符串显示形式
    }
}