import fetchproduct from '@/lib/fetchproduct'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Badge } from '@/components/ui/badge'
import AddToCart from '@/components/addToCart'


const Page = async(props) => {
    const {searchParams}= await props
    const query = await searchParams
    const url= query.url

    const product = await fetchproduct(url)
    const general = product?.content.general
    console.log(product)
  return (
    <div className='flex flex-col lg:flex-row w-full p-4 lg:p-10'>
        <div className="hidden lg:inline space-y-4">
          {general?.images?.map((image,i)=>{
            return <Image 
              src={image}
              key={image + ' ' + i}
              alt={'image' + i}
              width={90}
              height={90}
              className='border rounded-sm'
            />
          })}
        </div>
       
        <Carousel
          opts={{
            loop:true
          }}

          className='w-3/5 mb-10 lg:mb-0 lg:w-1/4 self-start flex items-center max-w-xl mx:auto lg:mx-20'
        >
            <CarouselContent>
              {
                general?.images?.map((image,i)=>{
                  console.log(image)
                  return <CarouselItem key={image + '' + i}>
                    <div className="p-1">
                      <div className="flex aspect-square items-center justify-center p-2 relative">
                       <Image 
                         src={image}
                         alt={'Image' + ' ' + i}
                         width={400}
                         height={400}
                       />
                      </div>
                    </div>
                  </CarouselItem>
                })
              }
              
              
            </CarouselContent>
          <CarouselPrevious />
            <CarouselNext />
          </Carousel>

      <div className="flex-1 border rounded-md w-full p-5 space-y-5">
        <h1 className="text-3xl font-bold">{general?.title}</h1>
          <div className="space-x-2">

            {product?.content?.breadcrumbs?.map((breadcrumb,i)=>{
              return <Badge key={breadcrumb + i}
                className={breadcrumb}
                variant={'outline'}
              >
                {breadcrumb.category_name}
              </Badge>
            })}
          </div>

          <div className="py-5" dangerouslySetInnerHTML={{__html:general?.description ? general?.description : ' '}} />
            {product?.content?.rating && (
              <p className="text-yellow-500 text-xs">
                {
                  product?.content?.rating?.rating
                }* 
                <span className="text-gray-400 ml-2">
                  ({product?.content?.rating?.count} reviews)
                </span>
              </p>
            )}


            <p className="text-2xl font-bold mt-2">
            {product?.content?.price.currency} {' '}{product?.content?.price.price}
            </p>
              <AddToCart  product={product.content}/>
              <hr />
              <h3 className='font-bold text-xl pt-10'>Specifications</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="">Specification</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {
                    product?.content?.specifications?.map((spec,i)=>{
                      return <TableRow key={spec.key + i}>
                        <TableCell className='font-bold'>{spec.key}</TableCell>
                        <TableCell>{spec.value}</TableCell>
                      </TableRow>
                    })
                  }
                 
                </TableBody>
              </Table>

      </div>

    </div>
  )
}

export default Page