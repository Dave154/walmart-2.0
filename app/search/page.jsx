import Product from "@/components/product"
import fetchsearch from "@/lib/fetchsearch"

const Page = async(props) => {
    const {searchParams}= await props
    const query = await searchParams
    const q= query.q

     const results = await fetchsearch(q) 
  return (
    <div>
      <div className="p-10">
        <h1 className="text-3xl  font-bold mb-2">Results for {q}</h1>
        <h2 className="mb-5 text-gray-400">
          ({results?.content?.page_details?.total_results} results)
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {
            results?.content?.results?.map(product=>{
              return <li className="" key={product.general.product_id}>
                <Product product={product}/>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Page