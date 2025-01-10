import fetchsearch from "@/lib/fetchsearch"

const Page = async(props) => {
    const {searchParams}= await props
    const query = await searchParams
    const q= query.q
      const results = await fetchsearch(q)
      console.log( 'test',results?.content?.results[0])

  return (
    <div>
      <div className="p-10">
        <h1 className="text-3xl  font-bold mb-2">Results for {q}</h1>
        <h2 className="mb-5 text-gray-400">
          ({results.content.page_details.total_results} results)
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {
            results?.content?.results.map(product=>{
              console.log(product)
              return <li className="" key={product.product_id}>
                {product.general.title} pp
              </li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Page