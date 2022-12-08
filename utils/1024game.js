//解决1024节日游戏问题
let number = [996,15];
let cmp = ["-","//","%","**"];
let computedMap = new Map([
    ["|",(a,b)=>(a|b)],
    ["+",(a,b)=>(a+b)],
    ["&",(a,b)=>(a&b)],
    [">>",(a,b)=>(a>>b)],
    ["<<",(a,b)=>(a<<b)],
    ["//",(a,b)=>~~(a/b)],
    ["%",(a,b)=>a%b],
    ["*",(a,b)=>a*b],
    ["-",(a,b)=>a-b],
    ["^",(a,b)=>a^b],
    ["**",(a,b)=>a**b],
]);
let target = 1024;
let cmpVisit = new Array(cmp.length).fill(false);
let numVisit = new Array(number.length).fill(false);
let path = [];
function dfs(num,step){
    if(step === 0){
        if(num===1024) console.log(path);
        return;
    }
    for(let i=0;i<cmp.length;i++){
        if(cmpVisit[i]) continue;
        cmpVisit[i] = true;
        path.push(cmp[i]);
        for(let j=0;j<number.length;j++){
            if(numVisit[j]) continue;
            numVisit[j] = true;
            path.push(number[j]);
            dfs(computedMap.get(cmp[i])(num,number[j]),step-1);
            numVisit[j] = false;
            path.pop();
        }
        path.pop();
        cmpVisit[i] = false;
    }
}
number.forEach((val,index)=>{
    path.push(val);
    numVisit[index] = true;
    dfs(val,3);
    numVisit[index] = false;
    path.pop();
});
