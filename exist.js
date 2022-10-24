/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//  var exist = function(board, word) {
//     if(board.length === 0) return false;
//     let height = board.length;
//     let width = board[0].length;
//     let dir = [[-1,0],[1,0],[0,-1],[0,1]];
//     let visit = new Array(width*height).fill(0);
//     let result = false;
//     function tranverse(x,y,findex,path){
//         if(result) return;
//         if(board[x][y] !== word[findex]){findex = 0;return;} 
//         if(board[x][y] === word[findex]){findex++;}
//         if(findex === word.length){
//             result = true;
//             return;
//         }
//         for(let i=0;i<4;i++){
//             let dx = x+dir[i][0],dy = y+dir[i][1];
//             if(dx<0||dx>=height||dy<0||dy>=width||visit[dx*width+dy]===1) continue;
//             visit[dx*width+dy]=1;
//             path.push(board[dx][dy]);
//             tranverse(dx,dy,findex,path);
//             path.pop();
//             visit[dx*width+dy]=0;
//         }
//     }
//     for(let i=0;i<height;i++){
//         for(let j=0;j<width;j++){
//             if(board[i][j] !== word[0]) continue;
//             visit[i*width+j] = 1;
//             tranverse(i,j,0,[]);
//             visit[i*width+j] = 0;
//             if(result) return true;
//         }
//     }
//     return result;
// };
function printMatrix(arr,path){
    for(let i=0;i<arr.length;i++){
        let str = "";
        for(let j=0;j<arr[i].length;j++){
           if(path.includes(`${i},${j}`)) str+="\033[42;37m "+arr[i][j]+" \033[0m";
           else str+="\033[47;30m "+arr[i][j]+" \033[0m";
        }
        console.log(str);
    }
    console.log("\r\n");
}
function exist(arr,target){
    let stack = [];
    let height = arr.length,width = arr[0].length;
    let dx = [0,-1,0,1],dy = [1,0,-1,0];
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            if(arr[i][j] === target[0] && expand(i,j)) return true;
        }
    }
    function expand(x,y){
        let path = new Array(height*width).fill(false);
        stack.push([[x,y],0,path]);
        while(stack.length){
            let [[x,y],index,visit] = stack.shift();
            //console.log(x,y)
            visit[x*width+y] = true;
            if(arr[x][y] === target[index]){
                index++;
                if(index===target.length){
                    console.log("find");
                    return true;
                }
            }else index=arr[x][y]===target[0]?1:0;
            for(let i=0;i<4;i++){
                let nx = x+dx[i],ny = y+dy[i];
                if(nx<0||nx>=height||ny<0||ny>=width||(index!==0 && arr[nx][ny]!==target[index])||visit[nx*width+ny]) continue;
                stack.push([[nx,ny],index,visit.slice()]);
            }
        }
        return false;
    }
    return false;
}
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"));
console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]],"ABCESEEEFS"));
console.log(exist([['A']],"A"));
console.log(exist([["a","a"]],"aaa"));
console.log(exist([["a","b"]],"ba"));
// console.log(exist([["C","A","A"],["A","A","A"],["B","C","D"]],"AAB"));
let arr = [["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","b"]];
let str = "baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
console.log(exist([["a","a","a","a"],["a","a","a","a"],["a","a","a","a"],["a","a","a","a"],["a","a","a","b"]],"aaaaaaaaaaaaaaaaaaaa"));
// console.log(exist(arr,str));