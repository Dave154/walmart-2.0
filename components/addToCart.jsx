'use client';

import useCartStore from "@/store";
import { Button } from "./ui/button";
import RemoveFromCart from "./removeFromCart";

const AddToCart = ({product}) => {
    const {cart,addToCart} = useCartStore()
    console.log(cart)
     const howManyInCart = cart.filter((p)=>p.general.meta.sku === product.general.meta.sku).length
    const  handleAdd =()=>{
        addToCart(product)
      }
    if(howManyInCart > 0){
    return  <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product} />
        <span>{howManyInCart}</span>
        <Button className='bg-wal hover:bg-wal/50 rounded-md'
        onClick={handleAdd}
        >
          +
        </Button>

      </div>
    }
     
  return (
     <Button onClick={handleAdd} className='bg-wal hover:bg-wal/50 rounded-md text-white' >
        Add to cart
     </Button>
  )
}

export default AddToCart