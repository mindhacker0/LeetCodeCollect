/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    function Contain(num,parent){
        this.num = num||0;
        this.parent = parent||null;
        this.children = [];
    }
    function Word(word){
        this.word = word||"";
    }
    let num = 0;
    let ans = [];
    let cur = null;
    let curWord = null;
    function start(s){//开始可能遇到的情况
        if(/[a-z]/.test(s)) return wordStart(s);
        if(/[0-9]/.test(s)) return countStart(s);
        if(s === "$") return end;
    }
    function countStart(s){
        const node = new Contain(0,cur);
        if(cur) cur.children.push(node);
        cur = node;
        return count(s);
    }
    function count(s){
        if(/[0-9]/.test(s)){
            cur.num=cur.num*10+Number(s);
            return count;
        }else{
            return countEnd(s);
        }
    }
    function countEnd(s){
        if(s === "["){
            return wordStart;
        }
    }
    function wordStart(s){
        curWord = new Word();
        return words(s);
    }
    function words(s){
        if(/[a-z]/.test(s)){
            curWord.word+=s;
            return words;
        }       
        return wordsEnd(s);
    }
    function wordsEnd(s){
        if(/[a-z]/.test(s)) return wordStart(s);
        if(/[0-9]/.test(s)){
            if(cur) cur.children.push(curWord);
            else ans.push(curWord);
            return countStart(s);
        }
        if(s==="]"){
            if(cur){
                cur.children.push(curWord);
                curWord = null;
            }
            if(cur.parent === null) ans.push(cur);
            cur = cur.parent;
            return wordsEnd; 
        }
        if(s === "$") return end();                
    }
    function end(){
        if(curWord) ans.push(curWord);
    }
    let stat = start;
    s+="$";
    for(const t of s){
        stat = stat(t);
        console.log(stat)
    }
    console.log(ans);
    function recur(arr){
        let res = "";
        for(const node of arr){
           if(node instanceof Word) res+=node.word;
           else if(node instanceof Contain){
               res+=recur(node.children).repeat(node.num);
           }
        }
        return res;
    }
    return recur(ans);
};
console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));
console.log(decodeString("abc3[cd]xyz"));