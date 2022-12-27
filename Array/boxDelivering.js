//1687. 从仓库到码头运输箱子
/**
 * @param {number[][]} boxes
 * @param {number} portsCount
 * @param {number} maxBoxes
 * @param {number} maxWeight
 * @return {number}
*/
var boxDelivering = function(boxes, portsCount, maxBoxes, maxWeight) {
    //动态规划
    let len = boxes.length;
    let dp = [];//dp[i]表示运送前i个箱子到码头最少的行程数
    dp[0] = 0;
    for(let i=1;i<=len;i++){
        let take = maxWeight-boxes[i-1][1],index = i-1,path = 2;
        let port_n = boxes[i-1][0];
        while(take>0&&index>0){
            index--;
            let [port,weight] = boxes[index];
            take-=weight;
            if(take<0){index++;break;}
            if(port_n!==port) path++;
            port_n = port;
            if(i-index>=maxBoxes) break;
        }
        console.log(i-1,index,path);
        dp[i] = dp[index]+path;
    }
    //console.log(dp);
    return dp[len]
};
console.log(boxDelivering([[1,2],[3,3],[3,1],[3,1],[2,4]], 3, 3, 6));
console.log(boxDelivering([[1,1],[2,1],[1,1]],2,3,3));
console.log(boxDelivering([[2,4],[2,5],[3,1],[3,2],[3,7],[3,1],[4,4],[1,3],[5,2]],5,5,7));//14