import React from 'react'
import hero from '../assets/new.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section style={{ backgroundImage: `url(${hero})` }}
      className='w-full min-h-[80vh] bg-cover bg-fixed max-sm:bg-scroll bg-center flex flex-col items-center justify-center gap-8'>
      <h3 className='text-main text-5xl font-semibold'>Seu Portal de Noticias</h3>
      <button className='btn text-2xl'>
        <Link to={"/news"}>Ver Noticias </Link>
      </button>
    </section>
  )
}

export default Home