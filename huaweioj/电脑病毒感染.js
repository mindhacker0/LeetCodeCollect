// 题目描述
// 一个局域网内有很多台电脑，分别标注为 0 ~ N-1 的数字。相连接的电脑距离不一样，所以感染时间不一样，感染时间用 t 表示。
// 其中网络内一台电脑被病毒感染，求其感染网络内所有的电脑最少需要多长时间。如果最后有电脑不会感染，则返回-1。
// 给定一个数组 times 表示一台电脑把相邻电脑感染所用的时间。
// 如图：path[i] = {i, j, t} 表示：电脑 i->j，电脑 i 上的病毒感染 j，需要时间 t。
// 输入描述
// 第一行输入一个整数N ，表示局域网内电脑个数 N ，1 ≤ N ≤ 200 ;
// 第二行输入一个整数M ,表示有 M 条网络连接；
// 接下来M行 ,每行输入为 i , j , t 。表示电脑 i 感染电脑j 需要时间 t 。（1 ≤ i , j ≤ N）
// 最后一行为病毒所在的电脑编号。
// 输出描述
// 输出最少需要多少时间才能感染全部电脑，如果不存在输出 -1
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let node_nums;
let edges;
let linecount = 0;
let edge_record = [];
let start;
rl.on("line",(line)=>{
    if(linecount === 0) node_nums = parseInt(line);
    else if(linecount === 1) edges = parseInt(line);
    else if(linecount <= edges+1){
        edge_record.push(line.split(" ").map(v=>+v));
    }else{
        start = parseInt(line);
        rl.close();
    }
    linecount++;
});

rl.on("close",()=>{
    const dist = new Array(node_nums+1).fill(Infinity);
    dist[start] = 0;
    for(let round =0;round <  node_nums - 1;++round){
        let changed = false;
        for(let i=0;i<edge_record.length;++i){
            const [x,y,z] = edge_record[i];
            if(dist[x]+z < dist[y]){
                dist[y] = dist[x] + z;
                changed  = true;
            }
        }
        if(!changed) break;
    }
    let max = -Infinity;
    for(let i=1;i<dist.length;++i){
        if(dist[i] === Infinity) return console.log(-1);
        max = Math.max(dist[i],max);
    }
    console.log(max);
});
