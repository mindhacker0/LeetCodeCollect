/**
 * @param {string} s
 * @return {number}
*/
var calculate = function(s) {
    let stack = [];
    for(let i of s){
        if(i===")"){
            let express = "";
            while(stack[stack.length-1]!=="("){
                express=stack.pop()+express;
            }
            stack.pop();
            stack.push(calc(express));
        }else if(i!==" "){
            stack.push(i);
        }
    }
    function calc(str){  
        let ans=0;
        let regExp = /(?<number>(\-)?[0-9]+)|(?<operator>[\+\-])/g;//
        let parse = [];
        while((s=regExp.exec(str))!==null){
            if(typeof s.groups.number!=="undefined"){
                parse.push({
                    type:"number",
                    value:Number(s.groups.number)
                });
            }
            if(typeof s.groups.operator!=="undefined"){
                parse.push({
                    type:"operator",
                    value:s.groups.operator
                });
            }
        }
        console.log(parse,str);
        for(let i=0;i<parse.length;i++){
            if(i>0 && parse[i-1].value === "-" && parse[i].type === "number"){
                ans-=parse[i].value;
            }else if(parse[i].type === "number"){
                ans+=parse[i].value;
            }
        }
        return ans;
    }
    return calc(stack.join(""))
};
//console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
console.log(calculate("2-(5-6)"));