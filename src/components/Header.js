import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import userIcon from "../assets/user.png"
import { NavLink, useNavigate } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";

const Header = () => {
    const [searchInput,setSearchIput]=useState('')
    const navigate=useNavigate()
    const navigation=[
        {
            label:"TV Shows",
            href:"tv"
        },
        {
            label:"Movies",
            href:"movie"
        }
    ]
    useEffect(()=>{
        navigate(`/search?q=${searchInput}`)
    },[searchInput])
  return (
    <div className='fixed top-0 w-full h-26 bg-neutral-600 bg-opacity-75'>
        <div className='container mx-auto px-3 flex items-center h-full'>
            <div>
                <img
                    src={logo}
                    width={120}
                    />
            </div>
            <nav className='hidden lg:flex items-center gap-1 ml-5 '>
                    {
                        navigation.map((nav,index)=>{
                            return(
                                <div>
                                    <NavLink key={nav.label} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive&& `text-neutral-50`}`}>
                                        {nav.label}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
            </nav>
            <div className='ml-auto flex items-center gap-4'>
                <form className='flex items-center gap-2'>
                    <input
                    type='text'
                    placeholder='Search here'
                    onChange={(e)=>setSearchIput(e.target.value)}
                    value={searchInput}
                    className='bg-transparent px-4 py-1 outline-none border-none'
                    />
                    <button className='text-2xl text-white'>
                    <IoMdSearch />
                    </button>
                </form>
              
                <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                    <img
                    src={userIcon}
                    width='w-full h-full'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header