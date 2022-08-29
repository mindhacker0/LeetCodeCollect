/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
*/
var validateStackSequences = function(pushed, popped) {
    let set = new Set;
    let stack = [];
    var i =0;
    for(;i<pushed.length;i++){
        set.add(pushed[i]);
        stack.push(pushed[i]);
        if(pushed[i] === popped[0]){
           break;
        }
    }
    for(let j=0;j<popped.length;j++){
        if(stack[stack.length-1] === popped[j]){
            stack.pop();
        }else if(!set.has(popped[j])){
            while(popped[j]!==pushed[i]&&i<pushed.length){
                i++;
                set.add(pushed[i]);
                stack.push(pushed[i]);
            }
            stack.pop();
        }else{
            console.log(popped[j]);
            return false;
        }
    }
    return true;
};
console.log(validateStackSequences([1,2,3,4,5],[4,5,3,2,1]));
console.log(validateStackSequences([0,2,1],[0,1,2]));
console.log(validateStackSequences([4,0,1,2,3],[4,2,3,0,1]));