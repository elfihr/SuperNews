import React from 'react'
import { menuLinks } from '../helper/helper'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='px-[5%] py-[1.5rem] bg-main flex justify-between items-center border-b-2 border-white'>
        <div>
            <h2 className='text-3xl font-bold text-main'>Logo</h2>
        </div>
        <div className='flex gap-4'>
            {menuLinks.map((link,index) => {
                return(
                    <ul key={index}>
                        <li className='text-main text-2xl  hover:text-hover duration-300'>
                            <Link to={link.href}>{link.name}</Link>
                        </li>
                    </ul>
                )
            })}
        </div>
    </nav>
  )
}

export default Navbar