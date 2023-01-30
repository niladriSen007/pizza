import React from 'react'
import Store from '../components/Store'
import { storesArr } from '../utils/stores'

function Stores() {
  return (
    <div className='mt-12 flex flex-col items-center justify-center'>
      <h2 className='text-4xl font-bold md:text-7xl  text-center pt-18 pb-4'>Our Stores🏬</h2>
    <div className='flex flex-wrap gap-14 px-24 py-8 md:py-16'>
      {
      storesArr.map(store=>(
        <Store store={store} />
      ))
      }
    </div>
    </div>
  )
}

export default Stores