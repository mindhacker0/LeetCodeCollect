//427. 建立四叉树
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
};
/**
 * @param {number[][]} grid
 * @return {Node}
*/
var construct = function(grid) {
    let width =grid.length,height = grid[0].length;
    function iterator(start,end){
        let [x1,y1] = start,[x2,y2] = end;
        let node = new Node(!!grid[x1][y2],false,null,null,null,null);
        if(x1 === x2 && y1 === y2){
            node.isLeaf = true;
        }else{
            let xMid = ~~((x1+x2)/2),yMid = ~~((y1+y2)/2);
            node.topLeft = iterator([x1,y1],[xMid,yMid]);
            node.topRight = iterator([xMid+1,y1],[x2,yMid]);
            node.bottomLeft = iterator([x1,yMid+1],[xMid,y2]);
            node.bottomRight = iterator([xMid+1,yMid+1],[x2,y2]);
            if((node.topLeft.val === true && node.topRight.val === true && node.bottomLeft.val === true && node.bottomRight.val===true)){
                node.val  = true;
                node.isLeaf = true;
                node.topLeft = null;
                node.topRight = null;
                node.bottomLeft = null;
                node.bottomRight = null;
            }else if(node.topLeft.val === false && node.topRight.val === false && node.bottomLeft.val === false && node.bottomRight.val===false){
                node.val  = false;
                node.isLeaf = true;
                node.topLeft = null;
                node.topRight = null;
                node.bottomLeft = null;
                node.bottomRight = null;
            }else{
                node.val = node.topLeft.val || node.topRight.val || node.bottomLeft.val|| node.bottomRight.val;
            }
        }
        return node;
    }
    return iterator([0,0],[height-1,width-1]);
};
console.log(construct([[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]));
console.log(construct([[1,0],[0,0]]));