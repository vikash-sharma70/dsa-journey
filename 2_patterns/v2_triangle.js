//=====================P1=================//
let n = 4

for (let i = 0; i < n; i++){
    let row = '';
    for(let j = 0; j <= i; j++){
        row += "*" + ' ';
    }
    console.log(row);
    
}

// * 
// * * 
// * * * 
// * * * * 


//=====================P2=================//
let m = 4;
 
for(let i = 1; i<=m; i++){
    let row = '';
    for (j= 0; j< i; j++){
        row += i + " ";
    }
    console.log(row);
    
}

// 1 
// 2 2 
// 3 3 3 
// 4 4 4 4


//=====================P3=================//
let p = 4;

for(let i = 0; i<=p; i++){
    let row = "";
    let ch = String.fromCharCode(65 + i);
    for (let j = 0; j<= i; j++){
        row += ch + ' '
    }
    console.log(row);
    
}

// A 
// B B 
// C C C 
// D D D D 
// E E E E E 


//=====================P4=================//
let q = 4

for(let i = 1; i<=n; i++){
    let rows= "";
    for(let j = 1; j<=i; j++){
        rows += j + " ";
    }
    console.log(rows);
    
}

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 


//=====================P5=================//

let r = 4
for(let i = 1; i<=r; i++){
    let rows = "";
    for (let j=i; j > 0; j--){
        rows += j + " ";

    }
    console.log(rows);
        
}

// 1 
// 2 1 
// 3 2 1 
// 4 3 2 1 