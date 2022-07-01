/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //write an anagram tester function
    //create a dictionary of keys representing one anagram 
    //from each group. The keys point to arrays of anagrams. 
      //eg: 
      //dict = {
            //'abc' : ['abc', 'bca'],
            //'aefg': ['aefg', 'feag']    
      //}
    //iterate over strs. 
        //iterate over keys in dict
        //check if key's sorted value is in dict
          //if passes, add to anagram array and break
        //if no matches found, add sorted str as key and make an array as value. 
    //return concatenation of arrays in dict. 
    
    const dict = {}; 
    
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (sortedStr in dict) {
            dict[sortedStr].push(str);
        }
        else {
            dict[sortedStr] = [str];
        }
    }
    
    return Object.values(dict); 
};
