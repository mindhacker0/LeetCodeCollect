//707. 设计链表
function LinkedNode(val){
    this.val = val;
    this.next = null;
    //this.prev = null;
}
var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.indexMap = new Map;
    this.dirty = 0;//不需要每次添加都更新索引，dirty表示[0，dirty]的数据不需要更新
    this.size = 0;
};
MyLinkedList.prototype.getIndex = function(index){//查询下标的节点，如果查询的节点大于dirty需要更新以获得正确的节点
    if(index<0||index>=this.size) return null;
    let node = this.indexMap.get(this.dirty);
    while(this.dirty<index&&node){
        node = node.next;
        this.dirty++;//更正的下标前移
        this.indexMap.set(this.dirty,node);        
    }
    let res = this.indexMap.get(index);
    return typeof res === "undefined"?null:res;
}
/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let node = this.getIndex(index);
    return node===null?-1:node.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node  = new LinkedNode(val);
    if(this.head === null&&this.tail===null){
        this.head = node;
        this.tail = node;
    }else{
        node.next = this.head;
        this.head = node;
    }
    this.indexMap.set(0,node);
    this.dirty = 0;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node  = new LinkedNode(val);
    if(this.head === null&&this.tail===null){
        this.head = node;
        this.tail = node;
    }else{
        this.tail.next = node;
        this.tail = node;
    }
    this.indexMap.set(this.size,node);
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index >this.size) return;
    if(index === 0) return this.addAtHead(val);
    if(index === this.size) return this.addAtTail(val);
    let node = new LinkedNode(val);
    let prev = this.getIndex(index-1);
    let next = this.getIndex(index);
    prev.next = node;
    node.next = next;
    this.size++;
    this.dirty = Math.min(this.dirty,index-1);
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let node = this.getIndex(index);
    if(node){
        if(this.size === 1){
            this.head = null;
            this.tail = null;
            this.dirty = 0;
        }else{
            if(index === 0){
                this.head = node.next;
                node.next = null;
                this.indexMap.set(0,this.head);
                this.dirty = 0;
            }else{
                let prev = this.getIndex(index-1);
                prev.next = node.next;
                node.next = null;
                if(index === this.size-1) this.tail = prev;
                this.dirty = Math.min(this.dirty,index-1);
            }
        }
        this.size--;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
