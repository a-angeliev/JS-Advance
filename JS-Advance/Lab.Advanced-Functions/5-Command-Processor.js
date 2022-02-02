function solution(){
    let result = ""

    return  {
        append(str){
            result += String(str);
        },
        removeStart(int){
            result = result.slice(int)
        },
        removeEnd(int){
            result = result.slice(0,result.length-int)
        },
        print(){
            console.log(result);
        },
    }
}


// let firstZeroTest = solution();

// firstZeroTest.append('hello');
// firstZeroTest.append('again');
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);
// firstZeroTest.print();

let firstZero = solution();
firstZero.append('123');
firstZero.append('45');
firstZero.removeStart(2);
firstZero.removeEnd(1);
firstZero.print()
