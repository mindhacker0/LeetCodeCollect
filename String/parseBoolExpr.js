//1106. 解析布尔表达式
/**
 * @param {string} expression
 * @return {boolean}
*/
var parseBoolExpr = function(expression) {//栈
    let stack = [];
    let level  = 0,levelMax = -1;
    for(let s of expression){
        if(s===",") continue;
        if(s==="("){level++;continue;}
        if(s===")"){level--;continue;}
        levelMax = Math.max(levelMax,level);
        stack.push([s,level]);
    }
    console.log(stack);
    let param = [];
    for(let i=0;i<=levelMax;i++) param[i] = [];
    while(stack.length){
        let [str,level] = stack.pop();
        //普通的参数
        if(str==="t"||str==="f"){param[level].push(str==="t");continue;}
        //运算
        if(str==="!") stack.push([param[level+1][0]?"f":"t",level]);
        else if(str === "&") stack.push([param[level+1].reduce((p,c)=>p&c,true)?"t":"f",level]);
        else if(str === "|") stack.push([param[level+1].reduce((p,c)=>p|c,false)?"t":"f",level]);
        param[level+1]=[];//计算完成清空
        //console.log(param,level,stack)
    }
    console.log(stack);
    return param[0][0];
};
//BNF
//<boolExp>::=<fnExp><EOF>
//<fnExp>::=<symbol>({<fnExp>|<Bool>,})
//<Bool>::='t'|'f'
//<symbol>::='&'|'|'|'!'
var parseBoolExpr = function(expression) {
    let stack = [],tree=null;
    function emit(flow){//收集处理token流
        //onsole.log(flow);
        if(flow.type==="fnexp") stack.push({type:"expression",symbol:flow.token,param:[]});//遇到函数入栈
        if(flow.type==="boolean") stack[stack.length-1].param.push(flow);//遇到参数，给当前的函数加上
        if(flow.type==="bracketseal"){//遇到结束括号，说明函数结束，函数作为上一个节点的参数，要加入参数列表
            let done = stack.pop();
            if(stack.length===0){//最后弹出的是headNode,就是我们的根节点
                tree = done;
            }else{
                stack[stack.length-1].param.push(done);
            }
        }
    }
    function start(char){
        if(char==="&"||char==="|"||char==="!"){
            emit({type:'fnexp',token:char});
            return calcFn;
        }
    }
    function calcFn(char){
        if(char==="("){
            emit({type:'bracketopen',token:char});
            return bracketOpen;
        }
    }
    function bracketOpen(char){
        if(char==="&"||char==="|"||char==="!"){
            emit({type:'fnexp',token:char});
            return calcFn;
        }
        if(char==="t"||char==="f"){
            emit({type:'boolean',token:char});
            return boolParam;
        }
    }
    function boolParam(char){
        if(char===","){
            emit({type:'split',token:char});
            return paramSplit;
        }
        if(char===")"){
            emit({type:'bracketseal',token:char});
            return bracketSeal;
        }
    }
    function paramSplit(char){
        if(char==="&"||char==="|"||char==="!"){
            emit({type:'fnexp',token:char});
            return calcFn;
        }
        if(char==="t"||char==="f"){
            emit({type:'boolean',token:char});
            return boolParam;
        }
    }
    function bracketSeal(char){
        if(char===","){
            emit({type:'split',token:char});
            return paramSplit;
        }
        if(char===")"){
            emit({type:'bracketseal',token:char});
            return bracketSeal;
        }
        if(char==="$") return end;
    }
    function end(){}
    let state = start;
    for(let char of expression){
        state = state(char);
    }
    state("$");
    if(tree){
        console.log(tree);
        function adpator(obj){
            if(obj.type==="boolean") return obj.token==="t";
            if(obj.type==="expression") return calcu(obj);
        }
        let fnMap = new Map([
            ["&",(...param)=>param.reduce((p,c)=>p&adpator(c),true)],
            ["|",(...param)=>param.reduce((p,c)=>p|adpator(c),false)],
            ["!",(param)=>!adpator(param)],
        ])
        function calcu(node){
            return fnMap.get(node.symbol)(...node.param);
        }
        return calcu(tree);
    }
}
// console.log(parseBoolExpr("|(f,f,f,t)"));
// console.log(parseBoolExpr("&(t,t,t)"));//true
// console.log(parseBoolExpr("|(&(t,f,t),t)"));//true
// console.log(parseBoolExpr("|(&(t,f,t),!(t))"));//false
console.log(parseBoolExpr("!(&(!(&(f)),&(t),|(f,f,t)))"));//false