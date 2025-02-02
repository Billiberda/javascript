

// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
const numOne = parseFloat(prompt(`Введіть число`))
const numTwo = parseFloat(prompt(`Введіть число`))

const add = numOne + numTwo
const multiplication = numOne * numTwo
const divide = numOne / numTwo

document.write(`Додавання ${add} <br/> Множення ${multiplication} <br/> Ділення ${divide}`)
////////////////////////////////////////////////////////////////