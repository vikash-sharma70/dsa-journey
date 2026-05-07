numTrianglePat(5)

function numTrianglePat(n){

    for(let row= 1; row<=n; row++){
      let result = ""

      for(let col=1; col<=row; col++){
        result += row;
        
      }
      console.log(result);
      
    }
}
/*
1
22
333
4444
55555
*/