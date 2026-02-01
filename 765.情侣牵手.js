/*
 * @lc app=leetcode.cn id=765 lang=javascript
 *
 * [765] 情侣牵手
 */

// @lc code=start
/**
 * @param {number[]} row
 * @return {number}
 */
class DisJointSets{
    constructor(len){
       this.fa = new Array(len);
       for(let i=0;i<len;++i) this.fa[i] = i;
    }
    find(x){
        return x === this.fa[x]?x:(this.fa[x] = this.find(this.fa[x]));
    }
    union(a,b){
        a = this.find(a);
        b = this.find(b);
        if(a!==b){
            this.fa[a] = b;
        }
    }
}
function swap(arr,x,y){
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}
var minSwapsCouples = function(row) {
    const len = row.length;
    const djs = new DisJointSets(len);
    for(let i=0;i<len;i+=2){
        const one = 
        djs.union(row[i],row[i-1]);
        
    }
    
};
console.log(minSwapsCouples([0,2,4,6,1,3,5,7]));//3
console.log(minSwapsCouples([0,2,3,1]));//3
// @lc code=end

