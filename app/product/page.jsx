import fetchproduct from '@/lib/fetchproduct'
import React from 'react'

const Page = async(props) => {
    const {searchParams}= await props
    const query = await searchParams
    const url= query.url

    const product = await fetchproduct(url)
    console.log(product,'product')
  return (
    <div>
        Page
    </div>
  )
}

export default Page