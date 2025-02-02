// Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
const seconds =  parseFloat(prompt(`Введіть кількість секунд`))
const oneMinut = 60
const oneHour = 3600

const minuts = seconds / oneMinut 
const hours = seconds / oneHour 

document.write(`Пройшло ${hours} годин і ${minuts} хвилин `)
////////////////////////////////////////////////////////////////////////////////////////////////////////