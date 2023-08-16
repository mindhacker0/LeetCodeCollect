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
// 逆矩阵是矩阵的转置，则这个矩阵是正交矩阵
// 可逆矩阵一定是满秩矩阵
// 伴随矩阵
// 方阵A的行列式|A|中，每个元素的代数余子式的值组成的方阵，称为A的伴随矩阵
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
        for(let i=0;i<cmtx.w;++i){
            result[i] = [];
            for(let j=0;j<this.h;++j){
                let sum = 0;
                for(let k=0;k<this.w;++k){
                    sum+=this.mtx[j][k]*cmtx.mtx[k][i];
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


