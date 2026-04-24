/* (1)Search an ele in an array and return index
(2)find min value from an arr
(3)find max value from an arr */

//===============Problem-1================//
let arr = [10,20,30,40,50];

let result = searchEle(400, arr, 0);

if(result === -1){
    console.log(-1);
} else {
    console.log("index is:", result);
}

function searchEle(num, arr, index){
    if(index >= arr.length){
        return -1;
    }

    if(num === arr[index]){
        return index;
    }

    return searchEle(num, arr, index + 1);
}

/*
return searchEle(num, arr, index + 1) ka matlab
Yahan return ke do kaam hain ek saath:
Pehla kaam — Recursive call karna:
searchEle(num, arr, index + 1) ek naya function call hai jo same kaam karta hai, lekin ek index aage badhke. Yeh tab hota hai jab current element match nahi karta aur array khatam bhi nahi hui.
Doosra kaam — Chain banana:
return keyword ka matlab hai — "Jo bhi yeh recursive call return kare, woh result seedha mere caller ko de do, khaali haath mat bhejo." Har frame ek relay runner ki tarah hai — -1 pakda aur aage badhaya.
Dry Run Summary (400 search karte hain [10,20,30,40,50] mein)

searchEle(400, arr, 0) → 400≠10 → calls index+1
  searchEle(400, arr, 1) → 400≠20 → calls index+1
    searchEle(400, arr, 2) → 400≠30 → calls index+1
      searchEle(400, arr, 3) → 400≠40 → calls index+1
        searchEle(400, arr, 4) → 400≠50 → calls index+1
          searchEle(400, arr, 5) → 5>=5 → return -1  ← BASE CASE

          ↑ -1 return hua
        ↑ -1 return hua
      ↑ -1 return hua
    ↑ -1 return hua
  ↑ -1 return hua
↑ -1 return hua → result = -1 
*/

//===============Problem-2================//

