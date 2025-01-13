'use client';
import CheckoutDetails from "@/components/checkoutDetails";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter()
  return (
    <Dialog open
    onOpenChange={(open=>!open && router.back())}
    >


      
      <DialogContent className='h-4/5 w-full overflow-scroll max-w-3xl bg-white'>
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
          <DialogDescription>
            <p className="">Basket COntent</p>
          </DialogDescription>
        </DialogHeader>
        <CheckoutDetails />
      </DialogContent>
</Dialog>

  )
}

export default Page