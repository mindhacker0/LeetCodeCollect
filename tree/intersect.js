//558. 四叉树交集
function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
   this.val = val;
   this.isLeaf = isLeaf;
   this.topLeft = topLeft;
   this.topRight = topRight;
   this.bottomLeft = bottomLeft;
   this.bottomRight = bottomRight;
};

/**
 @param {Node} quadTree1
 @param {Node} quadTree2
 @return {Node}
*/
var intersect = function(quadTree1, quadTree2) {
    function tranvse(qTree1,qTree2){
        let node = new Node(false,false,null,null,null,null);
        let val = false,isLeaf = true;
        ["topLeft","topRight","bottomLeft","bottomRight"].forEach((key)=>{
            if(qTree1[key]===null&&qTree2[key]===null) node[key] = null;
            else {
                if(qTree1[key]===null) qTree1[key] = new Node(false,true,null,null,null,null);
                if(qTree2[key]===null) qTree2[key] = new Node(false,true,null,null,null,null);
                node[key] = tranvse(qTree1[key],qTree2[key]);
            }
            val=val||(node[key]===null?false:node[key].val);
            if(node[key]!==null) isLeaf = false;
        });
        node.isLeaf = isLeaf;
        node.val = val;
        return node;
    }
    return tranvse(quadTree1,quadTree2);
};
