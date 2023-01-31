//218. 扑克牌
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
const input = [];
rl.on("line",(chunk)=>{
    input.push(chunk.split(" "));
});
rl.on("close",function(){//

});