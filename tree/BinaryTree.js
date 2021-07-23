function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
class BinaryTree{
    constructor(){
        this.root = null;
        this.hook = {
            firstOrder:()=>{},
            middleOrder:()=>{},
            endOrder:()=>{}
        }
    }
    tranverse(node){
        if(node === null) return;
        this.hook.firstOrder(node);
        this.tranverse(node.left);
        this.hook.firstOrder(node);
        this.tranverse(node.right);
        this.hook.firstOrder(node);
    }
    add(elem){
        let addFinish = false;
        let queue = [];
        this.hook.firstOrder = (node)=>{
            if(node.left === null && !addFinish){
                node.left = new TreeNode(elem);
                addFinish = true;
            }else if(node.right === null && !addFinish){
                node.right = new TreeNode(elem);
                addFinish = true;
            }
        }
        if(this.root === null) this.root = new TreeNode(elem);
        else this.tranverse(this.root);
    }
    delete(){
          
    }
}
let btree = new BinaryTree;
btree.add(2);
btree.add(3);
btree.add(4);
btree.add(5);
btree.add(6);
btree.add(7);
console.dir(btree);
function tranverse(node){//层序遍历较为简单写法
    let stack= [];
    stack.push(node);
    while(stack.length){
        let elem = stack.shift();
        console.log(elem.val);
        if(elem.left){
            stack.push(elem.left);
        }
        if(elem.right){
            stack.push(elem.right);
        }
    }
}