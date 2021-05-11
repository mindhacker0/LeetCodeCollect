/**
* @param {number} x
* @param {number} y
* @return {number}
*/
// var hammingDistance = function(x, y) {
//     var diff = x^y,count1 = 0;
//     while(diff){
//         if(diff & 1 === 1){
//             count1 ++;
//         }
//         diff >>= 1;
//     }
//     return count1;
// };
//布莱恩·科尼根
var hammingDistance = function(x, y) {
    var diff = x^y,count1 = 0;
    while(diff){
        count1 += 1;
        diff = diff & (diff - 1);
    }
    return count1;
};
console.log(hammingDistance(1,4));