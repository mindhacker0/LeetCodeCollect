/**
 * @param {number} num
 * @return {string[]}
 */
 var readBinaryWatch = function(num){
  function dfs(st,sum,cnt,flag){
     console.log(sum);
     if (cnt == 0) {return;}
     for(let i = st; i < flag ? 6 : 4; i++) {
      let temp = Math.pow(2, i);
      if (flag && sum + temp >= 60 || !flag && sum + temp >= 12) {
          break;
      }
      dfs(i + 1, sum + temp, cnt - 1, flag);
    }
  }
  for(let i=0;i<6 && i<=num;i++){
    //dfs(0,0,i,true);
    dfs(0,0,num-i,false);
  }
};
console.log(readBinaryWatch(1));