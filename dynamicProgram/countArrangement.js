/**
 * @param {number} n
 * @return {number}
*/
var countArrangement = function(n) {//暴力搜索
    let possible = 0;
    // function arrangeArr(arr){
    //    for(let i=0;i<arr.length;i++){
    //       if(arr[i]%i!==0 && i%arr[i]!==0) return false;
    //    }
    //    return true;
    // }
    function dfs(index,arr,map){
        if(index === n){
            console.log(arr);
            possible++;
            //if(arrangeArr(arr)){possible++;console.log(arr);}
            return;
        }
        for(let i=1;i<=n;i++){
            if(i%(index+1)!==0 &&(index+1)%i!==0) continue;//剪枝
            if(!map[i]){
                arr.push(i);
                map[i] = true;
                dfs(index+1,arr,map);
                map[i] = false;
                arr.pop();
            }
        }
    }
    dfs(0,[],{});
    return possible;
};
// console.log(countArrangement(1));
console.log(countArrangement(2));
console.log(countArrangement(3));
// console.log(countArrangement(15));