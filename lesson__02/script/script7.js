// Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

const randomMonthNumber = 1 + Math.floor(Math.random()*(12-1+1))
const randomDayNumber = 0 + Math.floor(Math.random()*(6-0+1))

const totalRandom = randomDayNumber + randomMonthNumber

document.write(`Випадковий номер місяця ${randomMonthNumber} <br/> Випадковий номер дня ${randomDayNumber} <br/> Сума двох випадкових чисел ${totalRandom}`)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////