//302. 包含全部黑色像素的最小矩形
/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function(image, x, y) {//DFS
    let m = image.length,n = image[0].length;
    const dir = [[0,1],[1,0],[0,-1],[-1,0]];
    let maxx = -1,maxy = -1,minx = m,miny = n;
    let visit = new Set([x*n+y]);
    function dfs(point){
        const [x,y] = point;
        maxx = Math.max(maxx,x);
        maxy = Math.max(maxy,y);
        minx = Math.min(minx,x);
        miny = Math.min(miny,y);
        for(let i=0;i<dir.length;++i){
            let nx = x+dir[i][0],ny = y+dir[i][1];
            if(nx<0||nx>=m||ny<0||ny>=n||visit.has(nx*n+ny)||image[nx][ny] === '0') continue;
            visit.add(nx*n+ny);
            dfs([nx,ny]);
        }
    }
    dfs([x,y]);
    return (maxx-minx+1)*(maxy-miny+1);
};
var minArea = function(image, x, y) {//二分，从已知点扩展，二分寻找边界
    let m = image.length,n = image[0].length;
    let x0 = searchX(0,x,false);
    let x1 = searchX(x+1,m,true);
    let y0 = searchY(0,y,false);
    let y1 = searchY(y+1,n,true);
    function searchX(start,end,startBlack){//搜索X的边界
        while(start<end){
            let mid = (start+end)>>1,hasblack = false;
            for(let k = 0;k<n;++k){
                if(image[mid][k] === '1'){
                    hasblack = true;
                    break;
                }
            }
            if(hasblack===startBlack) start = mid+1;
            else end = mid;
        }
        return start;
    }
    function searchY(start,end,startBlack){//搜索X的边界
        while(start<end){
            let mid = (start+end)>>1,hasblack = false;
            for(let k = 0;k<m;++k){
                if(image[k][mid] === '1'){
                    hasblack = true;
                    break;
                }
            }
            if(hasblack===startBlack){
                start = mid+1;
            }else{
                end = mid;
            }
        }
        return start;
    }
    return (x1-x0)*(y1-y0);
}
console.log(minArea([
    ["0","0","1","0"],
    ["0","1","1","0"],
    ["0","1","0","0"]
],0,2));//6
// console.log(minArea([["1","1"]],0,1));