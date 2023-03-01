const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea

  return [...arr].sort((a,b) => a-b)

  // Cambia solo el código encima de esta línea
}

nonMutatingSort(globalArray);