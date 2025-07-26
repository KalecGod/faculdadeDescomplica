// Exemplos de Operadores Logicos em JavaScript

// Operador AND (&&)

const a = true;
const b = false;

const resultadoAnd = a && b; // false
const resultadoAnd2 = a && true; // true

console.log('Resultado AND:', resultadoAnd); // Resultado AND: false
console.log('Resultado AND 2:', resultadoAnd2); // Resultado AND 2: true    

// Operador OR (||)

const resultadoOr = a || b; // true
const resultadoOr2 = a || false; // true

console.log(`Resultado OR: ${resultadoOr}`); // Resultado or: true
console.log(`Resultado OR 2: ${resultadoOr2}`); // Resultado or 2: true


// Operador NOT (!)

const resultadoNot = !a; // false
const resultadoNot2 = !b; // true

console.log(`Resultado NOT: ${resultadoNot}`); // Resultado NOT: false
console.log(`Resultado NOT 2: ${resultadoNot2}`); // Resultado NOT 2: true  


// Combinação de operadores lógicos 

const resultadoCombo = (a || b) && !b; // true
const resultadoCombo2 = (a && b) || a; // true
const resultadoCombo3 = (a || b) && !a; // false
const resultadoCombo4 = (a && b) || !b; // true 
const resultadoCombo5 = (a || b) && (a && !b); // false
const resultadoCombo6 = (a && b) || (a || !b); // true

console.log(`Resultado Combinação: ${resultadoCombo}`); // Resultado Combinação: false
console.log(`Resultado Combinação 2: ${resultadoCombo2}`); // Resultado Combinação  
console.log(`Resultado Combinação 3: ${resultadoCombo3}`); // Resultado Combinação 3: false
console.log(`Resultado Combinação 4: ${resultadoCombo4}`); // Resultado Combinação  
console.log(`Resultado Combinação 5: ${resultadoCombo5}`); // Resultado Combinação 5: false
console.log(`Resultado Combinação 6: ${resultadoCombo6}`); // Resultado Combinação