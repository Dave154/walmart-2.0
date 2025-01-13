import { create } from 'zustand'
import { persist } from 'zustand/middleware'


const useCartStore = create()(
    persist(
      (set,get) => ({
        cart: [],
        addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
        removeFromCart:(product)=> {
            const productToRemove=get().cart.findIndex((p)=>p.general.meta.sku === product.general.meta.sku)
            set((state) =>{
                const newCart = [...state.cart]
                newCart.splice(productToRemove,1)
                return {cart: newCart}
            } )   
        }
      }),
      {
        name: 'shopping-cart-storage',
      },
    ),
 
)

export default useCartStore