//1775. 通过最少操作次数使数组的和相等
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
*/
var minOperations = function(nums1, nums2) {
    let lo =10e4,hi = 100;//收敛温度，初始温度
    let dec = 0.98,times = 100;//衰减系数，迭代次数
    function calc(){//估值函数
        let sum1 = 0,sum12 = 0;
        for(let i=0;i<nums1.length;i++) sum1+=nums1[i];
        for(let i=0;i<nums2.length;i++) sum12+=nums2[i];
        return Math.abs(sum12 - sum1);
    }
    for(let t = hi;t>lo;t*=dec){//外层温度
        for(let k=0;k<times;k++){
            let pre = calc();
            let num = Math.random()>0.5?nums2:nums1;
            let index = Math.floor(Math.random()*num.length);
            let preVal = num[index];
            num[index] = Math.ceil(Math.random()*6);
            let cur = calc();
            let delta = cur - pre;
            if(delta>=0 && Math.exp(-delta/t)<=Math.random()) num[index] = preVal;//以一定概率恢复
        }
    }
};
var minOperations = function(nums1, nums2) {//贪心+哈希
    let frag1 = new Array(7).fill(0),frag2 = new Array(7).fill(0);
    let sum1 = 0,sum2 = 0;
    for(let i=0;i<nums1.length;i++){sum1+=nums1[i];frag1[nums1[i]]++;}
    for(let i=0;i<nums2.length;i++){sum2+=nums2[i];frag2[nums2[i]]++;}
    let times = 0;
    console.log(sum1,sum2);
    if(sum1<sum2){
        let delta = sum2 - sum1;
        let arr = new Array(7).fill(0);
        for(let i=1;i<=6;i++){
            while(frag1[i]>0){
                arr[6-i]++;
                frag1[i]--;
            }
        }
        for(let i=6;i>=1;i--){
            while(frag2[i]>0){
                arr[i-1]++;
                frag2[i]--;
             }
        }
        for(let i=6;i>=1;i--){
            while(arr[i]>0 && delta>0){
                delta-=i;
                arr[i]--;
                times++;
            }
        }
        if(delta>0) return -1;
    }else{
        let delta = sum1 - sum2;
        let arr = new Array(7).fill(0);
        for(let i=1;i<=6;i++){
            while(frag2[i]>0){
                arr[6-i]++;
                frag2[i]--;
            }
        }
        for(let i=6;i>=1;i--){
            while(frag1[i]>0){
               arr[i-1]++;
               frag1[i]--;
            }
        }
        for(let i=6;i>=1;i--){
            while(arr[i]>0 && delta>0){
                delta-=i;
                arr[i]--;
                times++;
            }
        }
        if(delta>0) return -1;
    }
    return times;
}
//console.log(minOperations([6,6],[1]));
//console.log(minOperations([1,2,3,4,5,6],[1,1,2,2,2,2]));
// console.log(minOperations([5,6,4,3,1,2],[6,3,3,1,4,5,3,4,1,3,4]));//4
// console.log(minOperations([1,2,3,4,5,6],[1,1,2,2,2,2]));//3
console.log(minOperations([1,1,1,1,1,1,1],[6]));