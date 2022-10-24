//904. 水果成篮
/**
 * @param {number[]} fruits
 * @return {number}
*/
var totalFruit = function(fruits) {//滑动窗口 窗口中只能有两种类型
    let lastMap= new Map;
    let left = 0,right = 0;
    lastMap.set(fruits[0],0);
    let ans = 0;
    while(right<fruits.length){
        while(lastMap.size<=2&&right<fruits.length){
            right++;
            lastMap.set(fruits[right],right);
        }
        console.log(lastMap,left,right-1);
        ans = Math.max(ans,right-left);
        let delKey,min = Infinity;
        lastMap.forEach((val,key)=>{
            if(val<min){min = val;delKey = key;}
        });
        left = lastMap.get(delKey)+1;
        lastMap.delete(delKey);
    }
    return ans;
};
console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]));//5
console.log(totalFruit([1,0,1,4,1,4,1,2,3]));//5
//console.log(totalFruit([0]));