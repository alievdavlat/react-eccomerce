import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'

function FilteredProducts() {
  const {filteredProducts} = useSelector(state => state.productSlice)
  const { type } = useParams()
  return (
    <div>
        <div className='pt-16'>
            <div className='pl-14'>
              <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none'>{type}</h1>
            </div>
            <div className='grid grid-cols-4 justify-items-center  py-8 gap-12'>
                {filteredProducts?.filter((product) => product.type === type).map((product,index ) => (
                  <div key={index}> 
                    <ProductCard {...product} />
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FilteredProducts
