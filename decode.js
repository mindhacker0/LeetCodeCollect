/**
 * @param {number[]} encoded
 * @return {number[]}
 */
 var decode = function(encoded) {
    let total = 0;
    for(let i=1;i<=encoded.length+1;i++){
        total^=i;
    }
    let odd = 0;
    for(let i = 1;i<encoded.length;i+=2){
        odd^=encoded[i];
    }
    let result=[];
    result.push(total^odd);
    for(let j=0;j<encoded.length;j++){
        result.push(result[j]^encoded[j]);
    }
    return result;
};
console.log(decode([7,5,6,11,14,15,11,6]));