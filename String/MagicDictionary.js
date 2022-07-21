//676. 实现一个魔法字典
class Trie{//字典树
    constructor(){
        this.root = Object.create(null);
    }
    addStr(str){//插入数据
        let node = this.root;
        let index = 0,len = str.length;
        while(index < len){
            let token = str[index];
            if(!(token in node)){
               node[token] = Object.create(null);
            }
            node = node[token];
            if(index === len-1){
                if(typeof node["$"] === "undefined") node["$"] = 0;
                node["$"]++;
            }
            index++;
        }
    }
    find(str){//查找字符串
        let node = this.root;
        let index = 0,len = str.length;
        while(index < len){
            let token = str[index];
            if(token in node){
               node = node[token];
            }
            else return -1;
            index++;
        }
        return typeof node["$"]==="undefined"?-1:node["$"];
    }
}
var MagicDictionary = function() {
    Trie.prototype.find  = function(str){
        let node = this.root;
        let len = str.length;
        function getNodeIndex(node,index,diff){
            if(typeof node === "undefined"||diff>1) return false;
            if(index>=len) return typeof node["$"]==="undefined"?false:(diff==1);
            let token = str[index];
            let result = false;
            for(let obj in node){
                result = result || getNodeIndex(node[obj],index+1,obj === token?diff:diff+1);
            }
            return result;
        }
        return getNodeIndex(node,0,0);
    }
    let trie = new Trie();
    this.trie = trie;
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    for(let i=0;i<dictionary.length;i++){
        this.trie.addStr(dictionary[i]);
    }
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    return this.trie.find(searchWord);
};
let nameArr = ["MagicDictionary", "buildDict", "search", "search", "search", "search"];
let paramArr = [[], [["hello","hallo","leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]];
let magic = null;
for(let i=0;i<nameArr.length;i++){
    let name = nameArr[i]
    if(name === "MagicDictionary") magic = new MagicDictionary();
    else console.log(magic[nameArr[i]](paramArr[i][0]));
}