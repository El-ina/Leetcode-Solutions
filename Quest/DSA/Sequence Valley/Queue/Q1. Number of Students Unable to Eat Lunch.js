/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {

    let wantZero = students.filter(x => x === 0).length;
    let wantOne = students.filter(x => x === 1).length;


    for(let i = 0; i < sandwiches.length; i++){
        if(sandwiches[i] === 0 && wantZero > 0) wantZero--;
        else if(sandwiches[i] === 1 && wantOne > 0) wantOne--;
        else break;
    }
    

    return wantZero + wantOne;
};