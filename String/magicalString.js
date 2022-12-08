//481 神奇的字符串
/**
 * @param {number} n
 * @return {number}
*/
var magicalString = function(n) {
    let arr = [1,2,2];
    let left = 1,right= 2;
    let count = 1;
    while(right<n-1){
        left++;
        let next = arr[right]===1?2:1;
        for(let i=0;i<arr[left];i++){
            if(right>=n-1) break;
            arr.push(next);
            right++;
            count+=next===1;
        }

    }
    console.log(arr);
    return count;
};
console.log(magicalString(6));