'use client';

import getCartTotal from "@/lib/getCartTotal";
import useCartStore from "@/store";

const Basket = () => {
    const cart = useCartStore(state=> state.cart)
    const total = getCartTotal(cart)



  return (
    <div>
        <p className='text-xs font-extralight'>
            {
                cart.length > 0 ? `${cart.length} items`:'No Items'
            }
        </p>
        <p>{total}</p> 
    </div>
  )
}

export default Basket