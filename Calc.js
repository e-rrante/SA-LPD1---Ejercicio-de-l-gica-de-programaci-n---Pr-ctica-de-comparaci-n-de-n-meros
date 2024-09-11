const readline = require('readline')

// Crear una interfaz de lectura de datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Función para pedir un número al usuario
function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            const number = Number(answer)
            if (isNaN(number)) {
                console.log("Por favor, introduce un número válido.");
                resolve(askQuestion(question))
            } else {
                resolve(number)
            }
        })
    })
}

async function main() {
    try {
        const num1 = await askQuestion("Introduce el primer número: ")
        const num2 = await askQuestion("Introduce el segundo número: ")
        const num3 = await askQuestion("Introduce el tercer número: ")

        const numbers = [num1, num2, num3]

        const sortedAscending = [...numbers].sort((a, b) => a - b)

        const sortedDescending = [...sortedAscending].reverse()

        const max = Math.max(num1, num2, num3)
        const min = Math.min(num1, num2, num3)
        const middle = num1 + num2 + num3 - max - min

        console.log("Ordenados de mayor a menor:", sortedDescending)
        console.log("Ordenados de menor a mayor:", sortedAscending)

        console.log(`Mayor: ${max}, Centro: ${middle}, Menor: ${min}`)

        if (num1 === num2 && num2 === num3) {
            console.log("Los números son iguales.")
        } else {
            console.log("Los números no son iguales.")
        }
    } finally {
        rl.close()
    }
}

main();