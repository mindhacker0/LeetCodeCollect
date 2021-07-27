/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    function toBin(n){
        let result =[];
        while(n>0){
            result.push(n%2);
            n=~~(n/2);
        }
        return result;
    }
    return toBin(n).reduce((pre,now)=>{ return pre+now;},0);
};
console.log(hammingWeight(0b00000000000000000000000000001011))