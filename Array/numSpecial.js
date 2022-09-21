//1582. 二进制矩阵中的特殊位置
/**
 * @param {number[][]} mat
 * @return {number}
*/
var numSpecial = function(mat) {//暴力
    let height = mat.length,width = mat[0].length;
    let ans = 0;
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            if(mat[i][j]===0) continue;
            let col = 0,row = 0;
            for(let k=0;k<width;k++) if(k!==j) row+= mat[i][k];
            for(let k=0;k<height;k++) if(k!==i) col+= mat[k][j];
            if(col===0&&row===0) ans++;
        }
    }
    return ans;
};
var numSpecial = function(mat) {//前后缀
    let height = mat.length,width = mat[0].length;
    let prefix = [],suffix = [];
    let ans = 0;
    for(let i=0;i<height;i++){
        prefix[i] = [];
        for(let j=0;j<width;j++){
            if(i===0&&j===0) prefix[i][j] = [0,0];
            else if(i===0) prefix[i][j] = [0,prefix[i][j-1][1]+mat[i][j-1]];
            else if(j===0) prefix[i][j] = [prefix[i-1][j][0]+mat[i-1][j],0];
            else prefix[i][j] = [prefix[i-1][j][0]+mat[i-1][j],prefix[i][j-1][1]+mat[i][j-1]];
        }
        //console.log(prefix[i]);
    }
    for(let i=height-1;i>=0;i--){
        suffix[i] = [];
        for(let j=width-1;j>=0;j--){
            if(i===height-1&&j===width-1) suffix[i][j] = [0,0];
            else if(i===height-1) suffix[i][j] = [0,suffix[i][j+1][1]+mat[i][j+1]];
            else if(j===width-1) suffix[i][j] = [suffix[i+1][j][0]+mat[i+1][j],0];
            else suffix[i][j] = [suffix[i+1][j][0]+mat[i+1][j],suffix[i][j+1][1]+mat[i][j+1]];
        }
    }
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            if(mat[i][j] === 0) continue;
            let [x,y] = prefix[i][j];
            let [x1,y1] = suffix[i][j];
            if((x+y+x1+y1)===0) ans++;
        }
    }
    return ans;
}
console.log(numSpecial([[1,0,0],[0,0,1],[1,0,0]]));
console.log(numSpecial([[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,1],[0,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[0,0,1,1,0,0,0,0]]));