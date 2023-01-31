//1814. 统计一个数组中好对子的数目
/**
 * @param {number[]} nums
 * @return {number}
*/
function reverse(num){//lgn
    let rv = 0;
    while(num){
        rv*=10;
        rv+=num%10;
        num = Math.floor(num/10);
    }
    return rv;
}
var countNicePairs = function(nums) {
    let sts = new Map,pair =  0;
    for(let i=0;i<nums.length;i++){
        let num = reverse(nums[i]) - nums[i];
        let count = sts.get(num);
        if(typeof count==="undefined") count = 0;
        pair = (pair+count)%1000000007;
        sts.set(num,count+1);
    }
    return pair;
};
console.log(countNicePairs([42,11,1,97]));
console.log(countNicePairs([13,10,35,24,76]));