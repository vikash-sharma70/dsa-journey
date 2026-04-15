function countHead(num){
  if(num == 0){
    return;
  }
  
  countHead(num - 1); //this is head recursion as before printing we are doing recursion
  console.log("Count is:", num);
}

countHead(5);

/*
Head Recursion:
“Go first, do the work later.”

Tail Recursion:
“Do the work now, then go.”
*/