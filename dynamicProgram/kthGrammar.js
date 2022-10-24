//779. 第K个语法符号
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
*/
var kthGrammar = function(n, k) {
    function recur(index,k){
        if(index===1) return 0;
        let ans = recur(index-1,(k-1)>>1);
    }
    recur(n,k);
};
console.log(kthGrammar(2,2));