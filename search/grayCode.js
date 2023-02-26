//89. 格雷编码
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let stack = [],visit = new Set,arr = [];
    stack.push(0);
    visit.add(0);
    arr.push(0);
    while(stack.length){
        let now = stack.pop();
        console.log(now,visit.has(now));
        arr.push(now);
        //if(now&&){ arr.pop();visit.delete(now);}
        for(let i=0;i<n;++i){
            next = now^(1<<i);
            if(visit.has(next)) continue;
            visit.add(next);
            arr.push(next);
            stack.push(next);
        }
        console.log(stack);
    }
};
console.log(grayCode(2));