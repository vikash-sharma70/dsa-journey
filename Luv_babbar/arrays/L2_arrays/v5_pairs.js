let arr = [10, 20, 30, 40, 50, 60, 70];

printPairs(arr);

function printPairs(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            console.log(`(${arr[i]}, ${arr[j]})`);
        }
    }
}

//===========print triplates==========//
printPairs1(arr);

function printPairs1(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            for(let k = j + 1; k < arr.length; k++){
            console.log("Triplates:",`(${arr[i]}, ${arr[j]}, ${arr[k]})`);
            }
        }
    }
}