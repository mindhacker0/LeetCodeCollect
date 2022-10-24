//201. 数字范围按位与
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
*/
var rangeBitwiseAnd = function(left, right) {//位移法
    let index = 0;
    while(left<right){
        left>>=1;
        right>>=1;
        index++;
    }
    return left<<index;
};
console.log(rangeBitwiseAnd(1,2147483647));