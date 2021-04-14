/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    function toReverseBin(n){
        let arr = new Array(32).fill(0);
        let p=0;
        while(n>0){
            arr[p]=n%2;
            p++;
            n=~~(n/2);
        }
        return arr;
    }
    let arr = toReverseBin(n);
    let result = 0,multi = 0;
    for(let i=31;i>=0;i--){
        result += arr[i]*(2**multi);
        multi++;
    }
    console.log(result);
    return result;
};
console.log(reverseBits(4294967293));