function average(...nums) {
    if (nums.length === 0) return 0;

    let sum = 0;
    for (let num of nums) {
        sum += num;
    }

    // return Math.trunc(sum / nums.length);
    return (sum / nums.length);
}

let result = average(20,12,19,11)
console.log("Result:", result);


//sort code:
function average1(...nums) {
    return nums.length === 0
        ? 0
        : Math.trunc(nums.reduce((a, b) => a + b, 0) / nums.length);
}
let result1 = average1(20,12,19,11)
console.log("Result1:", result1);
