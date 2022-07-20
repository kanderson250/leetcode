/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    return validParens(n, n);
};


/*
Given a passed in number of opening and closing parens left to use, 
returns an array of all possible parentheses strings. 
*/
function validParens(opening, closing) {
    if (opening === 0 && closing === 0) {
        return [""];
    }
    //if closing === opening, then only an opening parens may be added.
    if (opening === closing) {
        return validParens(opening - 1, closing).map(s => "(" + s);
    }
    let useOpening = []; 
    let useClosing = []; 
    if (opening > 0) {
        useOpening = validParens(opening - 1, closing).map(s => '(' + s);
    }
    if (closing > 0) {
        useClosing = validParens(opening, closing - 1).map(s => ')' + s); 
    }
    return [...useOpening, ...useClosing];
}