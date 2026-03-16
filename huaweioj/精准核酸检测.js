// 为了达到新冠疫情精准防控的需要，为了避免全员核酸检测带来的浪费，需要精准圈定可能被感染的人群。
// 现在根据传染病流调以及大数据分析，得到了每个人之间在时间、空间上是否存在轨迹的交叉。
// 现在给定一组确诊人员编号 (X1,X2,X3,…Xn)在所有人当中，找出哪些人需要进行核酸检测，输出需要进行核酸检测的数。
// (注意:确诊病例自身不需要再做核酸检测)需要进行核酸检测的人，是病毒传播链条上的所有人员，即有可能通过确诊病例所能传播到的所有人。
// 例如:A是确诊病例，A和B有接触、B和C有接触 C和D有接触，D和E有接触。那么B、C、D、E都是需要进行核酸检测的人
// 输入描述
// 第一行为总人数N
// 第二行为确证病例人员编号（确证病例人员数量<N），用逗号隔开
// 接下来N行，每一行有N个数字，用逗号隔开，其中第i行的第j个数字表名编号i是否与编号j接触过。0表示没有接触，1表示有接触
// 备注：
// 人员编号从0开始
// 0 < N < 100 0<N<1000<N<100
// 输出描述
// 输出需要做核酸检测的人数
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let linecount = 0;
let n;
let illness = new Set;
let board;
rl.on("line",(line)=>{
    if(linecount === 0) {
        n = parseInt(line);
        board = new Array(n);
    }
    else if(linecount === 1) illness = new Set(line.split(",").map((v)=>parseInt(v)));
    else{
       board[linecount - 2] = line.split(",").map((v)=>v === "1"?true:false);
       if(linecount === n+1) rl.close();
    }
    linecount++;
});
const sure = new Set;
const dir = [[0,1],[1,0],[-1,0],[0,-1]];
function dfs(x,y){
    sure.add(x);
    sure.add(y);
    for(let i=0;i<4;++i){
        const dx = x+dir[i][0],dy = y+dir[i][1];
        if(dx <0 || dx>=n || dy<0 || dy>=n || board[dx][dy] === false) continue;
        board[dx][dy] = false;
        dfs(dx,dy);
    }

}
rl.on("close",()=>{
    for(let i=0;i<n;++i){
        for(let j=0;j<n;++j){
            if((illness.has(i) || illness.has(j)) && !sure.has(i*n+j)){
                dfs(i,j);
            }
        }
    }
    console.log(sure.size - illness.size);
});