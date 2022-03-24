//51. N 皇后
/**
 * @param {number} n
 * @return {string[][]}
*/
var solveNQueens = function(n) {
    let colMap = {};
    let ans = [];
    let map = new Map();
    function dfs(rowMap,arr,colIndex){
        if(colIndex === n){
            let item = arr.join(",")
            if(!map.get(item)) ans.push(item);
            map.set(item,true);
            return;
        }
        for(let i=0;i<n;i++){
            if(typeof rowMap[i] === "undefined"){
                if(arr.length===0 || Math.abs(arr[arr.length-1] - i)>1){
                    let isCorner = false;
                    for(let k=0;k<arr.length;k++){
                        if(Math.abs(arr[k] - i)===arr.length - k){//在同一对角线
                            console.log(arr,arr[k],i);
                            isCorner = true;
                        }
                    }
                    if(!isCorner){
                        arr.push(i);
                        rowMap[i] = colIndex;
                        dfs(rowMap,arr,colIndex+1);
                        rowMap[i] = undefined;
                        arr.pop();
                    }
                }
            }
        }
    }
    dfs(colMap,[],0);
    let result = [];
    console.log(ans);
    for(let i=0;i<ans.length;i++){
        let arr = [];
        ans[i] = ans[i].split(",");
        for(let j=0;j<ans[0].length;j++){
            let str = new Array(n).fill(".");
            str[ans[i][j]] = "Q";
            arr.push(str.join(""));
        }
        result.push(arr);
    }
    return result;
};
//console.log(solveNQueens(1));
[
    ["Q....","..Q..","....Q",".Q...","...Q."],
    ["Q....","...Q.",".Q...","....Q","..Q.."],
    [".Q...","...Q.","Q....","..Q..","....Q"],
    [".Q...","....Q","..Q..","Q....","...Q."],
    ["..Q..","Q....","...Q.",".Q...","....Q"],
    ["..Q..","....Q",".Q...","...Q.","Q...."],
    ["...Q.","Q....","..Q..","....Q",".Q..."],
    ["...Q.",".Q...","....Q","..Q..","Q...."],
    ["....Q",".Q...","...Q.","Q....","..Q.."],
    ["....Q","..Q..","Q....","...Q.",".Q..."]
] 
console.log(solveNQueens(5));