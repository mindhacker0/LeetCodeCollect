//1825. 求出 MK 平均值
class TreeNode{
    constructor(val=0,left=null,right=null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
class BST{//二叉搜索树
    constructor(){
        this.root = null;//根节点
        this.size = 0;//节点数量
    }
    insert(elem){//插入一个值
        const insertElem = new TreeNode(elem);
        if(this.root === null){//根节点为空
            this.root = insertElem;
            this.size++;
            return true;
        }
        //根节点不为空
        let cur = this.roor;
        
        
    }
    search(elem){//值的检索

    }
    delete(elem){//删除一个值

    }
}
/**
 * @param {number} m
 * @param {number} k
 */
 var MKAverage = function(m, k) {
    this.totalData = [];
    this.m = m;
    this.k = k;
};

/** 
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function(num) {
    this.totalData.push(num);
};

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function() {
    if(this.totalData.length<this.m) return -1;

};

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */