//剑指 Offer 45. 把数组排成最小的数
/**
 * @param {number[]} nums
 * @return {string}
 */
 var minNumber = function(nums) {//sort排序（5.16%）
    let cache = {};
    function getNum(val){
        if(val === 0) return [0];
        if(cache[val]) return cache[val];
        let arr = [];
        while(val){arr.unshift(val%10);val=~~(val/10);}
        cache[val] = arr;
        return arr;
    }
    nums.sort((a,b)=>{
        let max = a,min = b;
        if(b>a){ max = b;min =a;}
        let index = 0;
        let arrMax = [...getNum(max),...getNum(min)],arrMin = [...getNum(min),...getNum(max)];
        while(index<arrMax.length){
            if(arrMax[index]<(arrMin[index]||0)) return b-a;
            else if(arrMax[index]>(arrMin[index]||0)) return a-b;
            index++;
        }
        return b-a;
    });
    //console.log(nums);
    return nums.join("");
};