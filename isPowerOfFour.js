/**
* @param {number} n
* @return {boolean}
*/
var isPowerOfFour = function(n) {
    if(n === 1){return true}
    if(n%10!==4 && n%10!==6){return false;}
    //4的幂二进制是表示奇数为1其他位全0，...01010101如果和...10101010(...aa)求位与得0,(n & (n - 1)) === 0。确认其它位都是0
    return ((n & (n - 1)) === 0) && ((n & 0xaaaaaaaa) === 0);
};
console.log(isPowerOfFour(16));