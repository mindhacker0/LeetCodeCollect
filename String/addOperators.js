//282. 给表达式添加运算符
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
*/
var addOperators = function(num, target) {//最后再求表达式的值超时，需要在过程中计算
    let arr = {
        "+":(a,b)=>a+b,
        "-":(a,b)=>a-b,
        "*":(a,b)=>a*b,
        // "/":(a,b)=>b===0?0:a/b,
    };
    let result = [];
    function dfs(index,data){
        if(index === num.length){
            console.log(data);
            if(eval(data.join("")) === target){
                result.push(data.join(""));
            }
            return;
        }
        let decimal = 0;
        for(let i=index;i<num.length;i++){
            if(i!==index && decimal==0) continue;
            decimal=decimal*10 + Number(num[i]);
            data.push(decimal);
            if(i!==num.length-1){
                for(let key in arr){
                    data.push(key);
                    dfs(i+1,data);
                    data.pop();
                }
            }else{
                dfs(i+1,data);
            }
            data.pop();
        }
    }
    dfs(0,[]);
    return result;
};
//console.log(addOperators("123",6));
console.log(addOperators("232",8))
console.log(addOperators("105",5))