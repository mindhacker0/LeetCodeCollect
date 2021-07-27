/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let start0=0,start1=0;
    for(let i=0;i<s.length;i++){
        if(s[i]%2===i%2){
            start1++;
        }else{
            start0++;
        }
    }
    console.log(start0,start1);
};
console.log(minOperations("10"))