function robber(nums, index){
    if(index >= nums.length) {
        return 0;
    }

    //include
    let includAns = nums[index] + robber(nums, index+2)

    //exclude
    let excludeAns = 0 + robber(nums, index+1);
    
    let finalAns = Math.max(includAns, excludeAns);
    return finalAns;
}

let nums = [2,4,1,6,9,3,1]
let index = 0;
let ans=robber(nums, index);
console.log("Max amount is:", ans);
