// DESAFIO CARRINHO DE COMPRAS - FUNCTION RETURN //

/* CALCULA DESCONTO
TODOS OS PRODUTOS ACIMA DE R$30,00 TEM DESCONTO DE 10% */



const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValueWithDiscount = 0
let finalValueWithoutDiscount = 0
let eco = 0


const calcDiscount = (price, discount) => price*discount/100


cart.forEach(value => {
    if (value > 30) {
        const discount = calcDiscount(value, 10)
        finalValueWithDiscount += (value - discount)

        const withoutDiscount = calcDiscount(value, 10)
        finalValueWithoutDiscount += value

        const difference = calcDiscount(value, 10)
        eco = (finalValueWithoutDiscount += (value - value)) - (finalValueWithDiscount += ((value - discount) - (value - discount)))
    }

    else {
        finalValueWithDiscount += value
    }
});

console.log(`O valor a ser pago é de RS ${finalValueWithDiscount.toFixed(2)}, 
o valor sem desconto seria de R$ ${finalValueWithoutDiscount.toFixed(2)},
e você economizou R$ ${eco.toFixed(2)}`)


