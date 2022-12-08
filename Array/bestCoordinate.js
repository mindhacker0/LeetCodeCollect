//1620. 网络信号最好的坐标
/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
*/
var bestCoordinate = function(towers, radius) {
    let rect = [Infinity,Infinity,0,0];
    towers.forEach(([x,y,q])=>{//找出平面的界限
        rect[0] = Math.min(rect[0],x);
        rect[1] = Math.min(rect[1],y);
        rect[2] = Math.max(rect[2],x);
        rect[3] = Math.max(rect[3],y);
    });
    let ans = [];
    let maxSig = -1;
    for(let x=rect[0];x<=rect[2];x++){
        for(let y=rect[1];y<=rect[3];y++){
            let sum = 0;
            towers.forEach(([x1,y1,q])=>{
                let dist = Math.sqrt((x1-x)**2+(y1-y)**2);
                if(dist>radius) return;
                sum+=Math.floor(q/(1+dist));
            });
            if(sum>maxSig){
                ans = [x,y];
                maxSig = sum;
            }else if(sum===maxSig){
                if(ans[0]>x||(ans[0]===x&&ans[1]>y)) ans = [x,y];
            }
            console.log(x,y,sum);
        }
    }
    console.log(rect);
    return ans;
};
console.log(bestCoordinate([[1,2,5],[2,1,7],[3,1,9]],2));
console.log(bestCoordinate([[42,0,0]],7));