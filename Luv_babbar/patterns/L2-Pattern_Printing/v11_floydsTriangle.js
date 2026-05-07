floydTrianglePat(5);

function floydTrianglePat(n){

    let count = 1;

    for(let row = 1; row <= n; row++){

        let result = "";  // for creating rows

        for(let col = 1; col <= row; col++){
            result += count + " ";
            count++;
        }

        console.log(result); // print all together
    }
}