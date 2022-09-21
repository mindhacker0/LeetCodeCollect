//857. 雇佣 K 名工人的最低成本
/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
*/
var mincostToHireWorkers = function(quality, wage, k) {//以最少的钱，找最多的人,并且公平
    let perList = [];
    quality.forEach((val,index)=>{
        perList.push([val,wage[index]]);
    });
    perList.sort((a,b)=>(a[0]/a[1])-(b[0]/b[1]));
    console.log(perList);
    let count = 0,ans = 0;
    for(let i=0;i<perList.length;i++){
        let [q,w] = perList[i];
        let money = (perList[0][1]*q)/perList[0][0];
        if(money>=w){
            ans+=money;
            count++;
        }
        console.log(money);
        if(count===k) break;
    }
    return ans;
};
// console.log(mincostToHireWorkers([10,20,5],[70,50,30],2));
console.log(mincostToHireWorkers([3,1,10,10,1],[4,8,2,2,7],3));