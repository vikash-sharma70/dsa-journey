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