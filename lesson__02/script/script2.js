// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
const yearOfBirth = parseFloat(prompt(`Введіть рік народження`))
const currentYear = 2025

const numberOfYears = currentYear - yearOfBirth

document.write(`Кількість років ${numberOfYears}`)
////////////////////////////////////////////////////////////////
