//296. 最佳的碰头地点
//给你一个 m x n  的二进制网格 grid ，其中 1 表示某个朋友的家所处的位置。返回 最小的 总行走距离 。
//总行走距离 是朋友们家到碰头地点的距离之和。
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {//暴力
    let m = grid.length,n = grid[0].length;
    let home = [],ans = Infinity;
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(grid[i][j] === 1) home.push([i,j]);
        }
    }
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            let distance = 0;
            for(let k=0;k<home.length;++k){
                distance+=Math.abs(home[k][0]-i)+Math.abs(home[k][1]-j);
            }
            console.log(i,j,distance);
            ans = Math.min(ans,distance);
        }
    }
    return ans===Infinity?1:ans;
};
var minTotalDistance = function(grid) {//中位数 
    let m = grid.length,n = grid[0].length;
    let col = [],rows = [];
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(grid[i][j] === 1) col.push(i);
        }
    }
    for(let j=0;j<n;++j){
        for(let i=0;i<m;++i){
            if(grid[i][j] === 1) rows.push(j);
        }
    }
    let cmid = col.length>>1,rmid = rows.length>>1;
    let x = col[cmid],y = rows[rmid],distance = 0;
    for(let i=0;i<col.length;++i) distance+=Math.abs(col[i]-x);
    for(let j=0;j<rows.length;++j) distance+=Math.abs(rows[j]-y);
    return distance;
}
// console.log(minTotalDistance([
//     [1,0,0,0,1],
//     [0,0,0,0,0],
//     [0,0,1,0,0]
// ]));//6
console.log(minTotalDistance([
    [0,0,0,0,1,0,1,0],
    [0,0,0,0,1,0,0,1]
]));
//console.log(minTotalDistance([[1,0,1,0,1]]));//4