//733. 图像渲染
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
*/
var floodFill = function(image, sr, sc, newColor) {//bfs递归(52.56%)
    let m = image.length,n= image[0].length;
    let dx = [1,0,0,-1];
    let dy = [0,-1,1,0];
    let init = image[sr][sc];
    let visit = new Array(m*n).fill(0)
    function bfs([x,y]){
        if(x<0||x>=m||y<0||y>=n||visit[x*n+y]) return;
        if(image[x][y] === init){
            image[x][y] = newColor;
        }else{
            return;
        }
        visit[x*n+y] = 1;
        for(let i=0;i<4;i++){
            let nx = x+dx[i],ny = y+dy[i];
            bfs([nx,ny]);
        }
    }
    bfs([sr,sc]);
    return image;
};
var floodFill = function(image, sr, sc, newColor) {//bfs队列(69.26%)
    let m = image.length,n= image[0].length;
    let dx = [1,0,0,-1];
    let dy = [0,-1,1,0];
    let init = image[sr][sc];
    let queue = [];
    let visit = new Array(m*n).fill(0)
    queue.push([sr,sc]);
    while(queue.length){
        let [x,y] = queue.shift();
        if(image[x][y] === init){
            image[x][y] = newColor;
        }else continue;
        for(let i=0;i<4;i++){
            let nx = x+dx[i],ny = y+dy[i];
            if(nx<0||nx>=m||ny<0||ny>=n||visit[nx*n+ny]) continue;
            queue.push([nx,ny]);
            visit[nx*n+ny] = 1;
        }
    }
    return image;
};
console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2));
console.log(floodFill([[0,0,0],[0,1,1]],1,1,1));