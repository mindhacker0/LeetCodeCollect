/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumbers = function(nums){
    let sum = 0;
    for(let i of nums){
        sum^=i;
    }
    let add = 1;
    while(!(sum & 1)){
        sum=sum>>1;
        add<<=1;
    }
    console.log(add);
    let a = 0, b =0;
    for(let i of nums){
        if((i^add) >= i){
            console.log(i^add,i);
            a^=i;
        }
        else b^=i;
    }
   return [a,b]
};
console.log(singleNumbers([4,1,4,6]));
console.log(singleNumbers([6,2,3,3]));