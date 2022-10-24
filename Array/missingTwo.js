//面试题 17.19. 消失的两个数字
/**
 * @param {number[]} nums
 * @return {number[]}
*/
var missingTwo = function(nums) {//哈希
    let arr = new Array(30003).fill(0);
    for(let i=0;i<nums.length;i++){
        arr[nums[i]]++;
    }
    let miss = [];
    for(let i=1;i<=nums.length+2;i++){
        if(arr[i]===0) miss.push(i);
    }
    return miss;
};
var missingTwo = function(nums){//异或
    let xor = 0;
    let len = nums.length;
    for(let i=1;i<=len+2;i++){
        if(i<=len) xor^=nums[i-1];
        xor^=i;
    }
    console.log(xor);
    let diff = xor&-xor;
    let a=0,b=0;
    for(let i=1;i<=len+2;i++){
        if(i<=len){
            if(nums[i-1]&diff) a^=nums[i-1];
            else b^=nums[i-1];
        }
        if(i&diff) a^=i;
        else b^=i;
    }
    return [a,b];
};
var missingTwo = function(nums){
    let len = nums.length;
    let total = (1+len+2)*(len+2)/2;
    for(let i=0;i<len;i++){
        total-=nums[i];
    }
    console.log(total);
    let mid = ~~(total/2);
    let a = (1+mid)*(mid)/2;
    for(let i=0;i<len;i++){
        if(nums[i]<=mid){
          a-=nums[i];
        }
    }
    return [a,total-a]
}
// console.log(missingTwo([1]))
console.log(missingTwo([2,3]))