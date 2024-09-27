//**Curried Add**
//Write a function called ***curriedAdd***. If you give this function a number, 
// it returns a new function to you.If you give this function no arguments, 
//it returns the total of all the numbers you’ve passed to it so far.

function curriedAdd(total) {
    if (total === undefined) return 0;

    return function addTotal(num) {
        if (typeof num === 'number') {
            total += num;
            return addTotal;
        } else {
            return total;
        }
    }
}
let firstAdder = curriedAdd();
let secondAdder = curriedAdd();
let thirdAdder = curriedAdd();

firstAdder();
secondAdder(1)(2)();
thirdAdder(2)(8)(5)(1)();

module.exports = { curriedAdd };


