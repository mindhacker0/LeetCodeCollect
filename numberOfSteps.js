/**
* @param {number} num
* @return {number}
*/
var numberOfSteps = function(num) {
    if(num === 0) return 0;
    var count1 = 0,length = 0;
    while(num){
        if((num & 1) === 1){
            count1++;
        }
        length++;
        num >>= 1;
    }
    return count1 + length -1;
};
console.log(numberOfSteps(1));