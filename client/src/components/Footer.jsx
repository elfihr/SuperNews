import React from 'react'
import { tecIcons } from '../helper/helper'

const Footer = () => {
  return (
    <footer className='bg-main py-8 flex flex-col items-center border-t-2 border-white'>
                <p className='text-main'>Powered by</p>
            <div className='flex gap-2'>
                {tecIcons.map((icon, index) => {
                    return (
                        <div key={index} className='hover:scale-150 duration-300 '>
                            <img className='w-8' src={icon.image} alt='icons' />
                        </div>
                    )
                })}
            </div>
            <p className='text-main'>copyright &copy; a Fihr Site made with <span className='text-red-500'>♥</span> and React</p>
    </footer>
  )
}

export default Footer