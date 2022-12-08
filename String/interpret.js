//1678. 设计 Goal 解析器
/**
 * @param {string} command
 * @return {string}
*/
var interpret = function(command) {//replace
    let ans = command.replace(/\(al\)/g,"al");
    ans = ans.replace(/\(\)/g,"o");
    return ans;
};
var interpret = function(command) {//简单状态机
    let inBracket = false,charInBracket = "";
    let ans = "";
    function start(char){
        if(char==="(") return bracketOpen;
        if((char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90)||(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122)){
            ans+=char;
            return plainWord;
        }
        if(char==="$") return end;
    }
    function bracketOpen(char){
        charInBracket = "";
        inBracket = true;
        if(char===")") return bracketSeal;
        if((char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90)||(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122)){
            if(inBracket) charInBracket+=char;
            return plainWord;
        }
        if(char==="$") return end;
    }
    function bracketSeal(char){
        if(charInBracket==="") ans+="o";
        if(charInBracket==="al") ans+="al";
        inBracket = false;
        if(char==="$") return end;
        else return start(char);
    }
    function plainWord(char){
        if(char==="(") return bracketOpen;
        if(char===")") return bracketSeal;
        if((char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90)||(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122)){
            if(inBracket) charInBracket+=char;
            else ans+=char;
            return plainWord;
        }
        if(char==="$") return end;
    }
    function end(){

    }
    let fn = start;
    for(let s of command){
        fn = fn(s);
        console.log(fn);
    }
    fn("$");
    return ans;
}
// console.log(interpret("G()()()()(al)"));
// console.log(interpret("GGG"));
console.log(interpret("()(al)GGG"));