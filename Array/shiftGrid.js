//1260. 二维网格迁移
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
*/
var shiftGrid = function(grid, k) {
    let height = grid.length,width = grid[0].length;
    let time = k%(width*height);
    let result = [];
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            let nextX = ~~(((i*width+j+time)%(width*height))/width);
            let nextY = ((i*width+j+time)%(width*height))%width;
            //放到正确位置
            if(typeof result[nextX]==="undefined") result[nextX] = [];
            result[nextX][nextY] = grid[i][j];
        }
    }
    return result;
};