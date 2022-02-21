/**
 * @param {string[]} tokens
 * @return {number}
*/
var evalRPN = function(tokens) {
    let stack = [];
    let op = {
        "+":(a,b)=>(Number(b)+Number(a)),
        "-":(a,b)=>(Number(b)-Number(a)),
        "*":(a,b)=>(Number(b)*Number(a)),
        "/":(a,b)=>~~(Number(b)/Number(a)),
    }
    for(let i=0;i<tokens.length;i++){
        if(op[tokens[i]]){
            stack.push(op[tokens[i]](stack.pop(),stack.pop()));
        }else{
            stack.push(tokens[i]);
        }
        console.log(stack);
    }
    return stack[0];
};
let tokens = ["4","13","5","/","+"]
console.log(evalRPN(tokens));