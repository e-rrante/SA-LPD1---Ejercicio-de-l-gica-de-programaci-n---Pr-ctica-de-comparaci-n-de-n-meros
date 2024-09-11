const prompt = require('prompt-sync')()

let num1 = prompt("Introduce el primer número: ")
let num2 = prompt("Introduce el segundo número: ")
let num3 = prompt("Introduce el tercer número: ")

num1 = Number(num1)
num2 = Number(num2)
num3 = Number(num3)

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Por favor, introduce valores válidos.")
} else {
    let max = Math.max(num1, num2, num3)
    let min = Math.min(num1, num2, num3)
    let middle = num1 + num2 + num3 - max - min

    let numbers = [num1, num2, num3];
    let sortedAscending = numbers.slice().sort((a, b) => a - b)
    let sortedDescending = numbers.slice().sort((a, b) => b - a)

    console.log("Ordenados de mayor a menor:", sortedDescending)
    console.log("Ordenados de menor a mayor:", sortedAscending)

    console.log(`Mayor: ${max}, Centro: ${middle}, Menor: ${min}`)

    if (num1 === num2 && num2 === num3) {
        console.log("Los números son iguales.")
    } else {
        console.log("Los números no son iguales.")
    }
}