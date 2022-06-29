/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    //O(n^2) time: run a nested for loop. 
    //O(n) time: use a stack to 'collapse' the array. 
    
    //pointer running over the original array
    
    //creating and mutating a tempStack which records the 
    //indices seen, but not yet found higher temp
    
    //when index references are popped from tempStack, record the differences between the current index and the popped index in a result array. 
    
    const res = Array(temperatures.length).fill(0);
    const tempStack = [0]; 
    for (let j = 1; j < temperatures.length; j++) {
        let currentTemp = temperatures[j];
        let i = tempStack.length - 1; 
        while (temperatures[tempStack[i]] < currentTemp) {
            let index = tempStack.pop(); 
            res[index] = j - index; 
            i--; 
        }
        tempStack.push(j);
    }
    return res;      
};