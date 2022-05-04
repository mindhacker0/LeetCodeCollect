//911. 在线选举
//#二分
/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
    this.times = times;
    this.persons = persons;
    let obj = {};//统计每个时刻领先的候选人
    let map = {};
    let max = -10e7,maxP;
    for(let i=0;i<persons.length;i++){
        if(typeof map[persons[i]] === "undefined") map[persons[i]] = 0;
        map[persons[i]]++;
        if(map[persons[i]]>=max){
            maxP = persons[i];
            max = map[persons[i]];
        }
        obj[times[i]] = maxP;//某时刻票数最多的候选人
    }
    console.log(obj,map);
    this.record = obj;
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
    let left = 0,right = this.times.length-1;
    while(left<right){
        let middle = (left+right)>>1;
        if(t<this.times[middle]){
            right = middle;
        }else if(t>this.times[middle]){
            left = middle;
        }else{
            left = middle;
            break;
        }
        //console.log(left,right);
        if(left<right && right-left <= 1) break; 
    }
    if(t>=this.times[right]) left = right;
    //console.log(t,this.times[left],this.times[right]);
    return this.record[this.times[left]];
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
//  let topVotedCandidate = new TopVotedCandidate();
//  topVotedCandidate.q(3); // 返回 0 ，在时刻 3 ，票数分布为 0 ，编号为 0 的候选人领先。
//  topVotedCandidate.q(12); // 返回 1 ，在时刻 12 ，票数分布为 [0,1,1] ，编号为 1 的候选人领先。
//  topVotedCandidate.q(25); // 返回 1 ，在时刻 25 ，票数分布为 [0,1,1,0,0,1] ，编号为 1 的候选人领先。（在平局的情况下，1 是最近获得投票的候选人）。
//  topVotedCandidate.q(15); // 返回 0
//  topVotedCandidate.q(24); // 返回 0
//  topVotedCandidate.q(8); // 返回 1
let topVotedCandidate = new TopVotedCandidate([0,1,0,1,1],[24,29,31,76,81]);
let arr = [28,24,29,77,30,25,76,75,81,80];//0011101011
// let topVotedCandidate = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);
// let arr = [3,12,25,15,24,8];
// let topVotedCandidate = new TopVotedCandidate([0,0,0,0,1],[0,6,39,52,75]);
// let arr = [45,49,59,68,42,37,99,26,78,43];  //0000000000
//console.log(topVotedCandidate.q(-1));
// let topVotedCandidate = new TopVotedCandidate([0,0,1,1,2],[0,67,69,74,87]);
// let arr = [4,62,100,88,70,73,22,75,29,10];//0011000100
for(let i in arr){
    console.log(arr[i],topVotedCandidate.q(arr[i]));
}
 