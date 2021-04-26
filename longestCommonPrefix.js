/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function(strs) {
    function Trie(){
        this.Head = Object.create(null);
        this.addStr = function(str){
            let node = this.Head;
            for(let i in str){
                if(!node[str[i]]){
                    node[str[i]] = {};
                }
                node=node[str[i]];
            }
            node['$']?node["$"]++:(node["$"]=1);
        }
    }
    let trie1 = new Trie();
    for(let i in strs){
        trie1.addStr(strs[i]);
    }
    let tree = trie1.Head;
    let prefix = "";
    function tranceTree(node){
        for(let i in node){
            if(typeof node[i] === "object"){
                prefix+=i;
                let nums = 0;
                for(let s in node[i]){
                   nums++;
                }
                if(nums === 1){
                    tranceTree(node[i],nums);
                }
            }
            else console.log(node[i]);
        }
    }
    tranceTree(tree);
    return prefix;
};
console.log(longestCommonPrefix(["adfsffaf","affsdddd"]));