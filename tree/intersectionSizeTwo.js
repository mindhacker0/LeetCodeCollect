//757. 设置交集大小至少为2
/**
 * @param {number[][]} intervals
 * @return {number}
 */
class SegNode{
    constructor(index,left,right,val=0){
        this.index = index;
        this.left = left;
        this.right = right;
        this.val = val;
        this.lazy = 0;//懒惰删除标记
    }
}
class SegTree{
    constructor(){
        this.tree = Object.create(null);
        this.max = 0;
    }
    update(index=1,left=1,right=10e8+1,val,start,end){//更新区间
        if(typeof this.tree[index] === "undefined"){
            this.tree[index] = new SegNode(index,left,right);
        }
        if((left === start && right === end)||left === right){
            this.tree[index].val+=val;
            this.tree[index].lazy+=val;
            if(this.tree[index].val>this.max){
                console.log(left,right);
                this.max = this.tree[index].val;
            }
            return;
        }
        let middle = ~~((left+right)/2);
        let lazy = this.tree[index].lazy;//该节点需要继续递归，处理懒惰标记
        //懒惰标记传递
        if(typeof this.tree[index*2] === "undefined") this.tree[index*2] = new SegNode(index*2,left,middle);
        if(typeof this.tree[index*2+1] === "undefined") this.tree[index*2+1] = new SegNode(index*2+1,middle+1,right);
        this.tree[index*2].val+=lazy;
        this.tree[index*2].lazy+=lazy;
        this.tree[index*2+1].val+=lazy;
        this.tree[index*2+1].lazy+=lazy;
        this.tree[index].lazy = 0;
        if(end<=middle){
            this.update(index*2,left,middle,val,start,end);
        }else if(start>=middle+1){
            this.update(index*2+1,middle+1,right,val,start,end);
        }else{
            this.update(index*2,left,middle,val,start,middle);
            this.update(index*2+1,middle+1,right,val,middle+1,end);
        }
        this.tree[index].val = this.tree[index*2].val + this.tree[index*2+1].val;
        return this.tree[index].val;
    }
}
// 
var intersectionSizeTwo = function(intervals) {//(100.00%)
    let len = intervals.length;
    intervals.sort((a,b)=>{
        return a[0] === b[0]?a[1]-b[1]:a[0]-b[0];
    });
    console.log(intervals);
    let result = new Set,end = intervals[0][1],preEnd = intervals[0][1]-1;
    result.add(preEnd);
    result.add(end);
    for(let i=1;i<len;i++){
        let [l,r] = intervals[i];
        if(end<l){//没有任何交集,两个都要添加
            preEnd = r-1;
            end = r;
            result.add(preEnd);
            result.add(end);
        }else if(l===end){//只有一个交集,需要添加一个
            if(end === r){
                preEnd = r-1;
                result.add(preEnd);
            }else{
                preEnd = end;
                end = r;
                result.add(end);
            }
        }else{//两个以上交集
            if(end>r){//结尾比之前的小
                if(preEnd>l){
                    result.delete(preEnd);
                }
                preEnd = r-1;
                result.add(preEnd);
                result.delete(end);
                end = r;
                result.add(r);
            }else if(preEnd<l){
                if(end === r){
                    preEnd = r-1;
                    result.add(preEnd);
                }else{
                    preEnd = end;
                    end = r;
                    result.add(end);
                }
            }
        }
        // console.log(i,result,preEnd,end);
    }
    // console.log(result);
    return result.size;
};

console.log(intersectionSizeTwo([[2,10],[3,7],[3,15],[4,11],[6,12],[6,16],[7,8],[7,11],[7,15],[11,12]]));//5
console.log(intersectionSizeTwo([[1,3],[3,7],[5,7],[7,8]]));//5
console.log(intersectionSizeTwo([[1,2],[0,3],[2,3]]));//3
console.log(intersectionSizeTwo([[12,19],[18,25],[4,6],[19,24],[19,22]]));//5
console.log(intersectionSizeTwo([[1,24],[10,16],[14,25],[0,18],[16,17]]));//3
console.log(intersectionSizeTwo([[1,3],[4,9],[0,10],[6,7],[1,2],[0,6],[7,9],[0,1],[2,5],[6,8]]));//7