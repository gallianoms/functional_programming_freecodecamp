function splitify(str) {
  // Cambia solo el código debajo de esta línea

const withoutComma = str.replaceAll(',', ' ')
  const withoutLine = withoutComma.replaceAll('-', ' ')
  const withoutDot = withoutLine.replaceAll('.', ' ')
  
  return withoutDot.split(' ')
  
  // Cambia solo el código encima de esta línea
}

splitify("Hello World,I-am code");