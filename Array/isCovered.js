//1893. 检查是否区域内所有整数都被覆盖
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
*/
var isCovered = function(ranges, left, right){
    if(ranges.length === 0) return false;
    let sign = BigInt(0);
    for(let i=0;i<ranges.length;i++){
        sign|=BigInt(1n<<BigInt(ranges[i][1]+1)) - BigInt(1n<<BigInt(ranges[i][0]));
    }
    let cmp = BigInt(1n<<BigInt(right+1)) - BigInt(1n<<BigInt(left));
    console.log(sign)
    return (sign&cmp) === cmp;
};
console.log(isCovered([[37,49],[5,17],[8,32]],29,49));