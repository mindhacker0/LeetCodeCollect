//667. 优美的排列 II
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
*/

var constructArray = function(n, k){//[1,2,...,n-k,n,n-k+1,n-1]
    let arr  =[];
    for(let i=1;i<n-k;i++){
        arr.push(i);
    }
    for(let i=n-k,j=n;i<=j;i++,j--){
        arr.push(i);
        if(i!==j) arr.push(j);
    }
    return arr;
};