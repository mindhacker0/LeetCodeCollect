//14. 最长公共前缀
/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function(strs) {
    function Trie(){//字典树
        this.Head = Object.create(null);
        let endSign = Symbol.for("$end");
        this.endSymbol = endSign;
        this.addStr = function(str){
            let node = this.Head;
            for(let i in str){
                if(str.hasOwnProperty(i)){
                    if(!node[str[i]]){
                        node[str[i]] = {};
                    }
                    node=node[str[i]];
                }
            }
            node[endSign]?node[endSign]++:(node[endSign]=1);
        }
    }
    let trie1 = new Trie();
    for(let i in strs){
        trie1.addStr(strs[i]);
    }
    let tree = trie1.Head;
    let prefix = [];
    function tranceTree(node){
        let nums = 0;
        let s = '';
        for(let i in node){
            s = i;
            nums++;     
        }
        if(nums>1) return;
        if(s!== "$") prefix.push(s);
        if(typeof node[s] === "object"){
            tranceTree(node[s]);
        }
        else console.log(node[s]);
    }
    tranceTree(tree,0);
    return prefix.join("");
};
// console.log(longestCommonPrefix(["adfsffaf","affsdddd"]));
// console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix([""]));