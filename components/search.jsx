'use client';
import { useRouter } from "next/navigation";
import { Button } from "./ui/button"
import {Search} from 'lucide-react'

const SearchComp = () => {
   const router = useRouter()
    const handleSubmit =(e)=>{
        e.preventDefault()
        const input = e.currentTarget.input.value
        router.push(`/search?q=${input}`)

    }
  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full w-full flex-1 ">
            <input
            name='input'
            type="text" placeholder="Search Everything" 
            className=" text-black flex-1 bg-transparent px-4 rounded-full outline-none placeholder:text-sm"/>
            
            <Button className='px-2 bg-yellow-400 cursor-pointer rounded-full px-2 w-10 h-10'>
                <Search />
            </Button>
        </form>
  )
}

export default SearchComp