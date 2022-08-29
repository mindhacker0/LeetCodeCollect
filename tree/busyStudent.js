//1450. 在既定时间做作业的学生人数
var busyStudent = function(startTime, endTime, queryTime) {//一次便历（100%）
    let count = 0;
    for(let i=0;i<startTime.length;i++){
        if(startTime[i]<=queryTime && queryTime<=endTime[i]) count++;
    }
    return count;
};
const lowBit=(x)=>x&-x;
class BIT{
    constructor(n){
        this.base = new Array(n+1).fill(0);
        this.size = n+1;
    }
    query(index){
        let result = 0;
        for(;index>0;index-=lowBit(index)) result+=this.base[index];
        return result;
    }
    update(index,val){
        for(;index<this.size;index+=lowBit(index)) this.base[index]+=val;
    }
}
var busyStudent = function(startTime, endTime, queryTime) {
    let bit = new BIT(1001);
    for(let i=0;i<startTime.length;i++){
        bit.update(startTime[i],1);
        bit.update(endTime[i]+1,-1);
    }
    return bit.query(queryTime);
}
class segNode{
    constructor(val,left,right){
        this.val = val||0;
        this.left = left;
        this.right = right;
        this.lazy = 0;
    }
}
class segTree{
    constructor(size){
        this.tree = new Array(size*4).fill(0);
        this.build(1,0,size-1);
    }
    build(idx,left,right){//建树
       this.tree[idx] = new segNode(0,left,right);
       if(left === right) return;
       let mid = (left+right)>>1;
       this.build(idx<<1,left,mid);
       this.build(idx<<1|1,mid+1,right);
    }
    update(index,start,end,delta){//更新区间
        let node= this.tree[index];
        let {val,left,right} = node;
        if(start<=left && right<=end){//该区间被包含，需要修改
            node.val+=delta*(right-left+1);
            node.lazy+=delta;
            return;
        }
        this.spread(index);
        let mid = (left+right)>>1;
        if(start<=mid) this.update(index<<1,start,end,delta);
        if(end>=mid+1) this.update(index<<1|1,start,end,delta);
    }
    spread(index){//懒惰标记扩散
        let node = this.tree[index];
        if(node.lazy){
            let leftNode = this.tree[index<<1];
            let rightNode = this.tree[index<<1|1];
            leftNode.val+=node.lazy*(leftNode.right - leftNode.left+1);
            leftNode.lazy+=node.lazy;
            rightNode.val+=node.lazy*(rightNode.right - rightNode.left+1);
            rightNode.lazy+=node.lazy;
            node.lazy = 0;
        }
    }
    query(start,end){//单值查询
        const vm = this;
        function tranverse(index){
            let {val,left,right} = vm.tree[index];
            if(start<=left && right<=end){
                return val;
            }
            vm.spread(index);
            let mid = (left+right)>>1,ans = 0;
            if(start<=mid){
                ans+=tranverse(index<<1);
            }
            if(mid+1<=end){
                ans+=tranverse(index<<1|1);
            }
            return ans;
        }
        return tranverse(1,start,end);
    }
}
var busyStudent = function(startTime, endTime, queryTime) {
    let len = startTime.length;
    let segtree = new segTree(1001);
    console.log(segtree);
    for(let i=0;i<len;i++){
        segtree.update(1,startTime[i],endTime[i],1);
    }
    //console.log(segtree);
    return segtree.query(queryTime,queryTime);
}
// console.log(busyStudent([1,2,3],[3,2,7],4));
console.log(busyStudent([146,452,523,258,609,60,331,836,415,848,880,43,186,62,183,270,234,188,110,372,192,290,169,304,305,805,807,295,724,532,796,472,735,447,62,1,306,782,532,76,618,620,601,547,45,782,978,428,425,778,864,101,999,448,736,628,938,98,46,290,742,806,292,303,230,354,417,445,45,717,902,21,284,488,879,115,770,794,288,57,1000,558,318,243,787,188,889]
    ,[665,951,674,598,945,463,379,838,704,889,908,622,892,901,466,419,947,588,236,429,795,816,286,500,422,908,940,606,789,844,799,976,918,788,385,930,759,880,976,329,913,641,678,594,352,856,990,879,782,821,963,158,1000,873,879,962,986,662,709,872,747,989,860,521,713,604,865,540,440,953,943,797,835,826,930,444,871,943,582,488,1000,816,354,782,798,413,914]
    ,900));