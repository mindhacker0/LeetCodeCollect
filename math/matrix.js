// 矩阵的初等变换
// 初等变换包括行（列）交换，行（列）乘以一个非0数，把矩阵的某一行所有元素乘以一个数k后加到另一行对应的元素;
// 若矩阵A经过有限次的初等变换变为矩阵B，则矩阵A与矩阵B等价。
// 初等变换不改变矩阵的秩。
// 初等变换具有反身，对称，传递性质
// 初等矩阵性质
// 1.设A是一个m×n矩阵，对A施行一次初等行变换，其结果等价于在A的左边乘以相应的m阶初等矩阵；对A施行一次初等列变换，其结果等价于在A的右边乘以相应的n阶初等矩阵；
// 2.方阵A可逆的充分必要条件是存在有限个初等矩阵P1，P2，......Pn，使得A=P1P2...Pn
// 3.m×n矩阵A与B等价当且仅当存在m阶可逆矩阵P与n阶可逆矩阵Q使得B=PAQ
// 矩阵的秩
// 方阵(行数、列数相等的矩阵)的列秩和行秩总是相等的，因此它们可以简单地称作矩阵A的秩。通常表示为r(A)，rk(A)或rank(A)
// m × n矩阵的秩最大为m和n中的较小者，表示为 min(m,n)。有尽可能大的秩的矩阵被称为有满秩；类似的，否则矩阵是秩不足（或称为“欠秩”）的。
// 在m*n矩阵A中，任意决定α行和β列交叉点上的元素构成A的一个k阶子矩阵，此子矩阵的行列式，称为A的一个k阶子式。
// A=(aij)m×n的不为零的子式的最大阶数称为矩阵A的秩，记作rA，或rankA或R(A)。
// 零矩阵的秩为零。
// 矩阵的行秩，列秩，秩都相等。
// 满秩方阵可以通过一系列的初等变换化为单位矩阵，可以将满秩方阵逐步转化为上三角矩阵，并最终得到单位矩阵。这个过程叫做高斯消元法，也可以用来求解线性方程组
// 矩阵的秩求法：
// 1.寻找最大的不为0的n阶子式
// 2.化为阶梯状后不为0的行（列）数
// 3.方阵A的行列式的值不为0，则矩阵A为满秩矩阵
// 通过矩阵的行列式的值是否为0来判断矩阵是否满秩，行列式的概念仅仅适用于方阵
// 矩阵的逆求法(方阵有逆，不是方阵有伪逆)：
// 1.初等行变换法（高斯-约当法）：该方法通过初等行变换将原矩阵转化为单位矩阵，同时对单位矩阵进行相同的行变换，最终得到的矩阵即为原矩阵的逆矩阵。
// 这种方法适用于任意大小的矩阵，但对于较大的矩阵可能需要较多的计算量。
// 2.克拉默法则：对于一个 n x n 的矩阵 A，如果其行列式不为零，则可以使用克拉默法则计算其逆矩阵。克拉默法则利用了矩阵的行列式和伴随矩阵的关系，
// 通过求解一系列的代数方程组来得到逆矩阵。这种方法适用于较小的矩阵，但对于较大的矩阵可能需要较长的计算时间。
// 逆矩阵是矩阵的转置，则这个矩阵是正交矩阵
// 可逆矩阵一定是满秩矩阵
// 伴随矩阵
// 方阵A的行列式|A|中，每个元素的代数余子式的值组成的方阵，称为A的伴随矩阵
// 奇异值分解(SVD)步骤
// 假设我们有一个 m×n 的矩阵A，其中 m 表示行数，n 表示列数。
// 计算矩阵A的转置矩阵A^T。
// 计算矩阵A与其转置矩阵A^T的乘积AA^T，得到一个 m×m 的对称矩阵。
// 解决矩阵AA^T的特征值分解问题，求得其特征值和特征向量。
// 对特征值进行排序，通常按照降序排列。
// 根据特征值从大到小选取前r个特征值（r是一个小于等于m和n的正整数），对应的特征向量组成一个 m×r 的矩阵U。
// 计算矩阵A^T与其转置矩阵A的乘积A^TA，得到一个 n×n 的对称矩阵。
// 解决矩阵A^TA的特征值分解问题，求得其特征值和特征向量。
// 对特征值进行排序，通常按照降序排列。
// 根据特征值从大到小选取前r个特征值，对应的特征向量组成一个 n×r 的矩阵V。
// 计算矩阵A与矩阵U的乘积AU，得到一个 m×r 的矩阵。
// 计算矩阵AU与矩阵V的乘积(AU)V^T，得到一个 m×n 的矩阵B。
// 矩阵B即为原始矩阵A的奇异值分解结果。
// 满秩<=>可逆<=>行列式不为0
// 求矩阵逆的步骤可以使用初等行变换法，以下是具体的步骤：
// 将待求逆的矩阵 A 与单位矩阵 I 进行横向拼接，得到一个增广矩阵 [A | I]。
// 对增广矩阵进行初等行变换，将矩阵 A 变为单位矩阵，同时记录下相应的行变换。
// 若矩阵 A 无法通过初等行变换变为单位矩阵，则说明矩阵 A 不可逆。
// 若矩阵 A 可以通过初等行变换变为单位矩阵，此时增广矩阵的右半部分就是矩阵 A 的逆矩阵。
// 一个n阶方阵通常会有n个特征值。每个特征值对应着方阵的一个特征向量，它们在线性代数中具有重要的意义。
// 特征值和特征向量可以帮助我们理解方阵的性质和变换。但是也有一些特殊情况下，方阵可能会有重复的特征值，这时候对应的特征向量可能不唯一
// 矩阵的特征值是指满足方程 Av = λv 的非零向量 v，其中 A 是一个 n×n 矩阵，λ 是一个标量。计算矩阵的特征值可以使用以下方法：
// 特征值的定义方程是 Av = λv，其中 A 是矩阵，v 是特征向量，λ 是特征值。将这个方程转化为 (A - λI)v = 0，其中 I 是单位矩阵。这表示矩阵 A 减去 λ 倍的单位矩阵后，乘以向量 v 的结果为零向量。
// 将 (A - λI)v = 0 转化为行列式的形式，得到 |A - λI| = 0。这个行列式被称为特征方程。
// 解特征方程 |A - λI| = 0，求解出 λ 的值。这些 λ 的值就是矩阵的特征值。
// 对于每个特征值 λ，求解方程 (A - λI)v = 0，得到特征向量 v。特征向量是非零向量，可以通过高斯消元法或其他方法求解。
const fn = require('./determinmant');
function swapVar(x,y){
    let temp = x;
    x=y;
    y=temp;
}
function swapArr(arr,x,y){
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}
function gcd(a,b){//辗转相除法(欧几里得)
    if(b>a) return gcd(b,a);
    while(b!==0){
        let temp = a%b;
        a = b;
        b = temp;
    }
    return a;
}
function mutiLCM(arr){//多个数的最大公倍数
    let result = arr[0],muti = arr[0];
    for(let i =1;i<arr.length;++i){
       result = gcd(muti,arr[i]);
       muti=(muti*arr[i])/result;
    }
    return muti;
}
class Matrix{//矩阵
    constructor(h=0,w=0,init = true){
        this.mtx = [];
        this.h = h;
        this.w = w;
        if(init) this.init();
    }
    init(arr){//初始化 深拷贝
        let  isSynmmetry = true;//是否为对称矩阵
        for(let i=0;i<this.h;++i){
            this.mtx[i] = [];
            for(let j=0;j<this.w;++j){
                this.mtx[i][j] = arr[i][j];
                if(arr[j] && arr[i][j] !== arr[j][i]) isSynmmetry = false;
            }
        }
        return {isSynmmetry};
    }
    muti(cmtx){//矩阵乘法
        if(!cmtx instanceof Matrix||this.w!==cmtx.h) return null;
        let result = [];//结果必然是高this.h x 宽cmtx.w的矩阵
        for(let i=0;i<this.h;++i){
            result[i] = [];
            for(let j=0;j<cmtx.w;++j){
                let sum = 0;
                for(let k=0;k<this.w;++k){
                    sum+=this.mtx[i][k]*cmtx.mtx[k][j];
                }
                result[i][j] = sum; 
            }
        }
        return result;
    }
    reverse(){//矩阵转置
        let result = [];
        for(let i=0;i<this.h;++i){
            for(let j=0;j<this.w;++j){
                if(typeof result[j] === "undefined") result[j] = [];
                result[j][i] = this.mtx[i][j];
            }
        }
        let temp = this.h;
        this.h = this.w;
        this.w = temp;
        this.mtx = result;
        return this;
    }
    //初等变换
    swapRow(x,y){//交换行
        if(x>=this.h||y>=this.h) return null;
        let temp = this.mtx[x];
        this.mtx[x] = this.mtx[y];
        this.mtx[y] = temp;
        return this;
    }
    swapCol(x,y){//交换列
        if(x>=this.w||y>=this.w) return null;
        for(let i=0;i<this.h;++i){
            swapArr(this.mtx[i],x,y);
        }
        return this;
    }
    mutiRow(muti,...rows){//行倍增
        if(isNaN(muti)||muti===0) return null;
        for(let i=0;i<rows.length;++i){
            let row = this.mtx[rows[i]];
            for(let j=0;j<this.w;++j){
                row[j]*=muti;
            }
        }
        return this;
    }
    mutiCol(muti,...cols){//列倍增
        if(isNaN(muti)||muti===0) return null;
        for(let i=0;i<this.h;++i){
            for(let j=0;j<cols.length;++j){
                this.mtx[i][cols[j]]*=muti;
            }
        }
        return this;
    }
    addMutiRow(augend,addend,muti){// 行加倍数行
        if(isNaN(muti)||muti===0) return null;
        for(let j=0;j<this.w;++j){
            this.mtx[augend][j]+=this.mtx[addend][j]*muti;
        }
        return this;
    }
    addMutiCol(augend,addend,muti){// 行加倍数行
        if(isNaN(muti)||muti===0) return null;
        for(let j=0;j<this.h;++j){
            this.mtx[j][augend]+=this.mtx[j][addend]*muti;
        }
        return this;
    }
    rankA(){//高斯消元求秩 倒三角阶梯型
        let rank = 0,cyMtx =  new Matrix(this.h,this.w,false);
        cyMtx.init(this.mtx);
        let mtx = cyMtx.mtx,detValue = 1;
        for(let i=0;i<cyMtx.h;++i){
            if(i<cyMtx.h-1){
                let lcm = mutiLCM(mtx[i].slice(i));
                for(let j=cyMtx.w-1;j>i;--j){
                    cyMtx.mutiCol(lcm/mtx[i][j],j);
                    cyMtx.addMutiCol(j,i,-(lcm/mtx[i][i]));
                }
            }
            if(mtx[i][i]!==0) rank++;
            detValue*=mtx[i][i];
        }
        printMatrix(mtx);
        return {rank,detValue};
    }
    rankB(){//奇异值分解（SVD）
       
    }
    coperateMtx(calc=(val)=>val){//伴随矩阵
        let result = [];
        for(let i=0;i<this.h;++i){
            result[i] = []
            for(let j=0;j<this.w;++j){
                result[i][j] = calc(fn.cofactorArr(this.mtx,j,i).valueOf());
            }
        }
        let rt = new Matrix(this.h,this.w,false);
        rt.init(result);
        return rt;
    }
    inverse(){//矩阵的逆（克拉默法则）
        let detMtVal = fn.calcDeterminant(this.mtx);
        if(detMtVal === 0) return null;//行列式的值为零，矩阵不可逆
        let cpMtx = this.coperateMtx((x)=>x/detMtVal);
        return cpMtx;
    }
} 
function printMatrix(arr){
    for(let i=0;i<arr.length;i++){
        let str = "";
        for(let j=0;j<arr[i].length;j++){
           //if(path.includes(`${i},${j}`)) str+="\033[42;37m "+arr[i][j]+" \033[0m";
           str+="\033[47;30m "+arr[i][j]+" \033[0m";
        }
        console.log(str);
    }
    console.log("\r\n");
}
let m1 = new Matrix(3,3,false);
let m2 = new Matrix(2,1,false);
m1.init(
[
    [2,4,2],
    [4,3,1],
    [2,1,4],
]);
m2.init(
[
    [1],
    [2]
]);
console.log(m1.rankA())
// console.log(m1.reverse(),m1);
// console.log(m2.reverse(),m2);
// console.log(m2.muti(m1));
// console.log(m1.mutiCol(2,0,2).addMutiRow(0,1,1));
let a = new Matrix(2,2,false);
let ma = new Matrix(2,2,false);
a.init([
    [3,5],
    [9,1]
]);
ma.init([
    [-1/42,5/42],
    [9/42,-3/42]
]);
console.log(a.muti(a.inverse()));
// 3 5  x y     1 0   3x+5x1 = 1   3y+5y1 = 0
// 9 1  x1 y1   0 1   9x+1x1 = 0   9y+1y1 = 1

// 1  5  -42
// 9  3 
// 特征值
// 3 5  x    3x+5y = kx  (3-k)x+5y = 0
// 9 1  y    9x+1y = ky  9x+(1-k)y = 0

// 3-k 5  (3-k) - 5*(9-k) = 0
// 9 1-k
let anys = new Matrix(2,2,false),anys1 = new Matrix(3,3,false);
anys.init([
[7,3],
[5,2]
]);
anys1.init([
[4,2,3],
[1,1,0],
[-1,2,3]
])
console.log(anys.inverse())
//console.log(anys.muti(anys1));