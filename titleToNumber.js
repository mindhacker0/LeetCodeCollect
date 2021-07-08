/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    var token = columnTitle.split("").map(v=>v.charCodeAt(0)-64).reverse();
    console.log(token);
    let pro = 0,result = 0;
    for(var i in token){
       result += Math.pow(26,pro)*token[i];
       pro++;
    }
    return result;
};
console.log(titleToNumber("ZY"))