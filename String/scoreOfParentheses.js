//856. 括号的分数
/**
 * @param {string} s
 * @return {number}
 */
 var scoreOfParentheses = function(s) {//递归
    function calc(s){
        //console.log(s);
        if(s==="()") return 1;
        else{
            let dep = 0;
            let ans = 0;
            let i=0,prev = 0;
            for(;i<s.length-1;i++){
                if(s[i]==="(") dep++;
                else{
                    dep--;
                    if(dep===0){
                        ans+=calc(s.slice(prev,i+1));
                        prev = i+1;
                    }
                }
            }
            if(ans!==0) ans+=calc(s.slice(prev));
            //ans为0说明中间不能划分子问题，可以剥离
            return ans===0?2*calc(s.slice(1,-1)):ans;
        }
    }
    return calc(s);
};
var scoreOfParentheses = function(s) {//栈
    let stack = [0];
    for(let i=0;i<s.length;i++){
        if(s[i]==="(") stack.push(0);
        else{
            let v = stack.pop();
            stack.push(stack.pop()+Math.max(2*v,1));
        }
    }
    return stack[0];
}
var scoreOfParentheses = function(s) {//()统计深度
    let ans = 0;
    let dep = 0;
    for(let i=0;i<s.length;i++){
        dep+=s[i]==="("?1:-1;
        if(i>0&&s[i-1]==="("&&s[i]===")") ans+=2**dep;
    }
    return ans;
}
console.log(scoreOfParentheses("((()))"))
console.log(scoreOfParentheses("(()(()))"))