//749. 隔离病毒
/**
 * @param {number[][]} isInfected
 * @return {number}
*/
// 拓展方向上下左右，四个
var containVirus = function(isInfected) {
    let width = isInfected[0].length,height = isInfected.length;
    let dx = [-1,0,0,1];
    let dy = [0,-1,1,0];
    let protectMap = new Array(width*height).fill(0);
    function getVirusMap(){//初始化获取当前的病毒区域
        let infectMap = new Array(width*height).fill(0);//保存全图的病毒集合
        let area = [];//保存每个病毒区域的集合
        for(let i=0;i<height;i++){
            for(let j=0;j<width;j++){
                if(isInfected[i][j]===1 && infectMap[width*i+j]===0 && protectMap[width*i+j]===0){//病毒没有加入集合,也不在保护区，需要遍历加入
                    let areaSet = new Set;
                    areaSet.add(width*i+j);
                    infectMap[width*i+j] = 1;
                    expandArea([i,j],areaSet);
                    area.push(areaSet);
                }
            }
        }
        function expandArea([x,y],set){
            for(let i=0;i<4;i++){
                let nextX = x+dx[i];
                let nextY = y+dy[i];
                if(nextX<0||nextX>=height||nextY<0||nextY>=width||isInfected[nextX][nextY]===0||protectMap[width*nextX+nextY]===1) continue;//超出界限或是没有感染
                if(set.has(width*nextX+nextY)) continue;//新点已经加入集合
                set.add(width*nextX+nextY);
                infectMap[width*nextX+nextY] = 1;
                expandArea([nextX,nextY],set);//继续扩展
            }
        }
        return area;
    }
    //拓展每个区域，找到拓展后占领表格最多的
    function expandVirus(wall){
        let nextInfect = new Map(),max,maxIndex;
        let area = getVirusMap();
        console.log(area);
        for(let i=0;i<area.length;i++){//每个区域扩散
            let expandSet = area[i];
            let nextMap = new Map;//这个区域扩散的地区
            expandSet.forEach((val)=>{
                let x = ~~(val/width),y = val%width;
                for(let i=0;i<4;i++){
                    let nextX = x+dx[i];
                    let nextY = y+dy[i];
                    if(nextX<0||nextX>=height||nextY<0||nextY>=width) continue;//超出界限
                    if(isInfected[nextX][nextY] === 0){//统计下一步可以扩散的格子
                        if(typeof nextMap.get(width*nextX+nextY) === "undefined") nextMap.set(width*nextX+nextY,0);
                        let num = nextMap.get(width*nextX+nextY);
                        num++;
                        nextMap.set(width*nextX+nextY,num);
                    }
                }
            });
            if(typeof max === "undefined" || nextMap.size>max){//扩散格子最多的区域
                max = nextMap.size;
                maxIndex = i;
            }
            nextInfect.set(i,nextMap);
        }
        if(max>0){
            {//计算控制所需墙的数量
                let protect = nextInfect.get(maxIndex);
                let protectBlock = area[maxIndex];
                let nextWall = 0;
                protect.forEach((val,key)=>{
                    nextWall+=val;
                });
                protectBlock.forEach((val)=>{
                    protectMap[val] = 1;
                })
                wall+=nextWall;
                //console.log("next",nextWall,protectBlock);
            }
            for(let i=0;i<area.length;i++){
                if(maxIndex===i) continue;//已经控制了传播
                //其他地区病毒扩散
                let infect = nextInfect.get(i);
                infect.forEach((val,key)=>{
                    let x = ~~(key/width),y = key%width;
                    area[i].add(width*x+y);
                    isInfected[x][y] = 1;
                });
            }
            console.log(JSON.parse(JSON.stringify(isInfected)));
            return expandVirus(wall);
        }
        return wall;
    }
    return expandVirus(0);
};
//console.log(containVirus([[0,1,0,0,0,0,0,1],[0,1,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0]]));//10
console.log(containVirus([[0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,1,0,0],
                          [1,0,0,0,0,0,0,0,0,0],
                          [0,0,1,0,0,0,1,0,0,0],
                          [0,0,0,0,0,0,1,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,1,0],
                          [0,0,0,0,1,0,1,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0]
                        ]));//56