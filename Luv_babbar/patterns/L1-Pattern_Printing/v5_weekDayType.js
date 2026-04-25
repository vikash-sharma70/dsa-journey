function weekDay(day){

    if(day<1 || day>7){
        console.log("Wrong input");
        
    }
    else if(day>=1 && day<=5){
        console.log("Weekday");
        
    } else{
        console.log("Weekend");
        
    }
}

weekDay(3)