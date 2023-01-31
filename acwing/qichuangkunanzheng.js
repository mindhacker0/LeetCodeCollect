//998. 起床困难综合症
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
const input = [];
rl.on("line",(chunk)=>{
    input.push(chunk.split(" "));
});
rl.on("close",function(){
    let [count,attack] = input[0];
    attack = Number(attack);
    let ans = 0;
    for(let i=0;i<32;i++){
        let bit = 1<<i;
        for(let j=0;j<count;j++){
            let [c,a] = input[j+1];
            if(c==="AND") bit&=a;
            if(c==="OR") bit|=a;
            if(c==="XOR") bit^=a;
        }
        if((1<<i)<=attack&&((bit>>i)&1)&&(ans|(1<<i))<=attack){
            console.log(i)
            ans|=(1<<i);
        }
    }
    for(let j=0;j<count;j++){
        let [c,a] = input[j+1];
        if(c==="AND") ans&=a;
        if(c==="OR") ans|=a;
        if(c==="XOR") ans^=a;
    }
    console.log(ans);
});