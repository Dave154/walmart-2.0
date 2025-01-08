import GridOption from "@/components/gridOption";

export default function Home() {
  return (
     <main className="">
        <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4  gap-6">
          <GridOption
          title='Sweet Gifts For Less Than $20'
          image='https://links.papareact.com/1dy'
          className='bg-pink-200 h-full md:h-32'
          
          />
           <GridOption
          title='Sweet Gifts For Less Than $20'
          image='https://links.papareact.com/1dy'
          className='bg-blue-100 col-span-2 row-span-2'
          
          />
           <GridOption
          title='Sweet Gifts For Less Than $20'
          image='https://links.papareact.com/1dy'
          className='bg-pink-200 row-span-2'
          
          />
           <GridOption
          title='Sweet Gifts For Less Than $20'
          image='https://links.papareact.com/1dy'
          className='bg-yellow-100 h-64'
          
          />
           <GridOption
          title='Sweet Gifts For Less Than $20'
          image='https://links.papareact.com/1dy'
          className='bg-pink-200 h-full md:h-32'
          
          />
        </div> 
     </main>
  );
}
