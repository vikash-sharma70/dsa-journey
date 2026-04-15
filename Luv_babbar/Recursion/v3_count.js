function count(num){
  if(num == 0){
    return;
  }
  
  count(num - 1);
  console.log("Count is:", num);
}

count(5);