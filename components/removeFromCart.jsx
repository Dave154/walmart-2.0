import useCartStore from "@/store"
import { Button } from "./ui/button";


const RemoveFromCart = ({product}) => {
    const removeFromCart = useCartStore(state=>state.removeFromCart);

    const handleRemove =()=>{
        removeFromCart(product)
    }

  return (
    <Button className='bg-wal hover:bg-wal/50 rounded-md'  onClick={handleRemove} >-</Button>
  )
}

export default RemoveFromCart