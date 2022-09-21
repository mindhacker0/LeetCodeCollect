//850. 矩形面积 II
/**
 * @param {number[][]} rectangles
 * @return {number}
*/
var rectangleArea = function(rectangles) {//扫描线
    //数据范围比较大，首先需要离散化处理下标
    let xArr = [],yArr = [];
    rectangles.forEach(val=>{
        xArr.push(val[0]);
        yArr.push(val[1]);
        xArr.push(val[2]);
        yArr.push(val[3]);
    });
    xArr.sort((a,b)=>a-b);
    yArr.sort((a,b)=>a-b);
    let orderx = [],orderMapx = new Map;
    xArr.forEach((val)=>{
        if(typeof orderMapx.get(val)==="undefined"){
            orderx.push(val);
            orderMapx.set(val,orderx.length-1);
        }
    });
    let ordery = [],orderMapy = new Map;
    yArr.forEach((val)=>{
        if(typeof orderMapy.get(val)==="undefined"){
            ordery.push(val);
            orderMapy.set(val,ordery.length-1);
        }
    });
    //console.log(orderx,orderMapx,ordery,orderMapy);
    //归类统计每个区域的矩阵
    let h = new Array(orderx.length).fill(0).map(()=>[]);
    rectangles.forEach(val=>{
        let [x1,y1,x2,y2] = val;
        for(let i=orderMapx.get(x1)+1;i<=orderMapx.get(x2);i++){
            h[i].push([orderMapy.get(y1),orderMapy.get(y2)]);
        }
    });
    //console.log(h);
    //区域矩阵合并
    let ans = 0n;
    for(let i=1;i<h.length;i++){
        h[i].sort((a,b)=>a[0]===b[0]?a[1]-b[1]:a[0]-b[0]);
        let rang = 0n,start=0,end=0;
        for(let k=0;k<h[i].length;k++){
            if(k===0){ start = h[i][k][0];end = h[i][k][1];}
            else{
                if(end<h[i][k][0]){
                    rang+=BigInt(ordery[end]-ordery[start]);
                    start = h[i][k][0];end = h[i][k][1];
                }else{
                   end = Math.max(end,h[i][k][1]);
                }
            }
        }
        rang+=BigInt(ordery[end]-ordery[start]);
        ans=(ans+BigInt(orderx[i] - orderx[i-1])*rang)%BigInt(1000000007);
    }
    return Number(ans);
};
// console.log(rectangleArea([[0,0,2,2],[1,0,2,3],[1,0,3,1]]));
// console.log(rectangleArea([[0,0,1000000000,1000000000]]));
// console.log(rectangleArea([[22,24,67,34],[23,18,39,41],[10,63,80,98]]));
console.log(rectangleArea([[224386961,128668997,546647847,318900555],[852286866,238086790,992627088,949888275],[160239672,137108804,398130330,944807066],[431047948,462092719,870611028,856851714],[736895365,511285772,906155231,721626624],[289309389,607009433,558359552,883664714],[780746435,397872372,931219192,863727103],[573523994,124874359,889018012,471879750],[619886375,149607927,727026507,446976526],[51739879,716225241,115331335,785850603],[171077223,267051983,548436248,349498903],[314437215,169054168,950814572,481179241],[64126215,646689712,595562376,829164135],[926011655,481539702,982179297,832455610],[40370235,231510218,770233582,851797196],[292546319,45032676,413358795,783606009],[424366277,369838051,453541063,777456024],[211837048,142665527,217366958,952362711],[228416869,402115549,672143142,644930626],[755018294,194555696,846854520,939022548],[192890972,586071668,992336688,759060552],[127869582,392855032,338983665,954245205],[665603955,208757599,767586006,276627875],[260384651,10960359,736299693,761411808],[46440611,559601039,911666265,904518674],[54013763,90331595,332153447,106222561],[73093292,378586103,423488105,826750366],[327100855,516514806,676134763,653520887],[930781786,407609872,960671631,510621750],[35479655,449171431,931212840,617916927]]));