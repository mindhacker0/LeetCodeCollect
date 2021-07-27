/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
 var xorOperation = function(n, start) {
    let result;
    for(let i =0;i<n;i++){
      result^=start+2*i;
    }
    return result;
};
console.log(xorOperation(5,0))