const prompt = require('prompt-sync')(); // Importar el módulo prompt-sync

// Solicitar al usuario tres números
let num1 = prompt("Introduce el primer número: ");
let num2 = prompt("Introduce el segundo número: ");
let num3 = prompt("Introduce el tercer número: ");

// Convertir los valores a números
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

// Verificar si los números son válidos
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Por favor, introduce valores válidos.");
} else {
    // Encontrar el número mayor, menor y del medio
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    let middle = num1 + num2 + num3 - max - min;

    // Ordenar los números
    let numbers = [num1, num2, num3];
    let sortedAscending = numbers.slice().sort((a, b) => a - b);
    let sortedDescending = numbers.slice().sort((a, b) => b - a);

    // Imprimir los números ordenados
    console.log("Ordenados de mayor a menor:", sortedDescending);
    console.log("Ordenados de menor a mayor:", sortedAscending);

    // Imprimir los números mayor, del medio y menor
    console.log(`Mayor: ${max}, Centro: ${middle}, Menor: ${min}`);

    // Verificar si todos los números son iguales
    if (num1 === num2 && num2 === num3) {
        console.log("Los números son iguales.");
    } else {
        console.log("Los números no son iguales.");
    }
}