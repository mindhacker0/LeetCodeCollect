//402. 移掉 K 位数字
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
*/
var removeKdigits = function(num, k) {
    let stack = [];
    let delNum = 0;
    for(let i in num){
        while(stack.length && Number(num[stack[stack.length-1]])>Number(num[i]) && delNum < k){
            let index = stack.pop();
            delNum++;
        }
        stack.push(i);
        //console.log(i,stack);
    }
    while(num[stack[0]]==='0') stack.shift();
    while(delNum < k){stack.pop();delNum++;}
    return stack.length===0?'0':stack.map(i=>num[i]).join("");
};
console.log(removeKdigits("1432219",3));//1219
console.log(removeKdigits("10200",1));//200
console.log(removeKdigits("10",2));//0
console.log(removeKdigits("9",1));//0
console.log(removeKdigits("112",1));//11