// In English and programming, groups can be made using symbols such as "()" and "{}" that change meaning. However, these groups must be closed in the correct order to maintain correct syntax.

// Your job in this kata will be to make a program that checks a string for correct grouping. For instance, the following groups are done correctly:

// ({})
// [[]()]
// [{()}]
// The next are done incorrectly

// {(})
// ([]
// [])
// A correct string cannot close groups in the wrong order, open a group but fail to close it, or close a group before it is opened.

// Your function will take an input string that may contain any of the symbols "()" "{}" or "[]" to create groups.

// It should return True if the string is empty or otherwise grouped correctly, or False if it is grouped incorrectly.
 /*链栈的JS实现*/
 /*链栈的JS实现*/
function LinkedStack(){
        //节点结构定义
        var Node = function(element){
          this.element = element;
          this.next = null;
        }

    var length = 0,  top; //栈顶指针
    //压栈操作
    this.push = function(element){
        var node = new Node(element),  current;
        if(!top){
            top = node;
            length++;
            return true;
        }else{
            node.next = top;
            top = node;
            length++;
            return true;
        }
    }
        //退栈操作
    this.pop = function(){
        var current = top;
        if(top){
            top = current.next;
            current.next = null;
            length--;
            return current;
        }else{
            return 'null stack';
        }
    }
        //获取栈顶节点
    this.top = function(){
        return top;
    }
        //获取栈长
    this.size = function(){
        return length;
    }

    this.toString = function(){
        var string = '',
            current = top;

        while(current){
            string += current.element;
            current = current.next;
        }

        return string;
    }
        //清空栈
    this.clear = function(){
        top = null;
        length = 0;

        return true;
    }
}
 function groupCheck(s){
   var stack=new LinkedStack();

   for(var i=0;i<s.length;i++){
     if(((s.charAt(i)==")")&&(stack.top().element=="("))||((s.charAt(i)=="}")&&(stack.top().element=="{"))||((s.charAt(i)=="]")&&(stack.top().element=="["))){
       stack.pop();
     }
     else{
       stack.push(s.charAt(i));
     }
     // console.log(stack.top().element);
     // console.log(stack.toString());
   }
    if(stack.size()!=0){
     // return false;
     console.log(stack.toString());
    }
    else{
      // return true;
      console.log("ok");
    }
 }
 groupCheck("[({)]");
//直接用正则表达式
 function groupCheck(s){
   var r = /\{\}|\[\]|\(\)/;
   while(r.test(s))
     s = s.replace(r, '');
   return !s.length;
 }
 
