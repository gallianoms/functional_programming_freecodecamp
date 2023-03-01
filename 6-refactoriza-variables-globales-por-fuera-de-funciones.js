// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(bookList,bookName) {

  const newArr = [...bookList]
  newArr.push(bookName)
  return newArr

  // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea
function remove(bookList,bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

     return bookList.filter(book => book !== bookName)

    // Cambia el código encima de esta línea
    }
}