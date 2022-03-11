//648. 单词替换
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
*/
function Trie(){
    this.Head = Object.create(null);
    let endSign = Symbol.for("$end");
    this.endSymbol = endSign;
    this.addStr = function(str){//添加字符到字典树
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
    this.getPre = function(word){
        let node = this.Head;
        let preList = [];
        let prev = '';
        for(let i of word){
            if(node[i]){
                prev+=i;
                node = node[i];
                if(node[endSign]>=1) preList.push(prev);
            }else{
                break;
            }
           
        }
        console.log(preList);
        return preList.shift();
    }
}
var replaceWords = function(dictionary, sentence) {
    let trie = new Trie();
    for(let i=0;i<dictionary.length;i++){
        trie.addStr(dictionary[i]);
    }
    sentence = sentence.split(" ");
    for(let i=0;i<sentence.length;i++){
        let pre = trie.getPre(sentence[i]);
        if(pre){
            sentence[i] = pre;
        }
    }
    return sentence.join(" ");
};
console.log(replaceWords(["cat","bat","rat"],"the cattle was rattled by the battery"));
console.log(replaceWords(["a", "aa", "aaa", "aaaa"],"a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"));