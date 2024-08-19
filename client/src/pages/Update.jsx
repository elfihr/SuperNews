import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
const [post,setPost] = useState({
    title:"",
    desc:""
})

const navigate = useNavigate()
const location = useLocation()


const newId = location.pathname.split("/")[2]



const handleChange = (e) => {
    setPost(prev => ({...prev,[e.target.name]: e.target.value}))
}

const handleClick = async e => {
    e.preventDefault()
    try{
        await axios.put("http://localhost:4100/news/"+newId ,post)
        navigate("/")
    }catch(err){
        console.log(err)
    }
}


  return (
    <section className='min-h-[70vh] flex flex-col gap-2 justify-center items-center'>
        <h3 className='text-5xl font-semibold mb-8'>Editar Artigo</h3>
        <input className='bord' placeholder='title' onChange={handleChange} name='title'/>
        <textarea className='bord' placeholder='Texto' rows={6} onChange={handleChange} name='desc'/>
        <button className='btn' onClick={handleClick}>Editar</button>
    </section>
  )
}

export default Update