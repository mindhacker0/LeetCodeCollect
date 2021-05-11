/**
* @param {number} num
* @return {number}
*/
var findComplement = function(num) {
    var result = 0,muti = 0;
    while(num){
        if((num & 1) === 0){
            result += 2**muti;
        }
        muti++;
        num >>= 1;
    }
    return result;
};
console.log(findComplement(5));