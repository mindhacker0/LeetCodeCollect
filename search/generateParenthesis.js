//22. 括号生成
/**
 * @param {number} n
 * @return {string[]}
*/
var generateParenthesis = function(n) {
    let set = new Set();
    function dfs(prev,p,q){
        if(q-p>0) return;
        console.log(prev);
        if(prev.length === n*2){
            set.add(prev);
        }
        if(p<n) dfs(prev+"(",p+1,q);
        if(q<n) dfs(prev+")",p,q+1);
    }
    dfs("",0,0);
    return Array.from(set);
};
console.log(generateParenthesis(3));