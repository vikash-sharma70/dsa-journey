let result = findUnique([2,3,5,4,2,7,5,3,4])
console.log(result);

function findUnique(arr){

    let ans = 0;

    for(let i =0; i<arr.length; i++){
        ans = ans^arr[i]
    }

    return ans;
}


// 🔥 Why it works?

// 👉 Using xor duplicate cancel ho jaate hain:

// 3 ^ 3 = 0
// 5 ^ 5 = 0
// 4 ^ 4 = 0

// 👉 Sirf unique bachta hai ✔️
