let result = secondLarg([34,11,0,45,12,38,1])
console.log(result);

function secondLarg(arr){
    let largest = -Infinity;
    let secondLarg = -Infinity;

    for(let i = 0; i<arr.length; i++){
        if(arr.length < 2){
        return "Not enough elements";
    }

       // Key Insight (Golden Logic)
         // New largest milta hai → purana largest → secondLargest ban jata hai
        if(arr[i]> largest){
            secondLarg = largest;
            largest = arr[i]
        } else if(arr[i] > secondLarg && arr[i] !== largest){
            secondLarg = arr[i]
        }
    }

    return {
        large: largest,
        secondLarge: secondLarg,
    }

}


