//1652. 拆炸弹
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
*/
var decrypt = function(code, k) {//61.73%模拟
    let len = code.length;
    let ans = [];
    for(let i=0;i<len;i++){
        let num = 0;
        if(k===0) num = 0;
        else{
            if(k>0){
                for(let j=1;j<=k;j++){
                    num+=code[(i+j)%len];
                }
            }else{
                for(let j=k;j<0;j++){
                    num+=code[(i+j+len)%len];
                }
            }
        }
        ans[i] = num;
    }
    return ans;
};
var decrypt = function(code, k) {//82.00%双指针
    if(k===0) return code.map(()=>0);
    let len = code.length;
    let l,r,sum=0,ans = [];
    if(k>0){l=1,r=k;}
    if(k<0){l=(k+len),r=(-1+len);}
    for(let i=l;i<=r;i++) sum+=code[i];
    ans[0] = sum;
    //console.log(l,r)
    for(let i=1;i<len;i++){
        sum-=code[l];
        sum+=code[(r+1)%len];
        l=(l+1)%len;
        r=(r+1)%len;
        ans[i] = sum;
    }
    return ans;
}
var decrypt = function(code, k) {//前缀和(37.98%)
    if(k===0) return code.map(()=>0);
    let len = code.length;
    let prefix = [];
    prefix[0] = 0;
    for(let i=1;i<=2*len;i++) prefix[i] = prefix[i-1]+code[(i-1)%len];
    let ans = [];
    for(let i=0;i<len;i++){
        if(k<0) ans[i] = prefix[(i+len)] - prefix[(i+k+len)];
        else ans[i] = prefix[k+i+1] - prefix[i+1];
    }
    return ans;
}
console.log(decrypt([2,4,9,3],-2));
console.log(decrypt([5,7,1,4],3))