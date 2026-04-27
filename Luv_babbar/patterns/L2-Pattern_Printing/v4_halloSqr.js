//Hallow square pattern
hallowSqrPtr(5);

// function hallowSqrPtr(n){
//     for(let i = 1; i<=n; i++){

//         let result = ""
//         for(let j=1; j<=n; j++){

//             if(i==1 || i==n){
//                 result += "*"
//             } else if(j==1 || j==n){
//                 result += "*"
//             } else {
//                 result += " "
//             }
//         }
//         console.log(result);
        
//     }
// }

//===============Optimized===========//
function hallowSqrPtr(n){
    for(let i = 1; i <= n; i++){

        let result = "";

        for(let j = 1; j <= n; j++){

            if(i === 1 || i === n || j === 1 || j === n){
                result += "*";
            } else {
                result += " ";
            }
        }

        console.log(result);
    }
}

/*
👉 Always think:
Top → i == 1
Bottom → i == n
Left → j == 1
Right → j == n
*/