/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
*/
var distanceBetweenBusStops = function(distance, start, destination) {//bellman(5.13%)
    let len = distance.length;
    let dis = new Array(len).fill(10e4),flag = true;
    let edge = [];
    for(let i=0;i<len;i++){
        edge.push([i,(i+1)%len,distance[i]]);
        edge.push([(i+1)%len,i,distance[i]]);
    }
    dis[start] = 0;
    while(flag){
        flag = false;
        for(let i=0;i<edge.length;i++){
            const [x,y,val] = edge[i];
            if(dis[x]+val<dis[y]){
                dis[y] = dis[x]+val;
                flag = true;
            }
        }
    }
    //console.log(dis);
    return dis[destination] - dis[start];
};
var distanceBetweenBusStops = function(distance, start, destination) {//99%
    //因为路径是单一的环形，计算start和destination分割出的两个弧度哪半小
    let total = 0,path =0;
    let len = distance.length;
    if(start>destination){//保证start<destination
        let temp = start;
        start = destination;
        destination = temp;
    }
    for(let i=0;i<len;i++){
        total+=distance[i];
        if(i>=start && i<destination){
            path+=distance[i];
        }
    }
    return total-path<path?total-path:path;
}
// console.log(distanceBetweenBusStops([1,2,3,4],0,3));
console.log(distanceBetweenBusStops([7,10,1,12,11,14,5,0],7,2));