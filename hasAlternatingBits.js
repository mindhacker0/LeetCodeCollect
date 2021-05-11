/**
* @param {number} n
* @return {boolean}
*/
var hasAlternatingBits = function(n) {
    let zero = 0,one = 0;
    while(n){
        if((n & 1) === 1){
            one++;
            if(zero === 1) zero--;
        }else{
            zero++;
            if(one === 1) one--;
        }
        if(one>1 || zero > 1){return false;}
        n >>= 1;
    }
    return true;
};
console.log(hasAlternatingBits(5))