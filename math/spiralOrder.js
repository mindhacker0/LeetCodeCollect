//54. 螺旋矩阵
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {//简单模拟
    let dir = [[0,1],[1,0],[0,-1],[-1,0]];//四个方向
    let mode = 0;
    let xBorder = [-1,matrix[0].length],yBorder = [-1,matrix.length];
    let result = [],now = [0,-1];
    while(xBorder[1]-xBorder[0]>1 && yBorder[1]-yBorder[0]>1){
        let [x,y] = dir[mode];
        now[0]+=x;
        now[1]+=y;
        result.push(matrix[now[0]][now[1]]);
        if(mode === 0 && xBorder[1]-now[1]<=1){mode++;yBorder[0]++;}
        if(mode === 1 && yBorder[1]-now[0]<=1){mode++;xBorder[1]--;}
        if(mode === 2 && now[1]-xBorder[0]<=1){mode++;yBorder[1]--;}
        if(mode === 3 && now[0]-yBorder[0]<=1){mode++;xBorder[0]++;}
        mode%=4;
    }
    return result;
};
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))