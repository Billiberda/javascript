// Задача 0. Обчислити значення виразів
// S1=a+12+b
const a = parseFloat(prompt(`Введіть кількість`))
const b = parseFloat(prompt(`Введіть кількість`))
const c = parseFloat(prompt(`Введіть кількість`))
const number = 12
const s_1 = a + number + b
// S2=a+b2a
const sum = a + b
const divide = sum / 2
const s_2 = Math.sqrt(divide)
// S3=3(a+b)c
 const s_3 = Math.cbrt(a + b) * c
//  console.log(s_3)
// S4=sin⁡(a-b)
 const s_4 = Math.sin(-b / a)
document.write(`Обчислення виразу s1 = ${s_1} <br/> Обчислення виразу s2 = ${s_2} <br/> Обчислення виразу s3 = ${s_3} <br/> Обчислення виразу s4 = ${s_4}`)