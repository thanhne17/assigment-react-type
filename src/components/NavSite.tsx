import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

type Props = {}

const NavSite = (props: Props) => {
    return (
        <div className='flex flex-col m-[20px] justify-center sticky top-[70px]'>
            <div className="hover:origin-center hover:rotate-[30deg] duration-300 my-[10px] text-[#fff] ml-[12px] text-center w-[50px] hover:bg-[#ccc] bg-[#1473e6] rounded-full p-[10px]">
                <i className="text-lg fa-solid fa-plus"></i>
            </div>

            <Link to="/" className="py-[10px] hover:text-black my-[10px] w-[72px] text-[#000] text-center rounded-xl hover:bg-[#ccc]">
                <i className="text-lg fa-solid fa-house"></i>
                <p className='text-xs mb-0'>Home</p>
            </Link>

            <NavLink to="route" className="py-[10px] hover:text-black my-[10px] w-[72px] text-[#000] text-center rounded-xl hover:bg-[#ccc]">
                <i className="text-lg fa-solid fa-road"></i>
                <p className='text-xs mb-0'>Lộ trình</p>
            </NavLink>

            <NavLink to="/courses" className="py-[10px] hover:text-black my-[10px] w-[72px] text-[#000] text-center rounded-xl hover:bg-[#ccc]">
                <i className="text-lg fa-solid fa-lightbulb"></i>
                <p className='text-xs mb-0'>Học</p>
            </NavLink>

            <NavLink to="post" className="py-[10px] hover:text-black my-[10px] w-[72px] text-[#000] text-center rounded-xl hover:bg-[#ccc]">
                <i className="text-lg fa-solid fa-newspaper"></i>
                <p className='text-xs mb-0'>Blog</p>
            </NavLink>
        </div>
    )
}

export default NavSite