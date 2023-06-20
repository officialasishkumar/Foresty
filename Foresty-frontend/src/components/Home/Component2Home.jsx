import React from 'react'
import contributed from '../../assets/contributed.svg'
import { useState, useEffect } from 'react'
import { getCountOfTrees } from '../../utils/data'

import { client } from '../../client'

const Component2Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    client.fetch(getCountOfTrees)
      .then((res) => {
        setCount(res);
      })
  }, [])

  return (
    <div className='flex flex-col mb-[100px] md:flex-row mx-12 gap-10 items-center'>
      <div className='md:order-1 order-2 text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-600 to-red-600'>
        Our members contributed  <span className='text-extrabold text-5xl md:text-7xl'> {count} </span> trees to the environment
      </div>
      <img src={contributed} className="order-1 md:order-2 md:w-[450px] text-3xl w-full" alt='Planting_tree' />
    </div>
  )
}

export default Component2Home