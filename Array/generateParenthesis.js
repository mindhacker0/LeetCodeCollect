//22. 括号生成
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = [];
    function trace(arr,dep,left){
        if(dep===0 && left===n){
            //console.log(arr.join(""));
            ans.push(arr.join(""));
        }
        if(left<n){
          arr.push("(");
          trace(arr,dep+1,left+1);
          arr.pop();
        }
        if(dep>0){
            arr.push(")");
            trace(arr,dep-1,left);
            arr.pop();
        }
    }
    trace([],0,0)
    return ans;
};
console.log(generateParenthesis(3));