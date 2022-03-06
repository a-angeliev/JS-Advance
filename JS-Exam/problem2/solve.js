class LibraryCollection{
  constructor(capacity){
    this.capacity = capacity
    this.books = []
  }

  addBook(bookName, bookAuthor){
    if(this.capacity<= this.books.length){
      throw new Error("Not enough space in the collection.")
    }else{
      this.books.push({bookName, bookAuthor, payed: false})
      return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
  }

  payBook(bookName){
    let book = this.books.filter(x => x.bookName == bookName)
    if(book.length == 0){
      throw new Error(`${bookName} is not in the collection.`)
    }else if(book[0].payed == true){
      throw new Error(`${bookName} has already been paid.`)
    }else{
      book[0].payed = true
      return `${bookName} has been successfully paid.`
    }
  }

  removeBook(bookName){
    let book = this.books.filter(x=> x.bookName == bookName)
    if(book.length == 0){
      throw new Error("The book, you're looking for, is not found.")
    }else if(book[0].payed == false){
      throw new Error(`${bookName} need to be paid before removing from the collection.`)
    }else{
      let removeIndex = this.books.findIndex( x => x.bookName == bookName)
      this.books.splice(removeIndex, 1)
      return `${bookName} remove from the collection.`
    }
  }

  getStatistics(bookAuthor){
    if(bookAuthor == undefined){
      let result = `The book collection has ${ this.capacity - this.books.length } empty spots left.\n`
      let list = this.books.sort((a,b)  => a.bookName.localeCompare(b.bookName)).forEach(x => result += `${x.bookName} == ${x.bookAuthor} - ${x.payed ? `Has Paid` : `Not Paid`}.\n`)
      return result.trim()
    }else{
      let book = this.books.filter(x=> x.bookAuthor == bookAuthor)
      if(book.length == 0){
        throw new Error(`${bookAuthor} is not in the collection.`)
      }else{
        return `${book[0].bookName} == ${book[0].bookAuthor} - ${book[0].payed ? `Has Paid` : `Not Paid`}.`
      }
    }
  }
}
const library = new LibraryCollection(5)
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");
console.log(library.getStatistics());



