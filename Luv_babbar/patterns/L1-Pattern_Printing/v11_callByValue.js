// JavaScript me pure "call by reference" hota hi nahi ❌

// 👉 JS me hota hai:

// Call by Value (but for objects → reference ka value pass hota hai)

// 👉 Isko bolte hain: Call by sharing 


//=======Call by Value=======
function changeValue(x){
    x = 100;
    console.log("Inside:", x);
}

let a = 10;
changeValue(a);
console.log("Outside:", a);

// Output
// Inside: 100
// Outside: 10


//=======Object / Array → Call by Sharing======//
function updateArr(arr){
    arr[0] = 999;
}

let nums = [10,20,30];
updateArr(nums);

console.log(nums);
// Output
// [999, 20, 30]

// Samajh
// nums → address (say 1000)
// arr → same address (1000)


// IMPORTANT TRICK (INTERVIEW TRAP)
function update(arr){
    arr = [100,200];
}

let nums1 = [1,2,3];
update(nums1);

console.log(nums1);
// 🧪 Output
// [1,2,3]

/*
🧠 WHY??

👉 Ye samajhna bahut important hai:
arr = [100,200]

👉 iska matlab:
arr ab naye address ko point kar raha hai

👉 but:
nums → purane address pe hi hai */



//==============DSA Use Case (REAL IMPACT)
//✔️ Backtracking Example
function solve(arr){
    arr.push(100);
    console.log("Inside:", arr);
}

let nums2 = [1,2];
solve(nums2);
console.log("Outside:", nums2);
// Output
// Inside: [1,2,100]
// Outside: [1,2,100]

// 👉 Isliye backtracking me:

// push → pop karna zaroori hota hai
// 5️⃣ How to avoid change (Clone)
function safeUpdate(arr){
    let copy = [...arr]; // clone
    copy[0] = 999;
    console.log("Inside:", copy);
}

let nums3 = [10,20];
safeUpdate(nums3);

console.log("Outside:", nums3);
// Output
// Inside: [999,20]
// Outside: [10,20]