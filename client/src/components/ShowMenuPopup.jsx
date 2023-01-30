import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from './Navbar'
import {GiCrossMark} from 'react-icons/gi'

const ShowMenuPopup = ({showNavbarMenu}) => {
  return (
    <div className='h-screen  bg-white w-[100vw]   px-0 py-12 flex flex-col items-center justify-center gap-12 fixed top-0 bottom-0'>
        <GiCrossMark size={28} onClick={showNavbarMenu} className="right-0 top-10 text-red-600 " />
        <section className="flex flex-col gap-8 ">
          {menu.map((m) => (
            <Link className="font-medium text-red-700" to={`${m.link}`} key={m} onClick={showNavbarMenu}>
              {m.name}
            </Link>
          ))}
        </section>
        <section className="flex flex-col gap-4">
          <button className="bg-red-700 rounded-md text-white px-2 py-1">
            Log In
          </button>
          <button className="px-2 py-1 border border-red-700 rounded-md">
            Register
          </button>
        </section>
    </div>
  )
}

export default ShowMenuPopup