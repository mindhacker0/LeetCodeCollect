// 逆序数对
// 数组中任意数对的大小关系和前后位置不同，则称为逆序数对
// 逆序数为偶数的排列为偶排列，逆序数为奇数的排列为奇排列。
// 排列中任意两数对换，排列改变奇偶性
function reversePairs(arr){//求数组中的逆序数对(普通求法)
    let pairs = 0;
    for(let i=0;i<arr.length;++i){
        for(let j=i;j<arr.length;++j){
            if(arr[j]<arr[i]) ++pairs;
        }
    }
    return pairs;
}
function reversePairs(arr){//求数组中的逆序数对(归并排序求法)
    let paris = 0;
    function merge(arr1,arr2){
        let index1 = 0,index2 = 0,ans = [];
        let len1 = arr1.length,len2 = arr2.length;
        while(index1<len1||index2<len2){
            if((index1<len1 && arr1[index1]<=arr2[index2])||index2>=len2){
                ans.push(arr1[index1]);
                ++index1;
            }else{
                ans.push(arr2[index2]);
                paris+=len1 - index1;
                ++index2;
            }
        }
        return ans;
    }
    function mergeSort(arr){
        let mid = arr.length>>1;
        return arr.length === 1?arr:merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid)));
    }
    mergeSort(arr);
    return paris;
}
class Bit{
    constructor(arr){
        this.source = arr;
        this.c = new Array(arr.length+1).fill(0);
    }
    change(x,delta){
        for(;x<this.source.length;x+=(x&-x)) this.c[x]+=delta;
    }
    query(x){
        let ans = 0;
        for(;x>0;x-=(x&-x)) ans += this.c[x];
        return ans;
    }
}
function reversePairs(arr){//求数组中的逆序数对(树状数组求法)
    let indexedArr = arr.map((val,index)=>({val,index})).sort((a,b)=>a.val-b.val);
    let indexMap = new Map,bit = new Bit(arr),pairs = 0;
    for(let i=0;i<indexedArr.length;++i){
        indexMap.set(indexedArr[i].val,i+1);
    }
    for(let i=arr.length-1;i>=0;--i){
        pairs+=bit.query(indexMap.get(arr[i])-1);
        bit.change(indexMap.get(arr[i]),1);
    }
    return pairs;
}
console.log(reversePairs([7,5,6,4]));//5
console.log(reversePairs([4,2,3,5,1]));//6
//n阶行列式
function SumDeterminate(nums){//行列式求值(定义法)
    let rank = nums.length;
    let ans = 0;
    //n阶全排列
    function seq(arr,cahche){
        if(arr.length === rank){
            let syb = reversePairs(arr),muti = 1;//奇排列符号为负
            for(let i=0;i<rank;++i){
                muti*=nums[i][arr[i]]
            }
            ans += (syb%2?-1:1)*muti;
            return;
        }
        for(let i=0;i<rank;++i){
            if(cahche.has(i)) continue;
            arr.push(i);
            cahche.add(i);
            seq(arr,cahche);
            cahche.delete(i);
            arr.pop();
        }
    }
    seq([],new Set);
    return ans;
}
console.log(SumDeterminate([
    [8,4],
    [5,7]
]));//36
console.log(SumDeterminate([
    [-4,3,1,-5],
    [2,-1,1,3],
    [-1,1,0,2],
    [-3,3,-5,1]
]));//-40
//下三角行列式:主对角线以上的元素全为0
//下三角行列式的值为主对角线的元素之积
console.log(SumDeterminate([[-4,3],[2,-1]])*SumDeterminate([[0,2],[-5,1]])-SumDeterminate([[1,-5],[1,3]])*SumDeterminate([[-1,1],[-3,3]]));
//行列式的性质：
//1.行列式的值和它的转置行列式的值相等。
console.log(SumDeterminate([
    [-4,2,-1,-3],
    [3,-1,1,3],
    [1,1,0,-5],
    [-5,3,2,1]
]));//-40
//2. 互换行列式的两行(列),行列式的值反号[和数对交换改变奇偶有关]
console.log(SumDeterminate([
    [2,-1,1,3],
    [-4,3,1,-5],
    [-1,1,0,2],
    [-3,3,-5,1]
]));//40
//推论：若行列式有两行（列）元素对应相等，则行列式的值为0
//3.行列式的某一行(列)中所有的元素都乘以同一个数k,等于用k乘以此行列式
console.log(SumDeterminate([
    [-8,6,2,-10],
    [2,-1,1,3],
    [-1,1,0,2],
    [-3,3,-5,1]
]));//-80
//4.行列式中若有两行(列)元素对应成比例，则此行列式的值为0
console.log(SumDeterminate([
    [8,4],
    [6,3]
]));//0
//5.行列式的某一行(列)的元素都是两数之和，则可写为两个行列式之和
console.log(SumDeterminate([
    [3,1],
    [5,7]
]));//16
console.log(SumDeterminate([
    [5,3],
    [5,7]
]));//20
//6.把行列式某一行（列）的元素乘以k，加到另一行（列）对应的元素上去，行列式的值不变
console.log(SumDeterminate([
    [8,4],
    [13,11]
]));//36
//行列式求解一般通过变换转为三角行列式或者右上角子行列式为0的形式。
//余子式
//在行列式D(n*n)中划去元素a[i][j]所在的第i行和第j列，剩下的元素组成D((n-1)*(n-1))称为元素a[i][j]的余子式M(i*j)。
//代数余子式A(i*j) = (-1)**(i+j)*M(i*j);
//引理：在n阶行列式D中，如果第i行元素除a[i][j]外全部为0，那么该行列式等于a[i][j]和它的代数余子式之积。

//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 