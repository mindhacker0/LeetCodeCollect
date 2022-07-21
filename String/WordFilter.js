//745. 前缀和后缀搜索
class Trie{
    constructor(){
        this.root = Object.create(null);
    }
    insert(str,obj={}){
        let len = str.length;
        let index = 0;
        let node = this.root;
        while(index<len){
            let token = str[index];
            if(typeof node[token] === "undefined") node[token] = Object.create(null);
            node = node[token];
            index++;
        }
        node["$"] = obj;
        // if(typeof node["$"] === "undefined") node["$"] = [];
        // node["$"].push(obj);
    }
    insertReverse(str,obj={}){//倒序插入
        let len = str.length;
        let index = len-1;
        let node = this.root;
        while(index>=0){
            let token = str[index];
            if(typeof node[token] === "undefined") node[token] = Object.create(null);
            node = node[token];
            index--;
        }
        node["$"] = obj;
        // if(typeof node["$"] === "undefined") node["$"] = [];
        // node["$"].push(obj);
    }
    treeToWords(node){
        let arr = [];
        function iterator(node,path){
            for(let i in node){
                if(i === "$") arr.push({word:path.join(""),info:node["$"]});
                else{
                    path.push(i);
                    iterator(node[i],path);
                    path.pop();
                }
            }
        }
        iterator(node,[]);
        return arr;
    }
    getWordWithPrefix(str){
        let len = str.length;
        let index = 0;
        let node = this.root;
        while(index<len){
            let token = str[index];
            if(typeof node[token] === "undefined") break;
            node = node[token];
            index++;
        }
        if(index === len){
            //console.log(node);
           return this.treeToWords(node);
        }else{
            return [];
        }
    }
}
// function stringReverse(str){
//     let len  = str.length;
//     function iterator(str,start,end){
//         console.log(start,end);
//         if(start===end) return str[start];
//         let middle = ~~((start+end)/2);
//         return `${iterator(str,middle+1,end)}${iterator(str,start,middle)}`;
//     }
//     return iterator(str,0,len-1);
// }
function stringReverse(str){
    let len = str.length;
    let arr = str.split("");
    for(let i=0;i<~~(len/2);i++){
        let temp = arr[i];
        arr[i] = arr[len-i-1];
        arr[len-i-1] = temp;
    }
    return arr.join("");
}
/**
 * @param {string[]} words
*/
var WordFilter = function(words) {
    this.preTrie = new Trie();
    this.sufTrie = new Trie();
    words.forEach((str,index)=>{
        this.preTrie.insert(str,{str,index});
        this.sufTrie.insertReverse(str,{str,index});
    });
    // console.log(this.preTrie.root);
    // console.log(this.sufTrie.root);
};

/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function(pref, suff) {
    let preMatch = this.preTrie.getWordWithPrefix(pref);
    let suffMatch = this.sufTrie.getWordWithPrefix(stringReverse(suff));
    let preMap = new Map;
    let result = -1;
    if(preMatch.length)
    preMatch.forEach(({word,info})=>{
        preMap.set(info.str,info.index);
    });
    suffMatch.forEach(({word,info})=>{
        let index = preMap.get(info.str);
        if(!(typeof index === "undefined")) result = Math.max(result,index);
    });
    //console.log(preMatch,suffMatch,preMap);
    return result;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
*/
let nameArr = ["WordFilter", "f"];
let paramArr = [[["apple"]], ["a", "e"]];
let wordfilter = null;
for(let i=0;i<nameArr.length;i++){
     let name = nameArr[i];
     if(name === "WordFilter") wordfilter = new WordFilter(paramArr[i][0]);
     else console.log(wordfilter[nameArr[i]](paramArr[i][0],paramArr[i][1]));
}
