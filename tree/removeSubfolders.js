//1233. 删除子文件夹
/**
 * @param {string[]} folder
 * @return {string[]}
 */
class FileNode{
    constructor(name){
        this.name = name;
        this.count = 0;
        this.children = Object.create(null);
    }
}
var removeSubfolders = function(folder) {//简单构造 O(n)
    let root = new FileNode(null);
    for(let i=0;i<folder.length;i++){
        let arr = folder[i].split("/");
        //console.log(arr);
        let node = root;
        for(let j=1;j<arr.length;j++){
            if(typeof node.children[arr[j]] === "undefined") node.children[arr[j]] = new FileNode(arr[j]);
            node = node.children[arr[j]];
        }
        node.count++;
    }
    console.log(root);
    let ans = new Set;
    for(let i=0;i<folder.length;i++){
        let arr = folder[i].split("/");
        //console.log(arr);
        let node = root,child = false;
        for(let j=1;j<arr.length;j++){
            if(node.count>0){child = true;break;};
            node = node.children[arr[j]];
        }
        if(!child) ans.add(folder[i]);
    }
    return Array.from(ans);
};
var removeSubfolders = function(folder) {//排序方法
    folder.sort();
    console.log(folder);
    let ans = [];
    let prefix = folder[0];
    ans.push(prefix);
    for(let i=1;i<folder.length;i++){
        if(folder[i].indexOf(prefix)===0&&(~["/",""].indexOf(folder[i][prefix.length]))) continue;
        prefix = folder[i];
        ans.push(prefix);
    }
    return ans;
}
console.log(removeSubfolders(["/a","/a/b","/c/d","/c/d/e","/c/f"]));
console.log(removeSubfolders(["/a","/a/b/c","/a/b/d"]));