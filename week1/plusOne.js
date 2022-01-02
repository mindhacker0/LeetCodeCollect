/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let exp = 1;//进位，现在假设之前有一个进位就是加一
    for(var i = digits.length-1;i>=0;i--){
        let sum = digits[i]+exp;
        digits[i] = sum%10;//加法结果
        exp = ~~(sum/10);//加法进位
    }
    if(exp === 1){digits.unshift(1)}//结束后还有进位，需要前面加上1
    return digits
};
console.log(plusOne([0]));
console.log(plusOne([9]));