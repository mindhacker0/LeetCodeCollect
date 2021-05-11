/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length === 0){return [];}
    let sign = 0;//"left","bottom","right","top"
    let x=0,y=0;
    let width = matrix[0].length;
    let height = matrix.length;
    let border = [0,0,0,0];//已经过的边界
    let counter = 0;
    let result = [];
    while(counter<width*height){
        //console.log(x,y,matrix[x][y]);
        result.push(matrix[x][y]);
        counter++;
        if(sign === 0){
            if(y >= width-1 - border[1]){
                //console.log("右边碰撞转弯",x,y);
                sign = 1;
                border[0]++;
            }else{
                y++;
            }
        }
        if(sign === 1){
            if(x >= height -1- border[2]){
                //console.log("下边碰撞转弯",x,y);
                sign = 2;
                border[1]++;
            }else{
                x++;
            }
        }
        if(sign === 2){
            if(y <= 0 + border[3]){
                //console.log("左边碰撞转弯",x,y);
                sign = 3;
                y = border[3];
                border[2]++;
            }else{
                y--;
            }
        }
        if(sign === 3){
            if(x <= 0 + border[0]){
                //console.log("上边转弯",x,y);
                sign = 0;
                x = border[0];
                y = y + 1;
                border[3]++;
            }else{
                x--;
            }
        }
    }
    return result;
};
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix));