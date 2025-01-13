import React from 'react'

function getCartTotal(products) {
    const total = products.reduce((acc, current)=>{
        return acc + current.price.price
    },0)

  return `${products[0]?.price.currency ? products[0]?.price.currency : ''} ${total?.toFixed(2)} `
}

export default getCartTotal