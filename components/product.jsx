import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Badge } from './ui/badge'

const Product = ({product}) => {
  console.log(product)
  return (
    <Link 
    href={{
      pathname:'/product',
      query:{url: product?.general.url}
    }}
    className='flex flex-col relative border rounded-md h-full p-5'
    >
        <Image 
         src={product.general.image}
         alt={product.general.title}
         width={200}
         height={200}
         className='mx-auto'
        />
        <p className="text-xl  font-bold " >
          {product.price?.currency}
          /
          {product.price.price}
        </p>
        {
          product.badge && (
            <Badge className='w-fit absolute top-2 right-2'>
              {product.badge}
            </Badge>
          )
        }
        <p className="font-light">{
          product.general.title
          }</p>
        {product.rating && (
          <p className="text-yellow-500 text-sm">
            {product.rating.rating}*
            <span className="text-gray-400 ml-2">{product.rating.count}</span>
          </p>
        )}
    </Link>
  )
}

export default Product