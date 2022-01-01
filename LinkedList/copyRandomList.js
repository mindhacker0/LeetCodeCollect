function makeRandomListFromArray(arr) {//通过数组创建特定链表
    let root = new ListNode();
    let map = new Map;
    function MakeNode(roots, itemVal, arr) {
        let [val, random] = itemVal;
        let randomNode = null;
        if (map.get(val)) roots = map.get(val);
        else {
            roots.val = val;
            map.set(val, roots);
        }
        // 创建随机的指向
        if (random !== null) {
            random = arr[random][0];
            if (map.get(random)) {
                randomNode = map.get(random);
            }else{
                randomNode = new ListNode(random, null, null);
                map.set(random, randomNode);
                console.log("set",random);
            }
           
        }
        console.log(val,random);
        roots.random = randomNode;
        roots.next = new ListNode();
        return roots;
    }
    let node = root;
    for (var i = 0; i < arr.length; i++) {
        node = MakeNode(node, arr[i], arr).next;
    }
    return root;
}
function ListNode(val, next, random) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
    this.random = random;
}
/**
 * @param {Node} head
 * @return {Node}
*/
var copyRandomList = function (head) {
    console.log(head);
    let root = new ListNode(head.val, null, null);
    let map = new Map;
    map.set(head.val, root);
    function tranverse(sroot, copyNode, index) {
        if (sroot.next === null){
            if (sroot.random !== null) {
                console.log(sroot)
                // let random = sroot.random.val;
                // copyNode.random = map.get(random) || null;
            }
            return;
        } 
        let val = sroot.next.val;
        let node, randomNode = null;
        node = new ListNode(val, null, null);
        map.set(val, copyNode);
        if (sroot.random !== null) {
            let random = sroot.random.val;
            console.log(random,map.get(random));
            if(map.get(random)){
                randomNode = map.get(random);
            } else {
                randomNode = new ListNode();
                map.set(random, randomNode);
            }
        }
        copyNode.next = node;
        copyNode.random = randomNode;
        index++;
        tranverse(sroot.next, copyNode.next, index);
    }
    tranverse(head, root, 0);
    return root;
};
console.log(makeRandomListFromArray([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]));
//console.log(copyRandomList(makeRandomListFromArray([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]])));