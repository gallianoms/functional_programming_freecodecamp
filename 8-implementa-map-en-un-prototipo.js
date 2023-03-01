Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea

  // for (let i = 0; i < this.length; i++){
  //   newArray.push(callback(this[i], i, this))
  // }
  
  this.forEach((elem, index, originalArr) => newArray.push(callback(elem, index, originalArr)))
  
  // Cambia solo el código encima de esta línea
  return newArray;
};

[1,2,3].myMap(num => num * 2)

// [1,2,3].map(num => num * 2)

