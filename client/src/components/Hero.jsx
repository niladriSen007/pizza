import React from 'react'
import HeroImg from "../images/pizzalogo.jpg"

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center md:justify-between items-center px-12 md:px-24 py-12'>
            <div>
                <p className='text-4xl md:text-7xl pb-1'>BUY <span className='text-red-600 font-bold'> EAT</span></p>
                <p className='text-4xl md:text-7xl leading-sntightug '><span className='text-red-600 font-bold'>SLEEP</span> REPEAT🍕</p>
                <p className='text-lg md:text-2xl py-3 font-semibold'>Order your pizza and make your day.😃</p>
            </div>
            <div className='py-3 md:p-0'>
                    <img src={HeroImg} alt="pizza" className='w-[300px]  md:w-[500px]  h-[240px] md:h-[450px] rounded-lg' />
            </div>
    </section>
  )
}

export default Hero