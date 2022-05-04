//1011. 在 D 天内送达包裹的能力
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {//暴力解法
    let minCapacity = -10e7,maxCapacity=0;
    for(let i=0;i<weights.length;i++){
        minCapacity=Math.max(minCapacity,weights[i]);
        maxCapacity+=weights[i];
    }
    for(let i=minCapacity;i<=maxCapacity;i++){//一个个去试
        let day = 0;
        let stock = 0;
        for(let j=0;j<weights.length;j++){
            stock+=weights[j];
            if(stock >= i){
                day++;
                if(stock!==i){
                    stock = weights[j];
                }else{
                    stock = 0;
                }
            }
            //if(i===28) console.log(path,day);
        }
        if(stock!==0) day++;
        //console.log(i,day,stock);
        if(day<=days) return i;
    }
    return maxCapacity;
};
var shipWithinDays = function(weights, days) {//二分法
    let minCapacity = -10e7,maxCapacity=0;
    for(let i=0;i<weights.length;i++){
        minCapacity=Math.max(minCapacity,weights[i]);
        maxCapacity+=weights[i];
    }
    let left = minCapacity,right = maxCapacity;
    while(left<right){
        let capacity = (left+right)>>1;
        let day = 0;
        let stock = 0;
        for(let j=0;j<weights.length;j++){
            stock+=weights[j];
            if(stock >= capacity){
                day++;
                if(stock!==capacity){
                    stock = weights[j];
                }else{
                    stock = 0;
                }
            }
        }
        if(stock!==0) day++;
        if(day>days){
            left=capacity+1;
        }else if(day<=days){
            right=capacity;
        }
    }
    console.log(left,right);
    return left;
};
console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10],5));//15
console.log(shipWithinDays([3,2,2,4,1,4],3));//6
console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10],1));//55
console.log(shipWithinDays([3,3,3,3,3,3],2));//9