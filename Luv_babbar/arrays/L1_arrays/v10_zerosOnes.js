let result = zerosAndOnes([1,,3,0,1,0,0,1,1,8])
console.log(result);

function zerosAndOnes(arr){

    let zerosCount = 0;
    let onesCount = 0;

    for(let i = 0; i<=arr.length-1; i++){
        if(arr[i]==0){
            zerosCount++;
        }
        if(arr[i]==1){
            onesCount++;
        }
    }

    return {
        zeros: zerosCount,
        ones: onesCount
    }
}
