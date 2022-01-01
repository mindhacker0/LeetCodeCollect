function fill(vector,len,left = true){//用0填充位,left为true左填充，其它的右填充
    if(len<vector.length) return left?vector.slice(-len):vector.slice(0,len);
    while(vector.length<len){
        left?vector.unshift(false):vector.push(false);
    }
    return vector;
}
function xor(v,r){
    return Boolean(v^r);
}
function and(v,r){
    return Boolean(v&r);
}
function or(v,r){
    return Boolean(v|r);
}
function unsignedIntToVector(num,bitLen = 16){//正整数转二进制向量
    let arr = [];
    while(num!==0){
        arr.unshift(num%2);
        num = ~~(num/2);
    };
    while(arr.length<bitLen){arr.unshift(0);}
    return arr.join("");
}
function intToVector(num,bitLen = 16){//带符号整数转二进制向量
    let sign = num>0?0:1;
    let arr = [];
    if(num<0){
        num = -num-1;
    }
    while(num!==0){
        sign?arr.unshift((num&1)^1):arr.unshift(num&1);
        num=~~(num/2);
    }
    while(arr.length<bitLen-1){arr.unshift(0^sign);}
    arr.unshift(sign);
    return arr.join("");
}
function floatToVector(float,bitLen = 32){//浮点类型转为二进制,double一般是32位的
    let sign = float>0?0:1;
    let arr = [];
    let integer = ~~ float;//整数部分
    let decimal = float - integer;//小数部分

    while(arr.length<bitLen-1){arr.unshift(0^sign);}
    arr.unshift(sign);
    return arr.join("");
}
function vectorToUnsignedInt(arr){//内存表示无符号整数
    let sum = 0;
    let exp = 0;
    let len = arr.length;
    for(let i=len-1;i>=0;i--){
        sum+=arr[i]*2**exp;
        exp++;
    }
    return sum;
}
class Vector extends Array{
    constructor(len){
        super(len);
        this.fill(false);
    }
    setMemory(str){
        let arr = str.split("");
        let len = this.length;
        for(let i=len-1;i>=0;i--){
            if(arr.pop() === "1"){
                this[i] = true;
            }else{
                this[i] = false;
            }
        }
    }
    [Symbol.toString](){
        return "Vector";
    }
    getMemory(){//获取当前内存
        return this.map(val=>val?1:0).join("");
    }
    static adder(vector,addvector){//加法器模拟,向量相加
        let sign = false;
        let len = Math.max(vector.length,addvector.length);
        let result = new Vector(0);
        fill(vector,len);
        fill(addvector,len);
        for(let i=len-1;i>=0;i--){
            let sum = xor(xor(vector[i],addvector[i]),sign);//位相加值
            sign = or(and(vector[i],addvector[i]),and(xor(vector[i],addvector[i]),sign));//相加进位
            result.unshift(sum);
        }
        if(sign === true){console.error("number overflow！")}//最后还有进位，数值溢出
        return result;
    }
    toUnsignInt(){//内存表示无符号整数
        let sum = 0;
        let exp = 0;
        let len = this.length;
        for(let i=len-1;i>=0;i--){
            sum+=this[i]*2**exp;
            exp++;
        }
        return sum;
    }
    toSingedInt(){//内存表示带符号的整数
        let sign = this[0];//最高位符号位1表示负数0表示正数
        let exp = 0;
        let sum = 0;
        let len = this.length;
        for(let i=len-1;i>0;i--){
            sum+=(sign?!this[i]:this[i])*2**exp;//正数补码不变,负数取反
            exp++;
        }
        if(this[0]) sum+=1;//负数补码取反加一
        return (sign?-1:1)*sum;
    }
    toFloat(){//内存表示32位浮点数
        if(this.length!==32){console.error("bit length must be 32!");return;}
        let sign = this[0];//第一位是符号位
        let sum = 0;
        let exp = 0;
        for(let i=8;i>0;i--){//8位指数位(-127 ~ 128)
            sum+=this[i]*2**exp;
            exp++;
        }
        sum-=127;//指数偏移
        let fraction = [true];
        for(let i=9;i<32;i++){
           fraction.push(this[i]);
        }
        if(sum>=0){
            fill(fraction,sum+1,false)
            vectorToUnsignedInt(fraction)
        }
    }
}
let vector1 = new Vector(16);
vector1.setMemory(intToVector(13));
let vector2 = new Vector(16);
vector2.setMemory(intToVector(-73));
let sumVector = Vector.adder(vector1,vector2);
console.log(`${vector1.getMemory()}(${vector1.toSingedInt()}) + ${vector2.getMemory()}(${vector2.toSingedInt()}) = ${sumVector.getMemory()}(${sumVector.toSingedInt()})`);
