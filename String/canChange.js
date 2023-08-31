//2337. 移动片段得到字符串
/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
   let idxL = [],idxR = [];
   for(let i=0;i<start.length;++i){
    if(start[i] === 'L') idxL.push(i);
    if(start[i] === 'R') idxR.push(i);
   }
   let prev = 0;
   for(let i=0;i<target.length;++i){
        let now;
        if(target[i] === 'L'){
            if(idxL.length ===0 || i>idxL[0]) return false;
            now = idxL.shift();
        }
        if(target[i] === 'R'){
            if(idxR.length===0 || i<idxR[0]) return false;
            now = idxR.shift();
        }
        if(typeof now!== "undefined"){
            if(now<prev) return false;
            prev = now;
        }
   }
   if(idxL.length||idxR.length) return false;
   return true;
};
var canChange = function(start, target) {
    let left = 0,right = start.length-1;
    let l = 0,r = target.length -1;
    while(left<=right&&l<=r){
        while(left<right && start[left] === '_') left++;
        while(l<r && target[l] === '_') l++;
        //console.log(start[left],left,l);
        if(start[left]!==target[l]) return false;
        if(start[left]==="L"&&l>left) return false;
        if(start[left]==="R"&&l<left) return false;
        left++;l++;
    }
    //console.log(left,right)
    for(let i=left;i<=right;++i) if(start[i]!=='_') return false;
    for(let i=l;i<=r;++i) if(target[i]!=='_') return false;
    return true;
}
console.log(canChange("_L__R__RR","L______RR"));//false
// console.log(canChange("_","L"));//false
// console.log(canChange("__LL","LL__"));//true
// console.log(canChange("_L","LL"));//false
// console.log(canChange("_L__R__R_","L______RR"));//true
// console.log(canChange("____","R_L_"));//false
// console.log(canChange("R_L_","__LR"));//false
// console.log(canChange("R_L__R__R_","_L______RR"));//false
// console.log(canChange("RRLLRLLRL","RRLLRLLRL"));//true
// console.log(canChange("_RL_","L__R"));//false