//777. 在LR字符串中交换相邻字符
/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
*/
var canTransform = function(start, end) {
    let stack = [];
    for(let i=0;i<start.length;i++){
        if(start[i] === "R") stack.push(i);
        if(end[i]==="R"){
            if(stack.length===0) return false;
            stack.pop();
        }
    }
    if(stack.length) return false;
    stack = [];
    for(let i=start.length-1;i>=0;i--){
        if(start[i] === "L") stack.push(i);
        if(end[i]==="L"){
            if(stack.length===0) return false;
            stack.pop();
        }
    }
    if(stack.length) return false;
    return true;
};                                    
console.log(canTransform("RXXLRXRXL","XRLXXRRLX"));
console.log(canTransform("XXXXXLXXXX","LXXXXXXXXX"))
console.log(canTransform("XXXXXLXXXX","XXXXXLXXXX"))
console.log(canTransform("XXXXXRXXXX","XXXXXXXXXR"))
console.log(canTransform("XXXXXRXXXX","XXXXXRXXXX"))
console.log(canTransform("XLXRRXXRXX","LXXXXXXRRR"))
console.log(canTransform("LXXLXRLXXL","XLLXRXLXLX"))
console.log(canTransform("RL","LR"))