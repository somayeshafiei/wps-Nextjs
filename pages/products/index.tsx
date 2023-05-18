import Link from 'next/link'
import React from 'react'

function Products() {
  return (
    <div>
        <h1>Products</h1>
        <Link href="/products/1">go to single product</Link>
    </div>
  )
}

export default Products