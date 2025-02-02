// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

const unitPriceOfProduct =  parseFloat(prompt(`Введіть вартість одиниці товару`))
const numberOfProduct = parseFloat(prompt(`Введіть кількість`))

const pdv = 0.05

const sumOfPdv = unitPriceOfProduct * pdv

const priceOfProductWithPdv = unitPriceOfProduct + sumOfPdv

const totalPriceWithPdv = priceOfProductWithPdv * numberOfProduct

document.write(`Загальну вартість та ПДВ ${totalPriceWithPdv} <br/> Сума пдв складає ${sumOfPdv}`)
////////////////////////////////////////////////////////////////////////////////////////////////


