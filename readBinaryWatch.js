//401. 二进制手表
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num){//dfs
  let ans = [];
  function transWatch(arr){
    let h =0,m=0;
    for(let i=3;i>=0;i--){
      h+=(arr[i]||0)*2**(3-i);
    }
    if(h>11) return -1;
    if(arr.length>=5){
      for(let i=9;i>=4;i--){
        m+=(arr[i]||0)*2**(9-i);
      }
    }
    if(m>59) return -1;
    h=String(h);
    m=String(m).padStart(2,'0');
    console.log(h,arr);
    return `${h}:${m}`;
  }
  function dfs(arr,one,total){
    if(one===0 || total===10){
      if(one===0){
        let time = transWatch(arr);
        if(time!==-1) ans.push(time);
      }
      return;
    }
    arr.push(0);
    dfs(arr,one,total+1);
    arr.pop();
    arr.push(1);
    dfs(arr,one-1,total+1);
    arr.pop();
  }
  dfs([],num,0);
  return ans;
};
console.log(readBinaryWatch(0));
console.log(readBinaryWatch(9));