/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   //input: array of strings
    //output: string
    //constraints: none that seem relevant
    //edge cases: empty strings in array, no common prefix. 
    
    //idea: approach this as a reducer-style problem
    //strs = ["flower","flow","flight", "fauna"]
       //flower, flow --- 'fl'
       //fl, flight --- 'fl', 
       //fl, fauna --- 'f'. 
    
    return strs.reduce(commonPrefix);
};

const commonPrefix = (str1, str2) => {
    //iterate over both strings using the same index
    let i = 0; 
    const prefix = []; 
    while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
       prefix.push(str1[i]);
        i++; 
    }
    return prefix.join('');
}