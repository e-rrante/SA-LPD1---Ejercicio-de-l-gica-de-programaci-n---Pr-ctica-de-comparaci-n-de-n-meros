const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function getNumber(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (input) => {
            const number = Number(input)
            if (isNaN(number)) {
                console.log("Por favor, introduce un número válido.")
                resolve(getNumber(prompt))
            } else {
                resolve(number)
            }
        })
    })
}

async function main() {
    try {
        const num1 = await getNumber("Introduce el primer número: ")
        const num2 = await getNumber("Introduce el segundo número: ")
        const num3 = await getNumber("Introduce el tercer número: ")


        const numbers = [num1, num2, num3];

        const sortedAscending = [...numbers].sort((a, b) => a - b)

        const sortedDescending = [...numbers].sort((a, b) => b - a)

        console.log("Ordenados de mayor a menor:", sortedDescending)
        console.log("Ordenados de menor a mayor:", sortedAscending)

        if (num1 === num2 && num2 === num3) {
            console.log("Los números son iguales.")
        } else {
            console.log("Los números no son iguales.")
        }
    } finally {
        rl.close() 
    }
}

main()