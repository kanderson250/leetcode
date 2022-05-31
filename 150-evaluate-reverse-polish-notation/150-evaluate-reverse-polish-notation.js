/**
 * @param {string[]} tokens
 * @return {number}
 */
//global variable storing the operation symbols and what they do
const operations = {
    '+': (a, b) => a + b, 
    '-': (a, b) => a - b,
    '*': (a, b) => a*b,
    '/': (a, b) => Math.trunc(a/b)
}; 
//Strategy: mutate the tokens array constantly by deleting values R --> L. 
//This is a bit risky but it is convenient. 
var evalRPN = function(tokens) {
    let last = tokens.pop(); 
    if (!operations[last]) {
        return +last; 
    }
    let right = evalRPN(tokens);
    let left = evalRPN(tokens);
    return operations[last](left, right);
};