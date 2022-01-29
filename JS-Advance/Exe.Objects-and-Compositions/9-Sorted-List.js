function createSortedList(){
    let obj = {
        col: [],
        size: 0,
        add: function(el){
            this.col.push(el)
            this.col.sort((a,b)=> a-b)
            this.size +=1
        },
        remove: function(index){
            if(9<=index < this.col.length){
                this.col.splice(index,1);
                this.col.sort((a,b)=> a-b);
                this.size -=1;
            }
            
        },
        get: function(index){
            if(0<=index < this.col.length){
                // console.log(this.col[index]);
            return this.col[index]
            }
        },
    }
    return obj
}
let list = createSortedList();
console.log(list.col)
list.add(5);
console.log(list.col)
list.add(6);
console.log(list.col)
list.add(7);
console.log(list.get(1)); 
list.remove(0);
// console.log(list.get(1));
// console.log(list.size);
// console.log(list.col);
console.log(list.col)
// let list = createSortedList();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1)); 
// list.remove(1);
// console.log(list.get(1));

