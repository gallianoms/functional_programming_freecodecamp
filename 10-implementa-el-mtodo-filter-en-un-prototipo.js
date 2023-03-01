Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea
 
 // Solution 1
  // for(let i = 0; i < this.length; i++) {
  //   if(Boolean(callback(this[i], i, this)) === true){
  //     newArray.push(this[i])
  //   }
  // }
  
  // Solution 2
  this.forEach((el, index, originalArr) => {
    if (Boolean(callback(el, index, originalArr)) === true) {
      newArray.push(el)
    }
  })
  // Cambia solo el código encima de esta línea
  return newArray;
};