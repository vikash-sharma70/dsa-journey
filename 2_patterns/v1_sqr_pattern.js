//===================p1===============//
// n = 4
// o/p-> 
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

// or n = 3
// 1 2 3
// 1 2 3
// 1 2 3

let n = 4;

for (let i = 1; i <= n; i++){
    let row = "";
    for (let j = 1; j <= n; j++){
      row += j + " ";
    }

    console.log(row);
    
}


//===================p2===============//


// * * * * 
// * * * * 
// * * * * 
// * * * * 
let m = 4;
for (let i = 1; i <= m; i++){
    let row = '';
    for(let j = 1; j <= m; j++){
        row += "* "
    }
    console.log(row);
}


//===================p3===============//
let p = 4;

for (let i = 0; i < p; i++) {
  let row = "";

  for (let j = 0; j < p; j++) {
    row += String.fromCharCode(65 + j) + " ";
  }

  console.log(row);
}

// A B C D 
// A B C D 
// A B C D 
// A B C D 