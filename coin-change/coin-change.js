/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //This is the normal coinsums problem, but instead of tracking all possible
    //sums, we only track the # of coins used in the minimum. 
    //The approach is DP.
    const m = Array(coins.length+1).fill().map(i => []);
    for (let i = 0; i <= coins.length; i++) {
        let c = coins[i - 1];
        for (let j = 0; j <= amount; j++) {
            if (j === 0) {
                m[i][j] = 0; 
            } else if (i === 0) {
                m[i][j] = Infinity; 
            } else {
                let yesC = j - c >= 0 ? m[i][j - c] + 1 : Infinity; 
                let noC = m[i-1][j];
                m[i][j] = Math.min(yesC, noC);
            }
        }
    }
    return m[coins.length][amount] === Infinity ? -1 : m[coins.length][amount];
};