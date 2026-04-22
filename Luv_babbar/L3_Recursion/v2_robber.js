// function robber(nums, index){
//     if(index >= nums.length) {
//         return 0;
//     }

//     //include
//     let includAns = nums[index] + robber(nums, index+2)

//     //exclude
//     let excludeAns = 0 + robber(nums, index+1);
    
//     let finalAns = Math.max(includAns, excludeAns);
//     return finalAns;
// }

// let nums = [2,4,1,6,9,3,1]
// let index = 0;
// let ans=robber(nums, index);
// console.log("Max amount is:", ans);


//=============OR Without using Math.max=============//
/*
function robber(nums, index){
    if(index >= nums.length) {
        return 0;
    }

    // include
    let includeAns = nums[index] + robber(nums, index + 2);

    // exclude
    let excludeAns = robber(nums, index + 1);

    // manual max logic
    return (includeAns > excludeAns) ? includeAns : excludeAns;
}

let nums = [2,4,1,6,9,3,1];
let ans = robber(nums, 0);
console.log("Max amount is:", ans);

*/


/*
Complete call stack flow

robber(0) call hua
│  index=0, nums[0]=2
│  Base case? 0>=7? NO
│  includAns = 2 + robber(2)  ← pehle yeh call hoga, robber(0) RUKA
│
└─► robber(2) call hua
    │  index=2, nums[2]=1
    │  Base case? 2>=7? NO
    │  includAns = 1 + robber(4)  ← robber(2) RUKA
    │
    └─► robber(4) call hua
        │  index=4, nums[4]=9
        │  Base case? 4>=7? NO
        │  includAns = 9 + robber(6)  ← robber(4) RUKA
        │
        └─► robber(6) call hua
            │  index=6, nums[6]=1
            │  Base case? 6>=7? NO
            │  includAns = 1 + robber(8)  ← robber(6) RUKA
            │
            └─► robber(8) — BASE CASE! 8>=7 → return 0
            │
            ◄── robber(6) resume: includAns = 1+0 = 1
            │   excludeAns = 0 + robber(7)
            │
            └─► robber(7) — BASE CASE! 7>=7 → return 0
            │
            ◄── robber(6): excludeAns = 0+0 = 0
                finalAns = max(1, 0) = 1
                return 1 ✓
        │
        ◄── robber(4) resume: includAns = 9+1 = 10
        │   excludeAns = 0 + robber(5)
        │
        └─► robber(5) call hua
            │  index=5, nums[5]=3
            │  Base case? 5>=7? NO
            │  includAns = 3 + robber(7)
            │
            └─► robber(7) — BASE CASE! → return 0  [dobara!]
            │
            ◄── robber(5): includAns = 3+0 = 3
            │   excludeAns = 0 + robber(6)
            │
            └─► robber(6) — DOBARA calculate! → return 1  [already tha!]
            │
            ◄── robber(5): excludeAns = 0+1 = 1
                finalAns = max(3, 1) = 3
                return 3 ✓
        │
        ◄── robber(4): excludeAns = 0+3 = 3
            finalAns = max(10, 3) = 10
            return 10 ✓
    │
    ◄── robber(2): includAns = 1+10 = 11
    │   excludeAns = 0 + robber(3)
    │
    └─► robber(3) call hua
        │  index=3, nums[3]=6
        │  Base case? 3>=7? NO
        │  includAns = 6 + robber(5)
        │
        └─► robber(5) — DOBARA! → return 3  [already tha!]
        │
        ◄── robber(3): includAns = 6+3 = 9
        │   excludeAns = 0 + robber(4)
        │
        └─► robber(4) — DOBARA! → return 10  [already tha!]
        │
        ◄── robber(3): excludeAns = 0+10 = 10
            finalAns = max(9, 10) = 10
            return 10 ✓
    │
    ◄── robber(2): excludeAns = 0+10 = 10
        finalAns = max(11, 10) = 11
        return 11 ✓
│
◄── robber(0): includAns = 2+11 = 13
│   excludeAns = 0 + robber(1)
│
└─► robber(1) call hua
    │  index=1, nums[1]=4
    │  Base case? 1>=7? NO
    │  includAns = 4 + robber(3)
    │
    └─► robber(3) — DOBARA! → return 10
    │
    ◄── robber(1): includAns = 4+10 = 14
    │   excludeAns = 0 + robber(2)
    │
    └─► robber(2) — DOBARA! → return 11
    │
    ◄── robber(1): excludeAns = 0+11 = 11
        finalAns = max(14, 11) = 14
        return 14 ✓
│
◄── robber(0): excludeAns = 0+14 = 14
    finalAns = max(13, 14) = 14
    return 14 ✓

console.log("Max amount is:", 14)

*/


//==============LeetCode===============//
var rob = function(nums, index) {

    function solve(index){
        if(index >= nums.length){
            return 0;
        }

        let includeAns = nums[index] + solve(index + 2);
        let excludeAns = solve(index + 1);

        return (includeAns > excludeAns) ? includeAns : excludeAns;
    }

    return solve(0);
    
};

let ans = rob([2,7,9,3,1], 0)
console.log(ans)