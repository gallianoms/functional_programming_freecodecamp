function alphabeticalOrder(arr) {
  // Cambia solo el código debajo de esta línea
  
  return arr.sort((a,b) => {
    return a > b ? 1
      : a < b ? -1
      : 0
  })
  // Cambia solo el código encima de esta línea
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);