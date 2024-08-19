import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import post from '../assets/new.jpg'

const News = () => {
    const [news, setNews] = useState([])

    //fetch function
    useEffect(() => {
        const fetchAllNews = async () => {
            try {
                const res = await axios.get("http://localhost:4100/news")
                setNews(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllNews()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:4100/news/" + id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <section style={{ backgroundImage: `url(${post})` }} className='min-h-[70vh] flex flex-col items-center bg-cover bg-center bg-fixed max-sm:bg-scroll'>
            <div className='w-[80rem] flex flex-col gap-4 bg-white justify-center items-center py-4'>
                <h3 className='text-5xl text-center'>Artigos</h3>
                <p>Acompanhe aqui ultimas Noticias</p>
                <div className='border-2 border-b-indigo-500 mt-4 w-[90%]'></div>
                <div>
                    {news.map(item => {
                        return (
                            <div key={item.id} className='flex flex-col items-center'>
                                <h3 className='text-2xl text-center font-semibold'>{item.title}</h3>
                                <div className='flex gap-2'>
                                    <button className='btn'>
                                        <Link to={`/update/${item.id}`}>
                                            <i className="fa-solid fa-pen-nib"></i>
                                        </Link>
                                    </button>
                                    <button className='btn' onClick={() => handleDelete(item.id)}>
                                        <i className="fa-solid fa-trash-can "></i>
                                    </button>
                                </div>
                                <p className='px-4'>{item.desc}</p>
                                <div className='border-2 border-b-indigo-500 mt-4 w-[90%]'></div>
                            </div>
                        )
                    })}
                </div>

                <button className='btn mt-4 w-40'>
                    <Link to={'/post'}>Postar</Link>
                </button>
            </div>

        </section>
    )
}

export default News