/*
Para esta práctica se pide implementar un algoritmo de quicksort en Typescript

PISTA
La solución debe ser una función recursiva, es decir que se llama a sí misma

IMPORTANTE
NO se puede usar material de internet que resuelva directamente el ejercicio
NO se puede usar ningún asistente de código inteligente, estilo chat-gtp o copilot
Se deberá entregar mediante un repositorio de github y una release
*/

const qs = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  } // Si hemos llegado al final de la ordenacion devolvemos el array.
  const pIndex: number = Math.round(arr.length / 2); // Indice del elemento medio del array
  const pivote: number = arr[pIndex]; // Pivote para separar
  const izq: number[] = [];
  const der: number[] = [];

  // Separamos los numeros menores y mayores que el pivote.
  arr.forEach((num: number, index: number) => {
    if (index !== pIndex) {
      if (num < pivote) {
        izq.push(num);
      } else {
        der.push(num);
      }
    }
  });

  return [...qs(izq), pivote, ...qs(der)];
};

// Generamos un array de numeros enteros     aleatorios entre [0 y 100]
const arrNum: number[] = [];
for (let i = 0; i < 100; i++) {
  arrNum.push(Math.round(Math.random() * 100));
}

console.log("Array original: ", arrNum);
console.log("Array Ordenado: ", qs(arrNum));
