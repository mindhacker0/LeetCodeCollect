//592. 分数加减运算
/**
 * @param {string} expression
 * @return {string}
*/
var fractionAddition = function(expression){
    let len = expression.length;
    let ast = [];
    function end(){
        console.log("end");
    }
    function fraction(index,prefix=""){
        prefix+=expression[index];
        if(/[0-9\/]/.test(expression[index+1])){
            return fraction(index+1,prefix);
        }else{
            if(prefix!==""){
                let info = prefix.split("/");
                ast.push({type:"fraction",token:prefix,a:Number(info[0]),b:Number(info[1])});
            }
            if(index+1 === len) return end;
            if(/[\-\+]/.test(expression[index+1])){
                return sign(index+1);
            }
        }
    }
    function sign(index){//符号后面只能接数字，否则报错
        ast.push({type:"sign",token:expression[index]});
        if(/[0-9]/.test(expression[index+1])){
            return fraction(index+1);
        }else{
            throw "unexpected token";
        }
    }
    function gcd(a,b){
        if(b===0) return a;
        if(a===0) return b;
        if(a>b) return gcd(b,a%b);
        else return gcd(a,b%a);
    }
    if(/[\-\+]/.test(expression[0])) sign(0);
    else fraction(0);
    console.log(ast);
    let p = 0,result = [0,1];
    while(p<ast.length){
        let sign = "+";
        if(ast[p].type==="sign"){ sign = ast[p].token;p++;}
        if(ast[p].type==="fraction"){
            let [x,y] = result;
            let {a,b} = ast[p];
            let num = (y*b)/gcd(y,b);
            let next = a*(num/b);
            if(sign === "-") next = -next;
            result = [x*(num/y)+next,num];
            p++;
        }
    }
    //console.log(result);
    let [m,n] = result;
    let num = gcd(Math.abs(m),Math.abs(n));
    result = [m/num,n/num];
    return `${result[0]}/${result[1]}`;
};
// console.log(fractionAddition("-1/2+1/2"));
console.log(fractionAddition("-1/10+1/2+1/3"));
console.log(fractionAddition("1/3-1/2"));
