function solve(arr){
    let nb = 0;
    let flark = false;
    for(let i=0; i<arr.length; i++){
        for(let r = 0; r<arr[i].length; r++){
            if(r-1>=0){
                if(arr[i][r] === arr[i][r-1]){
                    nb+=1;
                    flark = true
                    //arr[i][r] = "new123";
                    //break;
                }
            }  
            if(r+1<arr[i].length){
                if(arr[i][r] === arr[i][r+1]){
                    nb+=1;
                    flark = true
                    //arr[i][r] = "new123"; 
                    //break;
                }
            }
            if(i-1>0){
                if(arr[i][r] === arr[i-1][r]){
                    nb+=1;
                    flark = true
                    //arr[i][r] = "new123"; 
                    //break;
                }
            }
            if(i+1<arr.length){
                if(arr[i][r] === arr[i+1][r]){
                    nb+=1;
                    flark = true
                    //arr[i][r] = "new123"; 
                    //break;
                }
            } 
            if(flark = true){
                arr[i][r] = "new123";
                flark = false
            }
                
            
            
        }
    }
    console.log(nb);
}
solve([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]])