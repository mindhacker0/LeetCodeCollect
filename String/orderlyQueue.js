//899. 有序队列
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
*/
var orderlyQueue = function(s, k) {
    let preCache = new Array(26),maxIndex = -1;//保存前K个字符的统计,和他们中最大的值
    let len = s.length,strArr = s.split(""),minDic = s;
    if(len === k) return strArr.sort().join("");
    for(let i=0;i<k;i++){
        let code = s.charCodeAt(i)-97;
        if(typeof preCache[code] === "undefined") preCache[code] = [];
        preCache[code].push(i);
        maxIndex = Math.max(maxIndex,code);
    }
    // console.log(preCache,maxIndex);
    let cycle = 0,next = k;
    while(cycle<len - k){
        let select = preCache[maxIndex].shift();
        if(preCache[maxIndex].length === 0){//更新最大的字母
            while(maxIndex>0 && (typeof preCache[maxIndex-1] === "undefined" || preCache[maxIndex-1].length===0)) maxIndex--;
        }
        //取出后s后面的会补上
        let code = s.charCodeAt(next)-97;
        if(typeof preCache[code] === "undefined") preCache[code] = [];
        preCache[code].push(next);
        maxIndex = Math.max(maxIndex,code);
        next++;
        //追加后的字符串
        strArr[select] = "";
        strArr.push(s[select]);
        cycle++;
        //更新最小字典字符
        let i =0,j=0;
        while(i<strArr.length && j<minDic.length){
            while(strArr[i]==="") i++;
            if(strArr[i] < minDic[j]){//可以更新
                minDic = strArr.join("");
                break;
            }else if(strArr[i] > minDic[j]){
                break;
            }
            i++;j++;
        }
        console.log(strArr.join(""),minDic);
    }
    console.log(strArr);
    return minDic;
};
console.log(orderlyQueue("hmg",2))
// console.log(orderlyQueue("gxzv",4))
// console.log(orderlyQueue("nhzatq",1));
// console.log(orderlyQueue("cba",1));
// console.log(orderlyQueue("baaca",3));