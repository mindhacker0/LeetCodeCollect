/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
   let tokens = [
    {key:"I",value:1},
    {key:"V",value:5},
    {key:"X",value:10},
    {key:"L",value:50},
    {key:"C",value:100},
    {key:"D",value:500},
    {key:"M",value:1000},
    ];
    let prevToken,result = 0;
    for(let i in s){
        result += tokens.filter(val=>val.key===s[i])[0].value;
        if(prevToken === "I" && ~["V","X"].indexOf(s[i])){
            result-=2;
        }
        if(prevToken === "X" && ~["L","C"].indexOf(s[i])){
            result-=20;
        }
        if(prevToken === "C" && ~["D","M"].indexOf(s[i])){
            result-=200;
        }
        prevToken = s[i];
    }
    return result;
};
console.log(romanToInt("IX"));