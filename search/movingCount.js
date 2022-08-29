//面试题13. 机器人的运动范围
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let width = m,height = n;
    let dx = [-1,0,0,1];
    let dy = [0,-1,1,0];
    let visit = new Array(m*n).fill(0);
    count = 0;
    function sumnum(x,y){
      let sum = 0;
      while(x){sum+=x%10;x=~~(x/10);}
      while(y){sum+=y%10;y=~~(y/10);}
      return sum;
    }
    function tranverse(x,y){
        if(x<0||x>=height||y<0||y>=width||visit[x*m+y]===1||sumnum(x,y)>k) return;
        visit[x*m+y]=1;
        console.log(visit);
        count++;
        for(let i=0;i<4;i++){
            let nx = x+dx[i],ny = y+dy[i];
            tranverse(nx,ny);
        }
        //visit[x*m+y]=0;
    }
    tranverse(0,0);
    return count;
};
console.log(movingCount(4,4,2));