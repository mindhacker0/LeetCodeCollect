/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
    while(b){
        let add = a^b;
        let carry = (a&b)<<1;
        a = add;
        b = carry;
    }
    return a;
};
console.log(add(1,2));