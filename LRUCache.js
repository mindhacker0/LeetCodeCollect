//146. LRU 缓存
class doubleListNode{
    constructor(key,value){
        this.key=key;
        this.value=value;
        this.next = null;
        this.prev = null;
    }
}
// class LRUCache{
//     constructor(capacity){
//         this.capacity = capacity;
//         this.hashMap = {};
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }
//     get(key){
//         let set = this.hashMap[key];
//         if(set){
//             let node = set.entries().next().value[1];
//             let value = node.value;
//             if(this.head.next && node.next){//不是尾部节点，需要提升当前节点
//                 this.removeNode(node);
//                 let now = new doubleListNode(key,value);
//                 this.tail.next = now;
//                 now.prev = this.tail;
//                 this.tail = this.tail.next;
//                 this.hashMap[key] = new Set([this.tail]);
//             }
//             return node.value;
//         }else{
//             return -1;
//         }
//     }
//     put(key,value){
//         if(this.hashMap[key]){//已存在键值对，要先删除再添加
//             let set = this.hashMap[key];
//             let node = set.entries().next().value[1];
//             node.value = value;
//             if(node.next === null){//尾部元素不需要处理
//                 return;
//             }
//             this.removeNode(node);
//             this.size--;
//         }else if(this.capacity<=this.size){//超出容量，删除头部节点
//             this.removeNode(this.head);
//             this.size--;
//         }
//         if(this.head === null||this.tail === null){
//             this.head = new doubleListNode(key,value);
//             this.tail =  this.head;
//         }else{
//             let now = new doubleListNode(key,value);
//             this.tail.next = now;
//             now.prev = this.tail;
//             this.tail = this.tail.next;
//         }
//         this.hashMap[key] = new Set([this.tail]);
//         this.size++;
//     }
//     removeNode(node){//删除节点
//         if(node.next === null){//被删除节点在尾部，要修改tail指向
//             this.tail = this.tail.prev;
//             if(this.tail) this.tail.next = null;
//         }else{
//             if(node.prev!==null){
//                 node.prev.next = node.next;
//                 if(node.next){
//                     node.next.prev = node.prev;
//                 }
//             }else if(node.next){//被删除节点在头部，要修改head指向
//                 this.head = node.next;
//                 if(this.head) this.head.prev = null;
//             }
//         }
//         delete this.hashMap[node.key];
//     }

// }
function printLink(link){//打印当前链表
    let arr = [];
    let set = new Set;
    while(link){
        if(set.has(link)) break;
        set.add(link);
        arr.push(link.key);
        link = link.next;
    }
    return arr;
}
//Map解法
// var LRUCache = function(capacity) {
//     this.capacity = capacity;
//     this.cache = new Map;
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//     let val = this.cache.get(key);
//     if(typeof val!=="undefined"){
//         this.cache.delete(key);
//         this.cache.set(key,val);
//     }
//     return typeof val==="undefined"?-1:val;
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//     let old = this.cache.get(key);
//     if(old) this.cache.delete(key);
//     this.cache.set(key,value);
//     //大于容量，淘汰首位
//     //console.log(this.cache.size)
//     if(this.cache.size>this.capacity){
//         let head = Array.from(this.cache.keys())[0];
//         this.cache.delete(head);
//         //console.log('del',this.cache.size,head)
//     }
// };
let cache;
let func = ["LRUCache","put","get","put","get","get"]
let data = [[1],[2,1],[2],[3,2],[2],[3]]
let result = [];
for(var i=0;i<func.length;i++){
    if(func[i] === "LRUCache"){
        cache = new LRUCache(data[i][0]);
    }else{
        let res = cache[func[i]](...data[i]);
        result.push(res);
        console.log(func[i],data[i],printLink(cache.head));
    }
}
console.log(result);                                                                                                            