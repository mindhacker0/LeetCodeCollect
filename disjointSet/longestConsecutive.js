//128. 最长连续序列
/**
 * @param {number[]} nums
 * @return {number}
*/
var longestConsecutive = function(nums) {
    let fa = {};
    let len = nums.length;
    for(let i=0;i<len;i++){
        fa[nums[i]] = nums[i];
    }
    //console.log(fa);
    function find(x){
        return x === fa[x]?x:(fa[x] = find(fa[x]));
    }
    function union(x,y){
        let fx = find(x);
        let fy = find(y);
        if(fx!=fy){
            fa[fx] = fy;
        }
    }
    for(let i=0;i<len;i++){
        if(typeof fa[nums[i]+1]!='undefined'){
            union(nums[i]+1,nums[i]);
        }
    }
    let map = {};
    let max = 0;
    for(let i in fa){
        if(typeof map[find(i)] === 'undefined'){
            map[find(i)] = 0;
        }
        map[find(i)]++;
        max = Math.max(max,map[find(i)]);
    }
    console.log(fa);
    return max;
};
// var longestConsecutive  = function(nums) {
//     let min = 10e9;
//     let max = -10e9;
//     let len = nums.length;
//     let arr = [];
//     for(let i=0;i<len;i++){
//         arr[nums[i]] = true;
//         max = Math.max(max,nums[i]);
//         min = Math.min(min,nums[i]);
//     }
//     let seqLen = 0;
//     let maxlen = 0;
//     for(let j = min;j<=max;j++){
//         if(arr[j]===true){
//             seqLen++;
//             maxlen = Math.max(maxlen,seqLen);
//         }else{
//             seqLen = 0;
//         }
//     }
//     console.log(arr);
//     return maxlen;
// }
//console.log(longestConsecutive([0,1,2,4,8,5,6,7,9,3,55,88,77,99,999999999,0]));
console.log(longestConsecutive([100,4,200,1,3,2]));