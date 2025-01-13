'use client';

import getCartTotal from "@/lib/getCartTotal";
import useCartStore from "@/store";
import Image from "next/image";
import AddToCart from "./addToCart";
import { Button } from "./ui/button";


const CheckoutDetails = () => {
    const cart = useCartStore(state=> state.cart)
    const total =getCartTotal(cart)


    const grouped = cart.reduce((acc,product)=>{
        const sku = product.general?.meta?.sku

        if(sku && !acc[sku]){
            acc[sku] = []
        }
        if(sku) {
            acc[sku].push(product)
        }
        return acc
    },{})
    
    console.log(Object.keys(grouped))
  return (
    <div className="max-w-7xl mx-auto">
        <ul className="space-y-5 divide-y-2">
        {
            Object.keys(grouped).map((key,index)=>{
                const item = grouped[key][0]
                const total = getCartTotal(grouped[key])

                return <li className="p-5 my-2 flex items-center justify-between" key={key}>
                      {
                        item.general.main_image && 
                        <Image
                          src={item.general.main_image}
                          alt={item.general.title}
                          width={100}
                          height={100}
                        />
                      }  
                      <div className="flex space-x-4 pl-4">
                        <div className="">
                            <p className="line-clamp font-bold ">{item.general.title}</p>
                            <div 
                                dangerouslySetInnerHTML={{__html:item.general.description}}
                            className="line-clamp-1 font-light text-sm mt-2"/>
                        </div>
                        <div className="flex flex-col rouded-md p-5">
                            <AddToCart product={item} />
                            <p className="font-bold text-right mt-4">{total}</p>
                        </div>
                      </div>
                </li>
            })
        }
        </ul> 

        <div className="flex flex-col justify-end  p-5">

            <p className="font-bold text-2xl text-right text-wal mb-5 ">
                Total: {total}
            </p>
            <Button className="h-20 bg-wal text-white hover:bg-wal/60  mt-5 rounded-lg">
                Checkout
            </Button>
        </div>
            
    </div>
  )
}

export default CheckoutDetails