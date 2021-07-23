/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 function sleep(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time);
    });
}
//统计一个数字在排序数组中出现的次数。
var search = async function(nums, target) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0] === target?1:0;
    let len = nums.length;
    let i = 0,j = len-1;
    let times = 0;
    while(i<=j){
        let middle = ~~(i + (j - i)/2);//中间的下标
        if(target === nums[middle]){
            let real = middle;
            while(target === nums[middle]){//往左搜索相等的值
                times++;
                middle--;
            }
            middle = real+1;
            while(target === nums[middle]){//往右搜索相等的值
                times++;
                middle++;
            }
            middle = real;
            break;
        }else if(target < nums[middle]){
            j = middle-1;
        }else{
            i = middle+1;
        }
        console.log(middle,i,j)
        await sleep(200);
    }
    console.log(times)
    return times;
};
console.log(search([5,6], 6));