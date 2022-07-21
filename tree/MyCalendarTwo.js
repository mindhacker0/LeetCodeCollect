//731. 我的日程安排表 II
function SegNode(val,left,right){
    this.val = val;
    this.left = left;
    this.right = right;
    this.lazy = 0;
}
var MyCalendarTwo = function() {
    this.tree = Object.create(null);
};
/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {//订阅
    const maxRange = 1e9,_this = this;
    let result = true,add = 1;
    start++;
    updateRange(1,0,maxRange,start,end);
    function updateRange(index,left,right,start,end){//更新区间
        if(typeof _this.tree[index] === "undefined") _this.tree[index] = new SegNode(0,left,right);
        if((left===start && right === end)||left === right){
            _this.tree[index].val+=add;
            _this.tree[index].lazy+=add;
            //console.log(left,right,start,end);
            if(_this.tree[index].val>=3){
                
                result = false;
            } 
            return;
        }
        let mid = ~~((left+right)/2);
        let lazy = _this.tree[index].lazy;//该节点需要继续递归，处理懒惰标记
       //懒惰标记传递
        if(typeof _this.tree[index*2] === "undefined") _this.tree[index*2] = new SegNode(0,left,mid);
        if(typeof _this.tree[index*2+1] === "undefined") _this.tree[index*2+1] = new SegNode(0,mid+1,right);
        _this.tree[index*2].val+=lazy;
        _this.tree[index*2].lazy+=lazy;
        _this.tree[index*2+1].val+=lazy;
        _this.tree[index*2+1].lazy+=lazy;
        _this.tree[index].lazy = 0;
        if(end<=mid){
            updateRange(index*2,left,mid,start,end);//左边
        }else if(start>=mid+1){
            updateRange(index*2+1,mid+1,right,start,end);//右边
        }else{
            updateRange(index*2,left,mid,start,mid);//左边
            updateRange(index*2+1,mid+1,right,mid+1,end);//右边
        }
        _this.tree[index].val = Math.max( _this.tree[index*2].val,_this.tree[index*2+1].val);
    }
    if(result === false){//添加失败回退
        add = -1;
        updateRange(1,0,maxRange,start,end);
    }
    return result;
};

/**
* Your MyCalendarTwo object will be instantiated and called as such:
* var obj = new MyCalendarTwo()
* var param_1 = obj.book(start,end)
*/
let nameArr = ["MyCalendarTwo","book","book","book","book","book","book","book","book","book","book"]
let paramArr = [[],[24,40],[43,50],[27,43],[5,21],[30,40],[14,29],[3,19],[3,14],[25,39],[6,19]] //[null,true,true,true,true,false,false,true,false,false,false]
let calendar2 = null;
for(let i=0;i<nameArr.length;i++){
    let name = nameArr[i]
    if(name === "MyCalendarTwo") calendar2 = new MyCalendarTwo();
    else console.log(calendar2[nameArr[i]](...paramArr[i]));
}