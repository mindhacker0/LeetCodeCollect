//
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
 var countStudents = function(students, sandwiches) {
    while(students.length){
        let count = 0;
        while(students[0]!==sandwiches[0]&&count<students.length){
            students.push(students.shift());
            count++;
        }
        if(count===students.length) return count;
        students.shift();
        sandwiches.shift();
    }
    return 0;
};
console.log([1,1,1,0,0,1],[1,0,0,0,1,1]);