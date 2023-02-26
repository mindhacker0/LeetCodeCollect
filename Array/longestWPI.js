//1124. 表现良好的最长时间段
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {//暴力18.1%
    let ans = 0,prefix = [0],stack = [];
    for(let i=0;i<hours.length;++i){
        prefix[i+1] = prefix[i]+(hours[i]<=8?-1:1);
    }
    console.log(prefix);
    for(let i=0;i<prefix.length;++i){
        for(let j=i+1;j<prefix.length;++j){
            if(prefix[j]-prefix[i]>0) ans = Math.max(ans,j-i);
        }
    }
    return ans;
}
var longestWPI = function(hours) {//单调栈67.14%
    let ans = 0,prefix = [0],stack = [0];
    for(let i=1;i<=hours.length;++i){
        prefix[i] = prefix[i-1]+(hours[i-1]<=8?-1:1);
        if(prefix[stack[stack.length-1]]>prefix[i]) stack.push(i);
    }
    //console.log(prefix,stack);
    for(let i=hours.length;i>=1;--i){
        while(stack.length && prefix[stack[stack.length-1]]<prefix[i]){
            let index = stack.pop();
            // console.log(index,i)
            ans = Math.max(ans,i-index);
        }
    }
    return ans;
}
var longestWPI = function(hours) {//哈希
    let ans = 0,prefix = [0],hash = new Map;
    hash.set(0,0);
    for(let i=1;i<=hours.length;++i){
        prefix[i] = prefix[i-1]+(hours[i-1]<=8?-1:1);
        let pre = hash.get(prefix[i]-1);
        if (prefix[i] > 0) {
            ans = Math.max(ans, i);
        }else if(typeof pre!=="undefined"){
            console.log(pre,i)
            ans = Math.max(ans,i - pre);
        }
        if(typeof hash.get(prefix[i])==="undefined") hash.set(prefix[i],i);
    }
    console.log(prefix);
    return ans;
}
console.log(longestWPI([9,9,9]));
//console.log(longestWPI([9,9,6,0,6,6,9]));//3
// console.log(longestWPI([6,6,9]));//1
// console.log(longestWPI([6,9,9]));//3