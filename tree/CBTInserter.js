//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}
/**
* @param {TreeNode} root
*/
//路径计算法
var CBTInserter = function(root){
    this.root = root;
    this.size = 0;
    function tranverse(node){
       if(node === null) return;
       this.size++;
       tranverse(node.left);
       tranverse(node.right);
    }
    tranverse(root);
};

/** 
* @param {number} val
* @return {number}
*/
CBTInserter.prototype.insert = function(val) {
    if(this.root === null){
        this.root  = new TreeNode(val);
        this.size++;
        return;
    } 
    let next = this.size+1;
    let path = [];
    while(next>0){
        path.unshift(next);
        next=next>>1;
    }
    console.log(path);
    function tranverse(node,level){
        if(node === null) return null;
        path.shift();
        if(path.length === 1){//该位置为本次安放位置
            if(path[0]===level*2) node.left = new TreeNode(val);
            if(path[0]===level*2+1) node.right = new TreeNode(val);
            this.size++;
        }else{
            if(path[0]===level*2) tranverse(node.left,level+1);
            if(path[0]===level*2+1) tranverse(node.right,level+1);
        }
    }
    tranverse(this.root,1);
};

/**
* @return {TreeNode}
*/
CBTInserter.prototype.get_root = function() {
    return this.root;
};
// 数组缓存节点
/**
* @param {TreeNode} root
*/
var CBTInserter = function(root){
    let cache = [null];
    let stack = [];
    stack.push(root);
    while(stack.length){
        let node = stack.shift();
        cache.push(node);
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
    this.cache = cache;
    console.log(this.cache);
};

/** 
* @param {number} val
* @return {number}
*/
CBTInserter.prototype.insert = function(val) {
    let len = this.cache.length;
    let parent = len>>1;
    let parentNode = this.cache[parent];
    let newNode = new TreeNode(val);
    if(parent*2 === len){
        parentNode.left = newNode;
    }else{
        parentNode.right = newNode;
    }
    this.cache.push(newNode);
    return parentNode.val;
};

/**
* @return {TreeNode}
*/
CBTInserter.prototype.get_root = function() {
    return this.root;
};
/**
* Your CBTInserter object will be instantiated and called as such:
* var obj = new CBTInserter(root)
* var param_1 = obj.insert(val)
* var param_2 = obj.get_root()
*/