import GridOption from "@/components/gridOption";

export default function Home() {
  return (
     <main className="flex-1">
      <div className="grid grid-cols-2 grid-flow-row-dense md:grid-cols-4 gap-6">
          <GridOption
          title='Sweet Gifts For Less Than $20'
          image='https://links.papareact.com/1dy'
          className='bg-pink-200 h-full md:h-32'
          
          />
           <GridOption
          title='Shop Home'
          image='https://links.papareact.com/szu'
          className='bg-blue-100 col-span-2 row-span-2'
          
          />
           <GridOption
          title='Shop Electronics'
          image='https://links.papareact.com/n7r'
          className='bg-pink-200 row-span-2'
          
          />
           <GridOption
          title='Shop Wardrobe'
          image='https://links.papareact.com/8ko'
          className='bg-yellow-100 h-64'
          
          />
           <GridOption
          title='All you need for match day'
          image='https://links.papareact.com/m8e'
          className='bg-pink-200 h-full md:h-72 row-span-2 md:col-span-2'
          
          />
          <GridOption
          title='Shop Gadgets'
          image='https://links.papareact.com/gs1'
          className='bg-pink-200 md:h-full h-72'
          
          />
          <GridOption
          title='Shop Beauty'
          image='https://links.papareact.com/4y0'
          className='bg-blue-200 h-64 '
          
          />
          <GridOption
          title='Shop Sports'
          image='https://links.papareact.com/sq2'
          className='bg-blue-200 col-span-2 row-span-2 '
          
          />
         
           <GridOption
          title='Flash Deals'
          image='https://links.papareact.com/qx7'
          className='bg-orange-200 h-64 col-span-2'
          
          />
          <GridOption
          title='Enjoy Free Shopping'
          image='https://links.papareact.com/9fh'
          className='bg-rose-200 h-64 col-span-full w-full'
          
          />
        </div>
     </main>
  );
}
