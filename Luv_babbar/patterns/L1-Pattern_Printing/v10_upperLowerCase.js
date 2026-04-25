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
    console.log("small Ascii is:", ascii);

    //check if upperCase
    if(ascii >= 'A'.charCodeAt(0) && ascii <= 'Z'.charCodeAt(0) ){
        let newAscii = ascii - 'A'.charCodeAt(0) + 'a'.charCodeAt(0); //77 - 65 + 97 = 12+97= 109 → 'm'
        console.log("samll New Ascii is:", newAscii);

        return String.fromCharCode(newAscii);
    }

    return ch; //already lowercase
}

console.log("To Lower case:", toLower('M'));


function toUpper(ch){
    let ascii = ch.charCodeAt(0);
    console.log("Ascii is:", ascii);
    

    //check if upperCase
    if(ascii >= 'a'.charCodeAt(0) && ascii <= 'z'.charCodeAt(0) ){
        let newAscii = ascii - 'a'.charCodeAt(0) + 'A'.charCodeAt(0); //109 - 97 + 65 = 77 -> M
        console.log("New Ascii is:", newAscii);

        return String.fromCharCode(newAscii);
    }

    return ch; //already lowercase
}

console.log("To Upper case:", toUpper('m'));


//=======Full String Convert (Lower → Upper)=======//
function toUpString(str){
    let result = "";

    for(let i =0; i<str.length; i++){
        let ch = str[i]

        if(ch>= 'a' && ch<='z'){
            let upper = String.fromCharCode(ch.charCodeAt(0) - 'a'.charCodeAt(0) + 'A'.charCodeAt(0))
            console.log("Upper:", upper);
            result += upper;
            console.log("result:", result);
        } else {
            result += ch;
        }
    }
    return result;
}

console.log("To upper string:", toUpString("vikash"));


