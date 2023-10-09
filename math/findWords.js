//212. 单词搜索 II
// 给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words， 返回所有二维网格上的单词 。
//单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class WordsDic{
    constructor(){
        this.root = Object.create(null);
    }
    add(str){
        let obj = this.root;
        for(let i=0;i<str.length;++i){
            if(typeof obj[str[i]] === 'undefined') obj[str[i]] =Object.create(null);
            obj = obj[str[i]];
        }
        obj['$$'] =  str;
    }
}
var findWords = function(board, words) {//字典树+回溯
    let wd = new WordsDic;
    let ans = new Set;
    for(let i=0;i<words.length;++i){
        wd.add(words[i]);
    }
    let m = board.length,n = board[0].length;
    const dir = [[0,1],[1,0],[0,-1],[-1,0]];
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(typeof wd.root[board[i][j]]==="undefined") continue;
            traceBack([i,j],wd.root,new Set([i*n+j]));
        }
    }
    function traceBack(start,dic,visit){
        const [x,y] = start;
        let next = dic[board[x][y]];
        if(typeof next === 'undefined') return;
        if(next['$$']){
            // console.log(next['$$'])
            ans.add(next['$$']);
        }
        for(let i=0;i<dir.length;++i){
            let dx = x + dir[i][0],dy = y + dir[i][1];
            if(dx<0||dx>=m||dy<0||dy>=n||visit.has(dx*n+dy)) continue;
            visit.add(dx*n+dy);
            traceBack([dx,dy],next,visit);
            visit.delete(dx*n+dy);
        }
    }
    return Array.from(ans);
};
console.log(findWords([
    ["o","a","a","n"],
    ["e","t","a","e"],
    ["i","h","k","r"],
    ["i","f","l","v"]
], 
["oath","pea","eat","rain","aaa"]));