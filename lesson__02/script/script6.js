
// Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
// вартість товару номер 1
const priceFirstProduct =  parseFloat(prompt(`Вартість товару номер 1`))
// кількість одиниць 1 товару
const firstProductNumber =  parseFloat(prompt(`Введіть кількість товару номер 1`))
// вартість товару номер 2
const priceSecondProduct =  parseFloat(prompt(`Вартість товару номер 2`))
// кількість одиниць 2 товару
const secondProductNumber =  parseFloat(prompt(`Введіть кількість товару номер 2`))
// вартість товару номер 3
const priceThirdProduct =  parseFloat(prompt(`Вартість товару номер 3`))
// кількість одиниць 3 товару
const thirdProductNumber =  parseFloat(prompt(`Введіть кількість товару номер 3`))

// загальна вартість одного товару
const sumOfFirstProduct = priceFirstProduct * firstProductNumber
const sumOfSecondProduct = priceSecondProduct * secondProductNumber
const sumOfThirdProduct = priceThirdProduct * thirdProductNumber
// загальна вартість всіх товарів
const totalPrice = sumOfFirstProduct + sumOfSecondProduct + sumOfThirdProduct

document.write(`<h1>Фіскальний чек</h1>
    <ol>
        <li>Чіпси lays з паприкою <br/>  ціна --- ${priceFirstProduct} X ${firstProductNumber}  ---- всього ${sumOfFirstProduct}</li>
        <li>Булки з яблучним повидлом <br/>  ціна --- ${priceSecondProduct} X ${secondProductNumber}  ---- всього ${sumOfSecondProduct}</li>
        <li>Ковбаска Дрогобицька <br/>  ціна --- ${priceThirdProduct} X ${thirdProductNumber}  ---- всього ${sumOfThirdProduct}</li>
    </ol>
    <h2>Загальна сума ${totalPrice}</h2>`)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////