/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let pre = 0;
    let maxLen = Math.max(a.length,b.length);
    if(a.length > b.length){
        b = "0".repeat(a.length - b.length)+b;
    }else{
        a = "0".repeat(b.length - a.length)+a;
    }
    let result = [];
    for(var i = maxLen -1;i>=0;i--){
        let h = Number(a[i]) + Number(b[i]) + pre;
        pre = 0;
        if(h >= 2) pre = 1;
        result.unshift(h%2);
    }
    if(pre === 1) result.unshift(1);
    return result.join("");
};
console.log(addBinary("1111","1111"))