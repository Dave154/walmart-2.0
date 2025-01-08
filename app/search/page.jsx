import fetchsearch from "@/lib/fetchsearch"

const Page = async(props) => {
    const {searchParams}= await props
    const query = await searchParams
    const results = await fetchsearch(query.q)
  return (
    <div>
      your search query is: {query?.q}
    </div>
  )
}

export default Page