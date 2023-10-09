//286. 墙与门
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {//回溯
    const m = rooms.length,n = rooms[0].length;
    const dir = [[0,1],[1,0],[0,-1],[-1,0]];
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(rooms[i][j]!==0&&rooms[i][j]!==-1){
                rooms[i][j] = traceBack([i,j],new Set([i*n+j]));
            }
        }
    }
    function traceBack(pos,visit){
        const [x,y] = pos;
        if(rooms[x][y] === 0){
            return visit.size-1;
        }
        let dis = 2147483647;
        for(let i=0;i<dir.length;++i){
            let dx = x+dir[i][0],dy = y+dir[i][1];
            if(dx<0||dx>=m||dy<0||dy>=n||rooms[dx][dy] === -1||visit.has(dx*n+dy)) continue;
            visit.add(dx*n+dy);
            dis = Math.min(dis,traceBack([dx,dy],visit));
            visit.delete(dx*n+dy);
        }
        return dis;
    }
};
var wallsAndGates = function(rooms) {//bfs
    const m = rooms.length,n = rooms[0].length;
    const dir = [[0,1],[1,0],[0,-1],[-1,0]];
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(rooms[i][j]!==0&&rooms[i][j]!==-1){
                rooms[i][j] = bfs([i,j],new Set([i*n+j]));
            }
        }
    }
    function bfs(pos,visit){
        let queue = [[pos,visit]];
        while(queue.length){
            const [[x,y],arr] = queue.shift();
            for(let i=0;i<dir.length;++i){
                let dx = x+dir[i][0],dy = y+dir[i][1];
                if(dx<0||dx>=m||dy<0||dy>=n||rooms[dx][dy] === -1||arr.has(dx*n+dy)) continue;
                if(rooms[dx][dy] === 0){
                   return arr.size;
                }
                queue.push([[dx,dy],new Set([...arr,dx*n+dy])]);
            }
        }
        return 2147483647;
    }
}
var wallsAndGates = function(rooms) {//从门出发的bfs
    const m = rooms.length,n = rooms[0].length;
    const dir = [[0,1],[1,0],[0,-1],[-1,0]];
    const queue = [];
    for(let i=0;i<m;++i){
        for(let j=0;j<n;++j){
            if(rooms[i][j]===0) queue.push([i,j,0]);
        }
    }
    while(queue.length){
        const [x,y,dis] = queue.shift();
        for(let i=0;i<dir.length;++i){
            let dx = x+dir[i][0],dy = y+dir[i][1];
            if(dx<0||dx>=m||dy<0||dy>=n||rooms[dx][dy] !== 2147483647) continue;
            rooms[dx][dy] = dis+1;
            queue.push([dx,dy,dis+1]);
        }
    }
}
console.log(wallsAndGates([
    [2147483647,-1,0,2147483647],
    [2147483647,2147483647,2147483647,-1],
    [2147483647,-1,2147483647,-1],
    [0,-1,2147483647,2147483647]
]))