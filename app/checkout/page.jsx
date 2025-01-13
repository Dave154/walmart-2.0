import CheckoutDetails from "@/components/checkoutDetails"
import { ShoppingCartIcon } from "lucide-react"


const Page = () => {
  return (
        <div className="w-full p-10 max-w-7xl mx-auto">
            <div className="flex items-center space-x-2">
                <ShoppingCartIcon className='w-10 h-10' />
                <h1 className='text-2xl font-bold'>Your Cart</h1>
            </div>
            <p className="mt-2 mb-5">
                 Checkout in seconds. When you are reafy    
                </p> 
        <CheckoutDetails />
        </div>
  )
}

export default Page