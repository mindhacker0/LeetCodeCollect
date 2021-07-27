/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
   var width=grid[0].length,height=grid.length;
   var shift = k%(width*height),result=[],temp=[];
   for(let i=0;i<width;i++){
        for(let j=0;j<height;j++){
            console.log(i,j,grid[j][i])
            temp.push(grid[j][i]);
        }
   }
   console.log(temp)
   let subarr=[];
   for(let i=0;i<temp.length;i++){
       subarr.push(temp[(i-shift+width*height)%(width*height)]);
       console.log(subarr);
       if(subarr.length === width){
           result.push(subarr);
           subarr=[];
       }
   }
   return result;
};
console.log(shiftGrid([[1],[2],[3],[4],[7],[6],[5]],23))