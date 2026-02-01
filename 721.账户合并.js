/*
 * @lc app=leetcode.cn id=721 lang=javascript
 *
 * [721] 账户合并
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
class DisJointSets{
    constructor(len){
        this.fa = new Array(len);
        for(let i=0;i<len;++i) this.fa[i] = i;
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
}
var accountsMerge = function(accounts) {
    const len = accounts.length;
    const mailMap  = new Map;
    const djs = new DisJointSets(accounts.length);
    accounts.forEach((account,index)=>{
        for(let i=1;i<account.length;++i){
            const pre = mailMap.get(account[i]);
            if(typeof pre !== "undefined"){
                djs.union(index,pre);
            }else{
                mailMap.set(account[i],index);
            }
        }
    });
    //console.log(mailMap,djs)
    const result = {};
    for(let i=0;i<len;++i){
        const par = djs.find(i);
        if(!result[par]) result[par] = new Set;
        for(let j=1;j<accounts[i].length;++j){
            result[par].add(accounts[i][j]);
        }
    }
    //console.log(result);
    const res = [];
    for(let k in result){
        const arr = Array.from(result[k]);
        res.push([accounts[k][0],...(arr.sort())]);
    }
    return res;
};
// console.log(accountsMerge([["David","David0@m.co","David1@m.co"],["David","David3@m.co","David4@m.co"],["David","David4@m.co","David5@m.co"],["David","David2@m.co","David3@m.co"],["David","David1@m.co","David2@m.co"]]));
// console.log(accountsMerge([["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]));
// console.log(accountsMerge([["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]));
// console.log(accountsMerge([["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]));
// @lc code=end

