//1460. 通过翻转子数组使两个数组相等
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
*/
var canBeEqual = function(target, arr) {//哈希(94.38%)
    let cache = new Map;
    for(let i=0;i<target.length;i++){
        let count = cache.get(target[i]);
        if(typeof count === "undefined") count = 0;
        count++;
        cache.set(target[i],count);
    }
    for(let i=0;i<arr.length;i++){
       let count = cache.get(arr[i]);
       if(typeof count === "undefined") return false;
       count--;
       if(count<0) return false;
       cache.set(arr[i],count);
    }
    return true;
};
var canBeEqual = function(target, arr) {//排序(94.38%)
    return target.sort().join("") === arr.sort().join("")
}