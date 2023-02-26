//1797. 设计一个验证系统
//简单哈希
/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function(timeToLive) {
    this.tle = timeToLive;
    this.idMap = new Map;
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
    this.idMap.set(tokenId,currentTime);
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
    let preTime = this.idMap.get(tokenId);
    if(typeof preTime === "undefined"||currentTime - preTime>=this.tle) return;
    this.idMap.set(tokenId,currentTime);
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
    let count = 0;
    this.idMap.forEach((time,id)=>{
        if(currentTime - time<this.tle) count++;
    });
    return count;
};
//哈希+链表
class LinkNode{
    constructor(id,time){
        this.id = id;
        this.time = time;
        this.next = null;
        this.prev = null;
    }
}
/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function(timeToLive) {
    this.tle = timeToLive;
    this.nodeMap = new Map;
    this.head = null;
    this.tail = null;
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
    let node = this.nodeMap.get(tokenId);
    if(typeof node === "undefined"){//新建节点
        node = new LinkNode(tokenId,currentTime+this.tle);
    }else{//挪动原节点
        let preNode = node.prev;
        if(preNode!==null) preNode.next = node.next;
        else this.head = node.next;//更新头结点
        let nextNode = node.next;
        if(nextNode!==null) nextNode.prev = preNode;
        else this.tail = preNode;
        node.time = currentTime+this.tle;
    }
    //插入到链表结尾
    if(this.head === null){
        this.head = node;
        this.tail = node;
    }else{
        this.tail.next = node;
        node.prev = this.tail;
        node.next = null;
        this.tail = node;
    }
    this.nodeMap.set(tokenId,node);
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
    let node = this.nodeMap.get(tokenId);
    if(typeof node === "undefined"||node.time<=currentTime) return;
    let preNode = node.prev;
    if(preNode!==null) preNode.next = node.next;
    else this.head = node.next;//更新头结点
    let nextNode = node.next;
    if(nextNode!==null) nextNode.prev = preNode;
    else this.tail = preNode;
    node.time = currentTime+this.tle;
    //插入到链表结尾
    if(this.head === null){
        this.head = node;
        this.tail = node;
    }else{
        this.tail.next = node;
        node.prev = this.tail;
        node.next = null;
        this.tail = node;
    }
    this.nodeMap.set(tokenId,node);
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
    let node = this.head,count = 0;
    while(node){
        if(node.time<=currentTime){
            this.head = node.next;
            node.next.prev = null;
        }else ++count;
        node=node.next;
    }
    if(this.head === null) this.tail = null;
    //console.log(this.head)
    return count;
};
/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */