//433. 最小基因变化
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {//单向广搜
    let minlen = 10e7;
    let len = start.length;
    function bfs(index,arr,path){
        if(arr.join("") === end){
            console.log(path)
            minlen = Math.min(minlen,path.length);
        }
        for(let i=0;i<len;i++){
            for(let k of ["A","C","G","T"]){
                let prev = arr[i];
                arr[i] = k;
                let next = arr.join("");
                if(~bank.indexOf(next) && (!~path.indexOf(next))){
                    path.push(next);
                    bfs(index+1,arr,path);
                    path.pop();
                }
                arr[i] = prev;
            }
        }
    }
    bfs(0,start.split(""),[]);
    return minlen===10e7?-1:minlen;
};
var minMutation = function(start, end, bank) {//双向广搜
    if(!~bank.indexOf(end)) return -1;
    let minlen = 10e7;
    let len = start.length;
    let bankSet = new Set(bank);
    function bfs(index,arr,path,eArr,ePath){
        if(ePath.length<path.length) return bfs(index,eArr,ePath,arr,path);//少的优先搜索
        for(let i=0;i<len;i++){
            for(let k of ["A","C","G","T"]){
                let prev = arr[i];
                arr[i] = k;
                let next = arr.join("");
                if(bankSet.has(next) && (!~path.indexOf(next))){
                    console.log(path,next);
                    if(~ePath.indexOf(next)){ 
                        console.log(index,ePath,path,next);
                        minlen = Math.min(minlen,(path.length+ePath.length-1));
                        return;
                    }
                    path.push(next);
                    bfs(index+1,arr,path,eArr,ePath);
                    //path.pop();
                }
                arr[i] = prev;
            }
        }
    }
    bfs(0,start.split(""),[start],end.split(""),[end]);
    return minlen===10e7?-1:minlen;
};
// console.log(minMutation("AACCGGTT","AAACGGTA",["AACCGGTA", "AACCGCTA", "AAACGGTA"]));
// console.log(minMutation( "AAAAACCC","AACCCCCC",["AAAACCCC", "AAACCCCC", "AACCCCCC"]));
//console.log(minMutation("AACCGGTT","AAACGGTA",["AACCGATT","AACCGATA","AAACGATA","AAACGGTA"]));
//console.log(minMutation("AAAAAAAA","CCCCCCCC",["AAAAAAAA","AAAAAAAC","AAAAAACC","AAAAACCC","AAAACCCC","AACACCCC","ACCACCCC","ACCCCCCC","CCCCCCCA","CCCCCCCC"]));
// console.log(minMutation("AAAAAAAA","AAGTAAAA",["CAAAAAAA","CCAAAAAA","CCATAAAA","CCGTAAAA","CAGTAAAA","AAGTAAAA"]));
