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


//================2.ASCII / CharCode (DSA level)===========//
function toLower(ch){
    let ascii = ch.charCodeAt(0);

    //check if upperCase
    if(ascii >= 'A'.charCodeAt(0) && ascii <= 'Z'.charCodeAt(0) ){
        let newAscii = ascii - 'A'.charCodeAt(0) + 'a'.charCodeAt(0);

        return String.fromCharCode(newAscii);
    }

    return ch; //already lowercase
}

console.log("To Lower case:", toLower('M'));


function toUpper(ch){
    let ascii = ch.charCodeAt(0);

    //check if upperCase
    if(ascii >= 'a'.charCodeAt(0) && ascii <= 'z'.charCodeAt(0) ){
        let newAscii = ascii - 'a'.charCodeAt(0) + 'A'.charCodeAt(0);

        return String.fromCharCode(newAscii);
    }

    return ch; //already lowercase
}

console.log("To Upper case:", toUpper('m'));

