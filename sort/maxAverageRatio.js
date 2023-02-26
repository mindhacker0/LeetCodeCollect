// 1792. 最大平均通过率
/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
function swap(arr,x,y){
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}
class MaxHeap{
    constructor(){
        this.head = [null];
    }
    empty(){return this.head.length<=1;}
    offer(node){//插入
        this.head.push(node);
        this.heapfyUp();
    }
    poll(){//弹出
       if(this.head.length<=1) return null;
       swap(this.head,1,this.head.length-1);
       let take = this.head.pop();
       this.heapfyDown();
       return take;
    }
    heapfyUp(){//上调
        let end = this.head.length - 1;
        while((end>>1)>0){
            let parent = end>>1;
            if(this.head[parent].val<this.head[end].val) swap(this.head,end,parent);
            else break;
            end = parent;
        }
    }
    heapfyDown(){//下调
        let start=1;
        while((start<<1)<this.head.length){
            let left = start<<1,right = left+1;
            let next = (right>=this.head.length||this.head[left].val>this.head[right].val)?left:right;
            if(this.head[next].val>this.head[start].val) swap(this.head,start,next);
            else break;
            start = next;
        }
    }
}
function ClassNode(val,total,pass){
    this.val = val;
    this.total = total;
    this.pass = pass;
}
var maxAverageRatio = function(classes, extraStudents) {
    let mhp = new MaxHeap,ans = 0;
    for(let i=0;i<classes.length;++i){
        let [pass,total]  =classes[i];
        mhp.offer(new ClassNode((pass+1)/(total+1)-(pass/total),total,pass));
    }
    console.log(mhp);
    let watchdog = 0;
    while(extraStudents>0){
        let {val,total,pass} = mhp.poll();
        if(total>pass){
            ++total;
            ++pass;
            --extraStudents;
            watchdog = 0;
            mhp.offer(new ClassNode((pass+1)/(total+1)-(pass/total),total,pass));
            //console.log(val,pass,mhp);
        }else{
            ans+=1;
        }
        ++watchdog;
        if(watchdog>classes.length) break;
    }
    console.log(mhp);
    while(!mhp.empty()){
        let {total,pass} = mhp.poll();
        ans+=(pass/total);
    }
    return (ans/classes.length).toFixed(5);
};
console.log(maxAverageRatio([[1,2],[3,5],[2,2]],2));
console.log(maxAverageRatio([[2,4],[3,9],[4,5],[2,10]],4));
// console.log(maxAverageRatio([[1,4],[2,4],[3,4]],4));