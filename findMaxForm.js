/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    function tokenInChar(str){
       let arr=[0,0];
       for(let i of str){
           arr[i]++;
       }
       return arr;
    }
    let dp=[];
    for(let i=0;i<=m;i++){
        dp[i]=[];
        for(let j=0;j<=n;j++){
           dp[i][j]=0;
        }
    }
    for(let i=0;i<strs.length;i++){
        let temp=tokenInChar(strs[i]);
        console.log(temp);
        for(let j=m;j>=temp[0];j--){
          for(let k=n;k>=temp[1];k--){
            console.log(j-temp[0],k-temp[1]);
            dp[j][k]=Math.max(1+dp[j-temp[0]][k-temp[1]],dp[j][k]);
           
          }
        }
    }
    console.log(dp);
    return dp[m][n];
};
console.log(findMaxForm(["10", "0001", "111001", "1", "0"],5,3));