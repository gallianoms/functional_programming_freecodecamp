const squareList = arr => {
  // Cambia solo el código debajo de esta línea
   return arr.filter(num => {
    if(num > 0 && Number.isInteger(num)) return num
  }).map(num => num * num)
  // Cambia solo el código encima de esta línea
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);