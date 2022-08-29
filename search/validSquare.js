//593. 有效的正方形
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
*/
var validSquare = function(p1, p2, p3, p4) {
    let arr = [p1,p2,p3,p4];
    let edges = new Set;
    for(let i=0;i<4-1;i++){
        let [x,y] = arr[i];
        for(let j=i+1;j<4;j++){
            let [x1,y1] = arr[j];
            edges.add((x-x1)**2+(y-y1)**2);
            if(edges.size>2) return false;//边的可能性不超过两种对角边和正方形的边
        }
    }
    let min,max;
    edges.forEach((val)=>{
        if(typeof min === 'undefined'){
            min = val;
        }else{
            if(val<min){
               max = min;
               min = val;
            }else{
                max = val;
            }
        }
    });
    //console.log(min,max);
    return min*2===max;
};
console.log(validSquare([0,0],[1,1],[1,0],[0,1]));