# MongoDB $inc operator error
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numerical field by a specified value. However, if a string value is provided instead of a number, the operation will fail silently or result in unexpected behavior. 

The `bug.js` file shows the erroneous code, while `bugSolution.js` provides a corrected version.

## How to reproduce the bug
1. Clone this repository.
2. Run the `bug.js` script.  Observe the error or unexpected result. 
3. Run the `bugSolution.js` script. Observe the successful increment.

## Solution
The solution is to ensure that the value provided to the `$inc` operator is always a number.