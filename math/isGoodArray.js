//1250. 检查「好数组」
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGoodArray = function(nums) {
    function gcd(a,b){//欧几里得
       if(b>a) return gcd(b,a);
        while(b!==0){
            let temp = a%b;
            a = b;
            b = temp;
        }
        return a;
    }
    let next = nums[0];
    for(let i=1;i<nums.length;++i){
        next = gcd(next,nums[i]);
        if(next === 1) return true;
    }
    return next===1;
};