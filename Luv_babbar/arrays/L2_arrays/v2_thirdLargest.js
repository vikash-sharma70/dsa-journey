let result = thirdLarg([34,11,0,45,12,38,1])
console.log(result);

function thirdLarg(arr){

    if(arr.length < 3){
        return "Not enough elements";
    }
    let large= -Infinity;
    let secondLarge= -Infinity;
    let thirdLargest = -Infinity;

    for(let i = 0; i< arr.length; i++){
        if(arr[i]> large){
            thirdLargest = secondLarge;
            secondLarge = large
            large = arr[i]
        }
        else if(arr[i]> secondLarge && arr[i] !== large){
            thirdLargest = secondLarge
            secondLarge = arr[i]
        } else if(arr[i]>thirdLargest && arr[i] !== large && arr[i] !== secondLarge){
            thirdLargest = arr[i]
        }
    }

    return {
        large: large,
        secondLar: secondLarge,
        thirdLar: thirdLargest
    }
}
