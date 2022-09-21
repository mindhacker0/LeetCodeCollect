//面试题 05.03. 翻转数位
/**
 * @param {number} num
 * @return {number}
*/
var reverseBits = function(num){//双指针
    if(num===-1) return 32;
    let arr = [];
    let index = 32;
    while(index>0){
        arr.unshift(num&1);
        num>>=1;
        index--;
    }
    //console.log(arr);
    let max = 1;
    function maxRage(index){
        let left = index,right = index;
        while(left>0 && arr[left-1]===1) left--;
        while(right<31 && arr[right+1] === 1) right++; 
        return right-left+1;
    }
    for(let i=0;i<32;i++){
        if(arr[i]===0&&arr[i+1]===1){
            max = Math.max(max,maxRage(i));
        }else if(arr[i]===1&&arr[i+1]===0){
            max = Math.max(max,maxRage(i+1));
        }
    }
    return max;
};
var reverseBits = function(num){
    if(num===-1) return 32;
    let cur = 0,max = 1,pre =0;
    for(let i=0;i<32;i++){
        let bit = num & (1<<i);
        if(bit === 0){
            pre = cur;
            cur=0;
        }else{
            cur++;
        }
        max = Math.max(pre+cur+1,max);
    }
    return max;
}
// console.log(reverseBits(1775));
console.log(reverseBits(45725232));