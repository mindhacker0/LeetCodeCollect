//剑指 Offer 33. 二叉搜索树的后序遍历序列
/**
 * @param {number[]} postorder
 * @return {boolean}
*/
var verifyPostorder = function(postorder){
    let start = 0;end = postorder.length-1;
    function tranverse(left,right){
        console.log(left,right);
        if(left>=right) return true;
        let root = postorder[right];
        let index = left;
        while(postorder[index]<root) index++;
        while(index<right){
            if(postorder[index]<=root) return false;
            index++;
        }
        return  tranverse(left,index-1)&&tranverse(index,right-1);
    }
    return tranverse(start,end);
};
// console.log(verifyPostorder([1,3,2,6,5]));
console.log(verifyPostorder([1,6,3,2,5]));
