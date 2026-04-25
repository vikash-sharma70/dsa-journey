// 1.Built-in method (easy)
// 2.ASCII / CharCode (DSA level)
// 3.Manual logic (interview clarity)

/* IMP:
'A' = 65
'Z' = 90

'a' = 97
'z' = 122 

👉 Difference:

'a' - 'A' = 32

👉 Trick:

Upper → Lower  = +32
Lower → Upper  = -32

*/

//=================1.Built-in method (easy)==============//
let char = 'A';
let lower = char.toLowerCase();
console.log("A in Lower case:", lower);
