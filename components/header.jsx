import { Grid2X2, Heart, LayoutGrid, ShoppingCart, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import Search from '@/components/search'
const Header = () => {
    const links = [
        {
            route:'/',
            icon: <Grid2X2 size={20}/> ,
            text:'Departments',
            sub:'',
            sm:true
        },
        {
            route:'/',
            icon:<LayoutGrid size={20}/>,
            text:'Services',
            sub:'',
            sm:true
        },
        {
            route:'/',
            icon: <Heart size={20}/> ,
            text:'My Items',
            sub:'Reorder',
        },
        {
            route:'/',
            icon: <User size={20}/>,
            text:'Account',
            sub:'Sign In',
        },
    ]

   
  return (
    <header className="flex flex-col md:flex-row items-center bg-wal px-10 py-7 space-x-5">
        <Link href='/' className="mb-5 md:mb-0">
            <Image
            src='https://i.imgur.com/5V4wehM.png'
            alt='logo'
            width={150}
            height={150}
            />
        </Link>
        
        <Search/>
        <div className="flex  space-x-5 p-5 pb-0 md:p-0 mt-5 md:mt-0">

            {
                links.map((link,index)=>{
                    const {route,text,icon,sm,sub}=link
                    return <Link key={index} href={route}
                    className={`${sm && 'hidden  xl:flex'} flex  items-center text-white font-bold items-center space-x-2`}>
                    <i>{icon}</i>
                    <div>
                    <p className='font-extralight text-xs'>{sub}</p> 
                    
                    <p>{text}</p> 
                    </div>
                   </Link>
                })
            }
            <Link  href={'/basket'}
                    className="flex items-center text-white font-bold items-center space-x-2"
                   >
                    <ShoppingCart size={20} />
                    <div>
                    <p className='text-xs font-extralight'>No Items</p>
                   <p>$0.00</p> 
                    </div>
                   </Link>
           
        </div>
    </header>
  )
}

export default Header