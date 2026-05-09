let result = multiplyEle([10,20,30,40])
console.log(result);

function multiplyEle(arr){

    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i]*10;
    }

    return arr;
}


//==========multiply in separate arr=========//
let result1 = multiplyEle1([10,20,30,40])
console.log(result1);

function multiplyEle1(arr){

    let arrCopy = arr;

    for(let i=0; i<arr.length; i++){
        arrCopy[i] = arr[i]*10;
    }

    return arrCopy;
}
