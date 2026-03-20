// 题目描述
// 定义构造三叉搜索树规则如下：
// 每个节点都存有一个数，当插入一个新的数时，从根节点向下寻找，直到找到一个合适的空节点插入。查找的规则是：
// 如果数小于节点的数减去500，则将数插入节点的左子树
// 如果数大于节点的数加上500，则将数插入节点的右子树
// 否则，将数插入节点的中子树
// 给你一系列数，请按以上规则，按顺序将数插入树中，构建出一棵三叉搜索树，最后输出树的高度。
// 输入描述
// 第一行为一个数 N，表示有 N 个数，1 ≤ N ≤ 10000
// 第二行为 N 个空格分隔的整数，每个数的范围为[1,10000]
// 输出描述
// 输出树的高度（根节点的高度为1）
function Node(val,x,y,z){
    this.val = (val||undefined);
    this.x = (x || null);
    this.y = (y || null);
    this.z = (z || null);
}
class ThTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        const node = new Node(val);
        if(this.root === null) this.root = node;
        else{
           const parent = this.recur(null,this.root,val);
           if(val < parent.val - 500) parent.x = node;
           else if(val > parent.val - 500) parent.y = node;
           else parent.z = node;
        }
    }
    recur(parent,node,val){
       if(node === null) return parent;
       if(val < node.val - 500) return this.recur(node,node.x,val);
       else if(val > node.val - 500) return this.recur(node,node.y,val);
       else return this.recur(node,node.z,val);
    }
    getHeight(){
        function recur(node){
            if(node === null) return 0;
            return Math.max.call(null,recur(node.x),recur(node.y),recur(node.z)) + 1;
        }
        return recur(this.root);
    }
}
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.output
});
let linecount = 0;
let nums;
rl.on("line",(line)=>{
    if(linecount === 1){
        nums = line.split(" ").map(v=>+v);
        const tt = new ThTree();
        nums.forEach((v)=>tt.insert(v));
        console.log(tt.getHeight());
        rl.close();
    }
    linecount++;
});