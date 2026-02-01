/*
 * @lc app=leetcode.cn id=685 lang=javascript
 *
 * [685] 冗余连接 II
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
class DisJointSets {
    constructor(len){
        this.fa = new Array(len);
        this.len = len;
        this.init();
    }
    init(){
        for(let i =0;i<this.len;++i){
            this.fa[i] = i;
        }
    }
    find(x){
        return x === this.fa[x]?x:(this.fa[x] = this.find(this.fa[x]));
    }
    union(a,b){
        a = this.find(a);
        b = this.find(b);
        if(a!==b){
            this.fa[a] = b;
        }
    }
    sameSet(a,b){
        return this.find(a) === this.find(b);
    }
}
var findRedundantDirectedConnection = function(edges) {
    const len = edges.length;
    const djs = new DisJointSets(len+1);
    let result = -1;
    for(let i=0;i<len;++i){
        djs.init();
        let mutiPar = false;
        for(let j=0;j<len;++j){
            if(i === j) continue;
            const [from,to] = edges[j];
            if(djs.fa[to]!==to){//多个父节点
                mutiPar = true;
                break;
            }
            djs.union(to,from);
        }
        let pre =  -1,sameAces = true;
        for(let i = 1;i<=len;++i){
            const now = djs.find(i);
            if(i>1 && now!== pre){//根节点不一样
                sameAces = false; 
                break;
            }
            pre =  now;
        }
        if(!mutiPar && sameAces) result = i;
        //console.log(mutiPar,sameAces,djs)
    }
    return edges[result];
};
//console.log(findRedundantDirectedConnection([[1,2],[1,3],[2,3]]));
//console.log(findRedundantDirectedConnection([[1,2],[2,3],[3,4],[4,1],[1,5]]));
//console.log(findRedundantDirectedConnection([[2,1],[3,1],[4,2],[1,4]]));//【2，1】
// @lc code=end

