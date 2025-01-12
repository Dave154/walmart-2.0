import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-2 ">Getting Your Results</h1>
      <h2 className="mb-5 text-gray-400 ">Please wait...</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
            Array(8).fill('').map((item,index) => {
                return <Skeleton key={index} className='w-[300px] h-[400px] rounded-xl' />
            })
        }
      </div>
    </div>
  )
}

export default Loading