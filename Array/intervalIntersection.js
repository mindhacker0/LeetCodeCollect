//986. 区间列表的交集
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
*/
const lowbit = (x)=>x&-x;
class BinIndexTree{
    constructor(n){
        this.tree = new Array(n*4+1).fill(0)
    }
    update(index,val){
        while(index<this.tree.length){
            this.tree[index]+=val;
            index +=lowbit(index);
        }
    }
    query(index){
        let ans = 0;
        while(index>0){
            ans+=this.tree[index];
            index-=lowbit(index);
        }
        return ans;
    }
}
var intervalIntersection = function(firstList, secondList) {//离散化+差分数组
    let fArr = new Map,arr = new Set;
    for(let i=0;i<firstList.length;i++){
        arr.add(firstList[i][0]);
        arr.add(firstList[i][1]);
        arr.add(firstList[i][1]+0.5);
    }
    for(let i=0;i<secondList.length;i++){
        arr.add(secondList[i][0]);
        arr.add(secondList[i][1]);
        arr.add(secondList[i][1]+0.5);
    }
    arr = Array.from(arr);
    arr.sort((a,b)=>a-b);
    arr.forEach((val,index)=>fArr.set(val,index+1));
    let bit = new BinIndexTree(arr.length);
    for(let i=0;i<firstList.length;i++){
        bit.update(fArr.get(firstList[i][0]),1);
        bit.update(fArr.get(firstList[i][1]+0.5),-1);
    }
    for(let i=0;i<secondList.length;i++){
        bit.update(fArr.get(secondList[i][0]),1);
        bit.update(fArr.get(secondList[i][1]+0.5),-1);
    }
    console.log(arr);
    let ans = [],range = [],prev=null;
    for(let i=0;i<arr.length;i++){
        let now = bit.query(fArr.get(arr[i]));
        console.log(now);
        if((prev<=1||i===0)&&now===2) range[0] = arr[i];
        else if(prev===2&&now<=1){range[1] = arr[i-1];ans.push(range);range = [];}
        prev = now;
    }
    return ans;
};
var intervalIntersection = function(firstList, secondList) {//批处理和关键事件
    let events = [];
    for(let i=0;i<firstList.length;i++){
        events.push({pos:firstList[i][0],type:1});
        events.push({pos:firstList[i][1],type:0});
    }
    for(let i=0;i<secondList.length;i++){
        events.push({pos:secondList[i][0],type:1});
        events.push({pos:secondList[i][1],type:0});
    }
    events.sort((a,b)=>a.pos===b.pos?b.type-a.type:a.pos-b.pos);
    console.log(events);
    let height = 0,ans = [];
    let range = [];
    for(let i=0;i<events.length;i++){
        let {pos,type} = events[i];
        if(type===1){//出现
            height++;
            if(height === 2) range[0] = pos;
        }else{//消失
            height--;
            if(height === 1){
                range[1] = pos;
                // console.log(range);
                ans.push(range);
                range = [];
            }
        }
    }
    return ans;
}
var intervalIntersection = function(firstList, secondList) {//双指针
    let ans = [];
    let i=0;j=0;
    while(i<firstList.length&&j<secondList.length){
        let lo = Math.max(firstList[i][0],secondList[j][0]);
        let hi = Math.min(firstList[i][1],secondList[j][1]);
        
    }
}
console.log(intervalIntersection([[0,2],[5,10],[13,23],[24,25]],[[1,5],[8,12],[15,24],[25,26]]));
// console.log(intervalIntersection([[3,10]],[[5,10]]));
// console.log(intervalIntersection([[5,10]],[[5,10]]));
// console.log(intervalIntersection([[8,15]],[[2,6],[8,10],[12,20]]));