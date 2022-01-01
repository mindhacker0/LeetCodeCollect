/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
*/
var validateStackSequences = function(pushed, popped) {
    let map = new Map;
    for(var i =0;i<pushed.length;i++){
        map.set(pushed[i],i);
        if(pushed[i] === popped[0]){

        }
    }
};
console.log(validateStackSequences([1,2,3,4,5],[4,5,3,2,1]));