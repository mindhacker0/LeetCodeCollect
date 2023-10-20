//308. 二维区域和检索 - 可变(四叉树)
class TreeNode{
    constructor(){
        this.sum = 0;
        this.children = [];
    }
}
class BlockTree{
    constructor(matrix){
        this.root = new TreeNode();
        this.h = matrix.length;
        this.w = matrix[0].length;
        this.build(this.root,matrix,0,0,this.h-1,this.w-1);
    }
    sum(node){
        let sum = 0;
        for(let i=0;i<node.children.length;++i){
           if(node.children[i]) sum+=node.children[i].sum;
        }
        node.sum = sum;
    }
    build(node,matrix,x,y,x1,y1){//建树
        let midx = (x+x1)>>1,midy = (y+y1)>>1;
        if(x===x1&&y===y1){//不可分
            node.sum = matrix[x][y];
        }else{
            node.children[0] = new TreeNode();
            this.build(node.children[0],matrix,x,y,midx,midy);//第一象限
            if(midy<y1){//第二象限
                node.children[1] = new TreeNode();
                this.build(node.children[1],matrix,x,midy+1,midx,y1);
            }
            if(midx<x1 && midy<y1){//第三象限
                node.children[2] = new TreeNode();
                this.build(node.children[2],matrix,midx+1,midy+1,x1,y1);
            }
            if(midx<x1){//第四象限
                node.children[3] = new TreeNode();
                this.build(node.children[3],matrix,midx+1,y,x1,midy);
            }
            this.sum(node);
        }
    }
    update(row, col, val){//四叉树点更新
        const vm = this;
        function updatePoint(node,x,y,x1,y1){
            if(x<=row&&x1>=row&&y<=col&&y1>=col){//分块范围包含更新点，都需要更新节点
                if(x===x1&&y===y1){//不可分
                    if(x===row&&y===col) node.sum = val;
                }else{
                    let midx = (x+x1)>>1,midy = (y+y1)>>1;
                    updatePoint(node.children[0],x,y,midx,midy);//第一象限
                    if(midy<y1){//第二象限
                        updatePoint(node.children[1],x,midy+1,midx,y1);
                    }
                    if(midx<x1 && midy<y1){//第三象限
                        updatePoint(node.children[2],midx+1,midy+1,x1,y1);
                    }
                    if(midx<x1){//第四象限
                        updatePoint(node.children[3],midx+1,y,x1,midy);
                    }
                    vm.sum(node);
                }
            }
        }
        updatePoint(this.root,0,0,this.h-1,this.w-1);
    }
    query(row1, col1, row2, col2){//区域和查询
       let res = 0;
       function sumRect(node,x,y,x1,y1){
          if(x>=row1&&x1<=row2&&y>=col1&&y1<=col2){//分块all in直接加起来
            res+=node.sum;
          }else{//找小分块
            if(x!==x1||y!==y1){
                let midx = (x+x1)>>1,midy = (y+y1)>>1;
                sumRect(node.children[0],x,y,midx,midy);//第一象限
                if(midy<y1){//第二象限
                    sumRect(node.children[1],x,midy+1,midx,y1);
                }
                if(midx<x1 && midy<y1){//第三象限
                    sumRect(node.children[2],midx+1,midy+1,x1,y1);
                }
                if(midx<x1){//第四象限
                    sumRect(node.children[3],midx+1,y,x1,midy);
                }
            }
          }
       }
       sumRect(this.root,0,0,this.h-1,this.w-1);
       return res;
    }
}
/**
 * @param {number[][]} matrix
*/
var NumMatrix = function(matrix) {//记录矩阵的和
    this.mtx = matrix;
    this.h = matrix.length;
    this.w = matrix[0].length;
    this.tree = new BlockTree(matrix);
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {//单元格的值更新
    this.mtx[row][col] = val;//更新矩阵
    this.tree.update(row, col, val);
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {//计算范围内的矩阵和
    return this.tree.query(row1, col1, row2, col2);
};

let matrix;
let func = ["NumMatrix", "sumRegion", "update","sumRegion"];
let data = [[[
    [3,0,1,4,2],
    [5,6,3,2,1],
    [1,2,0,1,5],
    [4,1,0,1,7],
    [1,0,3,0,5]
]],[2,1,4,3],[3,2,2],[2,1,4,3]];
let result = [];
for(var i=0;i<func.length;i++){
    if(func[i] === "NumMatrix"){
        matrix = new NumMatrix(data[i][0]);
    }else{
        let res = matrix[func[i]](...data[i]);
        result.push(res);
        //console.log(func[i],data[i]);
    }
}
console.log(result);