//2. 01背包问题
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = []
rl.on('line',function(line){
    input.push(line.split(' '));
});
// rl.on('close',function(){//传统解法
//     //console.log(input);
//     let [count,capacity] = input[0];
//     count*=1;capacity*=1;
//     let dp = [];//dp[i][j]表示对于第i个物品，在容量为j所能装下的最大价值
//     for(let i=0;i<count;i++){
//         let [v,w] = input[i+1];
//         v = v*1;w=w*1;
//         dp[i] = new Array(capacity).fill(0);
//         for(let j=0;j<=capacity;j++){
//             if(i===0) dp[i][j] = j>=v?w:0;
//             else if(j<v) dp[i][j] = dp[i-1][j];
//             else dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-v]+w);
//         }
//     }
//     console.log(dp[count-1][capacity]) 
// });
rl.on('close',function(){//遗传算法
    //console.log(input);
    let [count,capacity] = input[0];
    count*=1;capacity*=1;
    let code = new Array(count).fill(0);//个体编码
    let groupSize = capacity;//种群规模
    let groupList = [];
    let alph = 2,G = 4;//alph惩罚倍数,G最大遗传代数
    for(let i=0;i<groupSize;i++){// 产生初始种群
        let person = code.map(()=>~~(Math.random()+0.5));//产生个体
        groupList.push(person);    
    }
    let maxFit = 0;
    while(G>0){//迭代
        let totalFit = 0;//总适应度
        let fitList = [];
        for(let i=0;i<groupList.length;i++){
            let size = 0,value = 0;
            for(let j=0;j<groupList[i].length;j++){//计算个体适应度
                let [v,w] = input[j+1];
                v = v*1;w=w*1;
                size+=v;value+=w;
            }
            if(size>capacity) value-=alph*(size-capacity);//大于背包容量，进行适应度惩罚
            totalFit+=value;fitList.push(value);
            maxFit=Math.max(maxFit,value);
        }
        fitList = fitList.map((val)=>(val/totalFit));//个体被选中的概率
        //轮盘赌模拟自然选择
        let set = new Set;
        for(let i=0;i<groupList.length;i++){
            set.add(groupList[RWS(fitList)]);
        }
        console.log(set);
        G--;
    }
    console.log(groupList);
    //
    function RWS(rate){
        let m = 0;
        let r = Math.random(); //r为0至1的随机数
        for(i=0;i<rate.length; i++){
            /* 产生的随机数在m~m+P[i]间则认为选中了i
            * 因此i被选中的概率是P[i]
            */
            m = m + rate[i];
            if(r<=m) return i;
        }
    }
});