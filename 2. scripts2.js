

/* SE O VALOR DA COMPRA FOR MAIOR QUE R$30,00; DISCONTO DE 10% */

const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValueWithDiscount = 0
let finalValueWithoutDiscount = 0
let finalDiscount = 0

function calcDiscount(price, discount){
    const result = (price * discount) / 100
    return result
}

cart.forEach( value => {
    
    if(value > 30 ){
        const discount = calcDiscount(value, 10) 
        finalValueWithDiscount += (value - discount)

        const price = calcDiscount(value, 10)
        finalValueWithoutDiscount += (value)

        const trade = calcDiscount(value, 10)
        finalDiscount = (finalValueWithoutDiscount += (value) - (value)) - (finalValueWithDiscount += (value - discount) - (value - discount))
    }

    else {
        
        finalValueWithDiscount += (value)
    }
            
})


console.log(`O valor final da sua compra foi de R$ ${finalValueWithoutDiscount.toFixed(2)}, 
porém, com desconto você pagará R$ ${finalValueWithDiscount.toFixed(2)}, e seu desconto foi R$ ${finalDiscount.toFixed(2)}`)


