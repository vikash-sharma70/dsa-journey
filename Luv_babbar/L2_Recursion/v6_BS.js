function recursiveBS(arr, start, end, target){

    //base case
    if(start > end){
        return -1
    }

    //1st case, We need to solve
    let mid = (start+end)/2;
    if(arr[mid] == target){
        return mid;
    }

    //rest recursion will take care
    if(arr[mid] >target){
        //search in left half
        let recAns = recursiveBS(arr,start,mid-1, target);
        return recAns;
    } else {
        //search in right half
        let recAns = recursiveBS(arr, mid+1, end , target);
        return recAns;
    }
}