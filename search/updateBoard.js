//529. 扫雷游戏
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
*/
var updateBoard = function(board, click) {
    let m = board.length;
    let n = board[0].length;
    let [clickx,clicky] = click;
    if(board[clickx][clicky]==="M"){//如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X'
        board[clickx][clicky] = "X";
        return board;
    }
    let dx = [1,1,1,0,0,-1,-1,-1,];
    let dy = [-1,0,1,-1,1,-1,0,1];
    if(board[clickx][clicky]==="E"){//如果一个 没有相邻地雷 的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的 未挖出 方块都应该被递归地揭露。
        let queue = [];
        let arr = new Array(m*n).fill(0);
        queue.push([clickx,clicky]);
        while(queue.length){
            let [x,y] = queue.shift();
            let mineNum = 0;
            board[x][y] = "B";
            for(let i=0;i<8;i++){
                let nx = x+dx[i],ny = y+dy[i];
                if(nx<0||nx>=m||ny<0||ny>=n||arr[n*nx+ny]) continue;
                if(board[nx][ny] === "M") mineNum++;
            }
            
            if(mineNum!==0) board[x][y] = mineNum.toString();
            else{
                for(let i=0;i<8;i++){
                    let nx = x+dx[i],ny = y+dy[i];
                    if(nx<0||nx>=m||ny<0||ny>=n||arr[n*nx+ny]) continue;
                    if(board[nx][ny] === "E"){
                        queue.push([nx,ny]);
                        arr[n*nx+ny] = 1;
                    }
                }
            }
        }
    }
    return board;
};
console.log(updateBoard([
    ["E","E","E","E","E"],
    ["E","E","M","E","E"],
    ["E","E","E","E","E"],
    ["E","E","E","E","E"]
],[3,0]));