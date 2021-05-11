/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    function makeList(col,row){
        if(col === 0 || col === row) return [1];
        return makeList(index).concat(makeList(index));
    }
    return makeList(numRows.length,numRows.length);
};
console.log(generate(5));
