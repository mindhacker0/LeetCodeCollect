/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const leftHand = ['(','{','['];
    const rightHand = [')','}',']'];
    const stack = [];
    for(let i in s){
        if(leftHand.includes(s[i]))  stack.push(s[i]);
        if(rightHand.includes(s[i])){
            if(stack.length === 0)  return false;
            if(stack[stack.length-1] === leftHand[rightHand.indexOf(s[i])]){
                stack.pop();
                continue;
            }
            return false;
        }
    }
    if(stack.length > 0 ) return false;
    return true;
};
console.log(isValid("(])"));