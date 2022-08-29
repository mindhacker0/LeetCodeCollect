//剑指 Offer II 115. 重建序列
/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
*/
function MapNode(val){//图元素，出边数组表示法
    this.val = val;
    this.inSet = new Set();
    this.outSet = new Set();
}
var sequenceReconstruction = function(nums, sequences) {//拓扑排序,对sequences进行拓扑排序，如果能顺利进行就比较排序结果
    let grp = new Map;
    let len = sequences.length;
    // 建图
    for(let i=0;i<len;i++){
        let arr = sequences[i];
        for(let j=0;j<arr.length;j++){
            if(typeof grp.get(arr[j]) === "undefined") grp.set(arr[j],new MapNode(arr[j]));
            let elem = grp.get(arr[j]);
            if(j>0)  elem.inSet.add(arr[j-1]);
            if(j<arr.length-1) elem.outSet.add(arr[j+1]);
        }
    }
    console.log(grp);
    //计算拓扑顺序
    let flag = true;
    let order = [];//存储拓扑排序结果
    while(flag){
        flag = false;
        let deleteNode = null;
        for(let [index,elem] of grp){
            const {val,inSet,outSet} = elem;
            if(inSet.size === 0){//入度为0的节点
                if(deleteNode!==null){flag = false;break;} //如果某时刻有第二个入度为0的，说明排序不唯一
                deleteNode = elem;
                flag = true;
            }
        }
        if(deleteNode){
            let {val,outSet} = deleteNode;
            outSet.forEach((out)=>{
                grp.get(out).inSet.delete(val);
            });
            order.push(val);
            grp.delete(val);
        }
    }
    console.log(order);
    //能进行拓扑排序并最后的结果和nums相符返回true,否则false
    for(let i=0;i<nums.length;i++){
        if(order[i]!==nums[i]) return false;
    }
    return true;
};
console.log(sequenceReconstruction([1,2,3],[[1,2],[1,3]]))