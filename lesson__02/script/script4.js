// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
const lenghtCentimeters =  parseFloat(prompt(`Введіть довжину`))
const lenghtMeter = 100
const lenghtKilometer = 100000

const meter = lenghtCentimeters / lenghtMeter
const kilometer = lenghtCentimeters / lenghtKilometer

document.write(`Довжина в метрах ${meter} <br/> Довжина в кілометрах ${kilometer}`)
////////////////////////////////////////////////////////////////////////////////////////////////