        //参考LeetCode上的回文数，result可以复用，就没有用算法
        var palindromeChainLength = function(n) {
           var count=0;
           while(isPalindrome(n)==false){
             n=n+Number(result);
             count++;
           }
           return count;
        };
        var result="";
        var isPalindrome = function(x) {
            result="";
            var str=x+"";
            // var result="";
            for(var i=str.length-1;i>=0;i--){
                result=result+str[i];
            }
            for(var i=str.length-1;i>=0;i--){
                if(str[i]!=result[i]){
                    return false;
                }
            }
            return true;
        };