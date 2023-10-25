import React from 'react'
import Header from '@/components/Header/page'
import Subheader from '@/components/Subheader/page'
import Category from '@/components/Category/page'
import Banner from '@/components/Banner/page'
import Preview from '@/components/preview/page'
import Product from '@/components/Product/page'
import Dealsection from '@/components/Dealsection/page'

function Homepage
() {
  return (
    <div>
    <Category />
    <Banner />
    <Product />
    <Dealsection />
    <Preview />
    </div>
  )
}

export default Homepage
