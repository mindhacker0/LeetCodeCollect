//95. 费解的开关
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const input = []
rl.on('line',function(line){
    input.push(line.split(' '));
});
// rl.on('close',function(){//暴力枚举
//     const total = Number(input[0][0]);
//     //处理数据，25位的01可以通过一位整数表示
//     let list = [],bit = 0;
//     for(let i=1;i<input.length;i++){
//         if(i%6===0){list.push(bit);bit = 0;continue;}
//         let str = input[i][0];
//         for(let j=0;j<str.length;j++){
//             bit=(bit<<1)|Number(str[j]);
//         }
//     }
//     list.push(bit);
//     // console.log(list);
//     function resove(number){//解决问题
//         let ans = -1;
//         function dfs(index,mov){
//             if(ans!==-1) return;
//             if(number===33554431||mov===6||index === 25){
//                 if(number===33554431){ans = mov;}
//                 return;
//             }
//             dfs(index+1,mov);
//             number = number^(1<<index);
//             if(index+6<=25) number = number^(1<<(index+5));//上
//             if(index-5>=0) number = number^(1<<(index-5));//下
//             if(index%5!==0) number = number^(1<<(index-1));//右
//             if(index%5!==4) number = number^(1<<(index+1));//左
//             dfs(index+1,mov+1);
//             if(index+6<=25) number = number^(1<<(index+5));//上
//             if(index-5>=0) number = number^(1<<(index-5));//下
//             if(index%5!==0) number = number^(1<<(index-1));//右
//             if(index%5!==4) number = number^(1<<(index+1));//左
//             number = number^(1<<index);
//         }
//         dfs(0,0);
//         return ans;
//     }
//     list.map((val)=>console.log(resove(val)));
// });
rl.on('close',function(){//递推
    let index = 0;
    let dx = [-1,0,0,1];
    let dy = [0,-1,1,0];
    function pushBtn(arr,x,y){//按某一个开关
        arr[x][y] = arr[x][y] === "0"?"1":"0";
        for(let k=0;k<4;k++){
            let nx = x+dx[k],ny = y+dy[k];
            if(ny<0||ny>=5||nx<0||nx>=5) continue;
            arr[nx][ny] = arr[nx][ny] === "0"?"1":"0";
        }
    }
    while(index<input.length){
        if(index%6===0){index++;continue;} 
        let matrix = [];
        for(let i=0;i<5;i++){
            matrix.push(input[index][0].split(""));
            index++;
        }
        let ans = Infinity;
        for(let i=0;i<32;i++){//第一行的状态
            let start = 0,times = 0;
            let arr = JSON.parse(JSON.stringify(matrix));
            //第一行，根据i的第j位二进制判断按还是不按,先固定第一行
            for(let j=0;j<5;j++){
                if(i&(1<<j)){pushBtn(arr,start,j);times++;}
            }
            while(start<4){
                for(let j=0;j<5;j++){
                    if(arr[start][j]==="0"){//当前行状态为0，需要通过按下一行改变该行
                        pushBtn(arr,start+1,j);times++;
                    }
                }
                start++;
                if(times>6) break;
            }
            if(times>6) continue;
            //判断最后一行是否为1
            let allOne = true;
            for(let j=0;j<5;j++) if(arr[start][j]==="0"){allOne = false;break;}
            if(allOne) ans = Math.min(ans,times);
        }
        console.log(ans===Infinity?-1:ans);
    }
});
