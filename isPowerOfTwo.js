/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n===1) return true;
    if(n%2===1)  return false;
    while(n!==1){
        console.log(n%2)
        if(n%2 === 1) return false;
        n=n/2;
    }
    return true;
};
console.log(isPowerOfTwo(4))