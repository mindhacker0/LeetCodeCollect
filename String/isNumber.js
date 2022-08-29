//剑指 Offer 20. 表示数值的字符串
/**
 * @param {string} s
 * @return {boolean}
*/
var isNumber = function(s) {
    s=s.replace(/\s+/g,"");
    let len = s.length,index = 0;
    let dot = false;
    let esuffix = false;
    let result = false;
    function start(index){
        if(s[index]==="+"||s[index]==="-") return sign;
        if(s[index]===".") return decimal;
        let code = s.charCodeAt(index);
        if(code>=48 && code<=57){
            return number;
        }
        return null;
    }
    function sign(){console.log("sign",s[index]);
        index = index+1;
        if(index>=len) return null;
        let code = s.charCodeAt(index);
        if(code>=48 && code<=57){
            return number;
        }
        return null;
    }
    function number(){console.log("number",s[index]);
        index = index+1;
        if(index>=len) return end;
        if(s[index]==="e"||s[index]==="E") return eSign;
        if(s[index]==="."&&dot===false&&esuffix===false) return decimal;//只能有一个小数点,自然数不能接小数点
        let code = s.charCodeAt(index);
        if(code>=48 && code<=57){
            return number;
        }
        return null;
    }
    function decimal(){console.log("decimal",s[index]);
        index = index+1;
        dot = true;
        if(index>=len) return null;
        let code = s.charCodeAt(index);
        if(code>=48 && code<=57){
            return number;
        }
        return null;
    }
    function eSign(){console.log("eSign",s[index]);
        index = index+1;
        esuffix = true;
        if(index>=len) return null;
        if(s[index]==="+"||s[index]==="-") return sign;
        let code = s.charCodeAt(index);
        if(code>=48 && code<=57){
            return number;
        }
        return null;
    }
    function end(){
        console.log("valid");
        result = true;
        return null;
    }
    let fn = start(0);
    while(typeof fn === "function"){
        fn = fn();
    }
    return result;
};
console.log(["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"].map((val)=>isNumber(val)));
console.log(["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"].map((val)=>isNumber(val)));
console.log(isNumber("1 "));