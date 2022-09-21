//670. 最大交换
/**
 * @param {number} num
 * @return {number}
 */
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
var maximumSwap = function(num) {
    let arr = [];
    let order = [];
    let numArr = new Array(10).fill(0);//考虑到数值范围0-9，桶排序最快O(n)
    let copyNum = num;
    while(num){
        let bit = num%10;
        numArr[bit]++;
        arr.unshift(bit);
        num = ~~(num/10);
    }
    for(let i=0;i<numArr.length;i++){
        for(let j=0;j<numArr[i];j++){
            order.unshift(i);
        }
    }
    console.log(arr,order);
    for(let i=0;i<order.length;i++){//最大的数是所有数字逆序排列
        if(arr[i]!==order[i]){
            let max = i+1;
            for(let j=i+1;j<arr.length;j++){
                if(arr[j]>=arr[max]) max = j;
            }
            swap(arr,i,max);
            return Number(arr.join(""));
        }
    }
    return copyNum;//如果没有交换，本身已经是最大数了，可以不交换
};
console.log(maximumSwap(98368));