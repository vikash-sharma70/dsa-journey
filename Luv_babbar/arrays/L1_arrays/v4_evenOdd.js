// agar %(modulus) ko ignore kr skte he means agar program ko without using modulus bna skte ho to jarur banao kuki % operation bohot heavy op hote he to hum bitwise operator & ka use krke bhi is even or odd program ko bna skte he and bitwise operator se fast kuchh bhi nhi hota he.

function checkEvOd(num){
/*
    if(num%2==0){
        return "Even"
    } else{
        return "Odd"
    }
        */

    //======OR using bitwise op========
    if(num & 1){
        return "Odd"
    } else{
        return "Even"
    }
}

let result = checkEvOd(451)
console.log(result);
